import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import InventoryPage from '../pages/InventoryPage'
import DispatchPage from '../pages/DispatchPage'
import ReceptionPage from '../pages/ReceptionPage'
import ReportsPage from '../pages/ReportsPage'
import LoginPage from '../pages/LoginPage'
import RequireAuth from '../components/RequireAuth'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="inventory" replace />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="dispatch" element={<DispatchPage />} />
            <Route path="reception" element={<ReceptionPage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}