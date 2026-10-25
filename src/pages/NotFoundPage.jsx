import { Link } from 'react-router-dom'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Compass } from 'lucide-react'

/**
 * NotFoundPage
 * Fallback for unknown routes ensuring a peaceful, informative screen instead of blank.
 */
export function NotFoundPage() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-md bg-slate-950/70 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl text-center py-6">
        <CardHeader className="space-y-2 pb-4">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-300">
            <Compass className="size-6" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-semibold text-slate-100">
            Page Not Found
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-slate-400">
            The page you are looking for does not exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <Button
            asChild
            className="w-full h-11 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.35)]"
          >
            <Link to="/judge/login">Return to Judge Login</Link>
          </Button>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
