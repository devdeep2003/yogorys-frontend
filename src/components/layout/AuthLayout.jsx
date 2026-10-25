import { MeditatingAsciiArt } from '@/components/artwork/MeditatingAsciiArt'

/**
 * AuthLayout
 * A calm, premium, dark yoga-inspired layout with atmospheric lighting.
 * Displays ASCII meditating art on the left and login form on the right (desktop),
 * stacked gracefully without horizontal overflow on mobile.
 */
export function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#07080e] text-slate-100 flex flex-col justify-center items-center px-3 py-4 sm:p-6 lg:p-8 xl:p-10 overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        {/* Upper violet glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[32rem] sm:h-[32rem] rounded-full bg-violet-700/10 blur-[120px]" />
        {/* Center-left subtle indigo pool */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-indigo-600/8 blur-[100px]" />
        {/* Lower midnight navy aura */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 sm:w-[36rem] sm:h-[36rem] rounded-full bg-blue-900/10 blur-[130px]" />
      </div>

      {/* Main content grid */}
      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center">
          {/* Left Column: Meditating ASCII Artwork with Atmosphere */}
          <section
            aria-label="Yoga meditation scenery"
            className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-1 w-full"
          >
            <div className="w-full flex items-center justify-center">
              <MeditatingAsciiArt />
            </div>
          </section>

          {/* Right Column: Interaction Card */}
          <section
            aria-label="Login form container"
            className="lg:col-span-5 flex flex-col items-center justify-center w-full order-2 lg:order-2"
          >
            {children}
          </section>
        </div>
      </main>

      {/* Subtle bottom peaceful indicator */}
      <footer className="relative z-10 mt-4 sm:mt-6 text-center">
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </footer>
    </div>
  )
}
