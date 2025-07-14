// src/pages/ReceptionPage.jsx
import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Table } from '../components/ui/Table'
import Button from '../components/ui/Button'

export default function ReceptionPage() {
  const [ingresses, setIngesses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/recepcion/ingress')
      .then(res => setIngesses(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando recepciones…</p>

  return (
    <div>
      <h1 className="text-2xl mb-4">Recepciones</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Proveedor</th>
            <th>Fecha</th>
            <th>Referencia</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ingresses.map(i => (
            <tr key={i.ingress_id}>
              <td>{i.ingress_id}</td>
              <td>{i.supplier?.name || '-'}</td>
              <td>{new Date(i.date).toLocaleString()}</td>
              <td>{i.reference || '-'}</td>
              <td>{i.status}</td>
              <td>
                <Button onClick={() => alert(`Ver ingreso #${i.ingress_id}`)}>
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
