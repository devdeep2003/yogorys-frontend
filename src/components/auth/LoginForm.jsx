import { useState, useRef } from 'react'
import { Eye, EyeOff, Lock, User, Scale, Loader2, Info } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RoleSwitcher } from './RoleSwitcher'
import { cn } from '@/lib/utils'

/**
 * Reusable LoginForm component for Judge and Admin logins.
 * Strictly UI-only without backend requests.
 */
export function LoginForm({
  role = 'judge',
  heading = 'Welcome Back',
  supportingText = 'Sign in to access your judging workspace.',
  identifierLabel = 'Judge ID',
  identifierPlaceholder = 'Enter your judge ID',
  footerText = 'Authorized judges only',
}) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState(null)

  const identifierInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const inputId = role === 'judge' ? 'judgeId' : 'adminUsername'
  const passwordId = role === 'judge' ? 'judgePassword' : 'adminPassword'

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value)
    if (errors.identifier) {
      setErrors((prev) => ({ ...prev, identifier: undefined }))
    }
    if (submissionFeedback) setSubmissionFeedback(null)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }))
    }
    if (submissionFeedback) setSubmissionFeedback(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmissionFeedback(null)

    const nextErrors = {}
    if (!identifier.trim()) {
      nextErrors.identifier = `Please enter your ${identifierLabel.toLowerCase()}.`
    }
    if (!password) {
      nextErrors.password = 'Please enter your password.'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      if (nextErrors.identifier && identifierInputRef.current) {
        identifierInputRef.current.focus()
      } else if (nextErrors.password && passwordInputRef.current) {
        passwordInputRef.current.focus()
      }
      return
    }

    // Simulate local UI submission
    setErrors({})
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionFeedback({
        type: 'info',
        title: 'Authentication not configured',
        message:
          'Backend authentication integration is not configured yet. This is a local UI preview.',
      })
    }, 600)
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Role Switcher placed directly above the card */}
      <div className="mb-3 sm:mb-4">
        <RoleSwitcher />
      </div>

      <Card className="w-full bg-slate-950/70 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_1px_1px_rgba(255,255,255,0.06)] rounded-2xl overflow-hidden transition-all duration-300">
        <CardHeader className="space-y-1 sm:space-y-1.5 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 text-center">
          <div className="mx-auto mb-1 flex size-9 sm:size-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300">
            {role === 'judge' ? (
              <Scale className="size-4.5 sm:size-5" aria-hidden="true" />
            ) : (
              <User className="size-4.5 sm:size-5" aria-hidden="true" />
            )}
          </div>
          <CardTitle className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
            {heading}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-slate-400">
            {supportingText}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3.5 sm:space-y-4 px-4 sm:px-6">
          {submissionFeedback && (
            <Alert
              variant="default"
              className="bg-violet-950/40 border-violet-500/30 text-violet-200 py-3"
            >
              <Info className="size-4 text-violet-400" aria-hidden="true" />
              <div className="ml-2">
                <AlertTitle className="text-xs font-semibold text-violet-300">
                  {submissionFeedback.title}
                </AlertTitle>
                <AlertDescription className="text-xs text-violet-200/80 mt-0.5">
                  {submissionFeedback.message}
                </AlertDescription>
              </div>
            </Alert>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
            {/* Field 1: Identifier (Judge ID or Username) */}
            <div className="space-y-1.5">
              <Label
                htmlFor={inputId}
                className="text-xs font-medium text-slate-300"
              >
                {identifierLabel}
              </Label>
              <div className="relative">
                <Input
                  ref={identifierInputRef}
                  id={inputId}
                  name={inputId}
                  type="text"
                  autoComplete="username"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck="false"
                  placeholder={identifierPlaceholder}
                  value={identifier}
                  onChange={handleIdentifierChange}
                  aria-invalid={Boolean(errors.identifier)}
                  aria-describedby={errors.identifier ? `${inputId}-error` : undefined}
                  required
                  className={cn(
                    'h-11 bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-500 rounded-lg focus-visible:border-violet-500 focus-visible:ring-violet-500/30 transition-all text-sm',
                    errors.identifier &&
                      'border-rose-500/80 focus-visible:border-rose-500 focus-visible:ring-rose-500/30'
                  )}
                />
              </div>
              {errors.identifier && (
                <p
                  id={`${inputId}-error`}
                  role="alert"
                  className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-medium"
                >
                  {errors.identifier}
                </p>
              )}
            </div>

            {/* Field 2: Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor={passwordId}
                className="text-xs font-medium text-slate-300"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  ref={passwordInputRef}
                  id={passwordId}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? `${passwordId}-error` : undefined}
                  required
                  className={cn(
                    'h-11 pr-12 bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-500 rounded-lg focus-visible:border-violet-500 focus-visible:ring-violet-500/30 transition-all text-sm',
                    errors.password &&
                      'border-rose-500/80 focus-visible:border-rose-500 focus-visible:ring-rose-500/30'
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-slate-400 hover:text-slate-200 rounded-r-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p
                  id={`${passwordId}-error`}
                  role="alert"
                  className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-medium"
                >
                  {errors.password}
                </p>
              )}
            </div>

            {/* Primary Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_24px_rgba(124,58,237,0.5)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin mr-2" aria-hidden="true" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="pt-2 pb-4 sm:pb-6 px-4 sm:px-6 flex justify-center border-t border-white/[0.04]">
          <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium tracking-wide">
            <Lock className="size-3 text-slate-500" aria-hidden="true" />
            <span>{footerText}</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
