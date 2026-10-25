import { AuthLayout } from '@/components/layout/AuthLayout'
import { LoginForm } from '@/components/auth/LoginForm'

/**
 * JudgeLoginPage
 * Route: /judge/login
 */
export function JudgeLoginPage() {
  return (
    <AuthLayout>
      <LoginForm
        role="judge"
        heading="Welcome Back"
        supportingText="Sign in to access your judging workspace."
        identifierLabel="Judge ID"
        identifierPlaceholder="Enter your judge ID"
        footerText="Authorized judges only"
      />
    </AuthLayout>
  )
}
