import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { JudgeLoginPage } from '@/pages/JudgeLoginPage'
import { AdminLoginPage } from '@/pages/AdminLoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/**
 * App
 * Primary router setup for Yogorys judge and admin authentication.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to Judge Login */}
        <Route path="/" element={<Navigate to="/judge/login" replace />} />

        {/* Dedicated Judge and Admin login routes */}
        <Route path="/judge/login" element={<JudgeLoginPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
