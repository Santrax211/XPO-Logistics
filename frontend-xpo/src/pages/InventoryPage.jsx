import { useEffect, useState } from 'react'
import api from '../services/api'
import { Table } from '../components/ui/Table'
import Button from '../components/ui/Button'

export default function InventoryPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/inventario/products')
      .then(res => setItems(res.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <>
      <h1 className="text-2xl mb-4">Inventario</h1>
      <Table>
        <thead>
          <tr>
            <th>SKU</th><th>Nombre</th><th>Categoría</th><th>Stock</th><th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {items.map(p => (
            <tr key={p.product_id}>
              <td>{p.sku}</td>
              <td>{p.name}</td>
              <td>{p.category?.name || '-'}</td>
              <td>{p.stockQuantity || 0}</td>
              <td><Button onClick={()=>alert(`Ver ${p.name}`)}>Ver</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
