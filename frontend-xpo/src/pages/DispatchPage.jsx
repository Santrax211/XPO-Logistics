import { useEffect, useState } from 'react'
import api from '../services/api'
import { Table } from '../components/ui/Table'

export default function DispatchPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    api.get('/despacho/orders').then(res => setOrders(res.data))
  }, [])

  return (
    <>
      <h1 className="text-2xl mb-4">Órdenes de Despacho</h1>
      <Table>
        <thead>
          <tr><th>ID</th><th>Cliente</th><th>Estado</th><th>Creado</th></tr>
        </thead>
        <tbody>
          {orders.map(d => (
            <tr key={d.dispatch_id}>
              <td>{d.dispatch_id}</td>
              <td>{d.client_name}</td>
              <td>{d.status}</td>
              <td>{new Date(d.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
