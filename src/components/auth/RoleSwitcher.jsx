import { NavLink } from 'react-router-dom'
import { Scale, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * RoleSwitcher
 * Subtle tab navigation between Judge and Admin login routes with clear active states
 * and accessible touch targets (>= 44px height).
 */
export function RoleSwitcher({ className }) {
  return (
    <nav
      aria-label="Login role selection"
      className={cn(
        'inline-flex items-center p-1 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md',
        className
      )}
    >
      <NavLink
        to="/judge/login"
        className={({ isActive }) =>
          cn(
            'flex items-center justify-center gap-2 px-3 sm:px-4 min-h-[44px] rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
            isActive
              ? 'bg-violet-600/25 text-violet-200 border border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.25)]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
          )
        }
      >
        <Scale className="size-3.5 sm:size-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Judge Login</span>
      </NavLink>

      <NavLink
        to="/admin/login"
        className={({ isActive }) =>
          cn(
            'flex items-center justify-center gap-2 px-3 sm:px-4 min-h-[44px] rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
            isActive
              ? 'bg-violet-600/25 text-violet-200 border border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.25)]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
          )
        }
      >
        <Shield className="size-3.5 sm:size-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Admin Login</span>
      </NavLink>
    </nav>
  )
}
