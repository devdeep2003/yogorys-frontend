import { AuthLayout } from '@/components/layout/AuthLayout'
import { LoginForm } from '@/components/auth/LoginForm'

/**
 * AdminLoginPage
 * Route: /admin/login
 */
export function AdminLoginPage() {
  return (
    <AuthLayout>
      <LoginForm
        role="admin"
        heading="Welcome Back"
        supportingText="Sign in to access your admin workspace."
        identifierLabel="Username"
        identifierPlaceholder="Enter your username"
        footerText="Authorized administrators only"
      />
    </AuthLayout>
  )
}
