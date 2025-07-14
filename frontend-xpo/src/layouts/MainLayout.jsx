import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-60 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">XPO Logistics</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/inventory">Inventario</Link>
          <Link to="/dispatch">Despacho</Link>
          <Link to="/reception">Recepción</Link>
          <Link to="/reports">Reportes</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
