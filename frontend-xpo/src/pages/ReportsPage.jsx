// src/pages/ReportsPage.jsx
import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Table } from '../components/ui/Table'
import Button from '../components/ui/Button'

export default function ReportsPage() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/reportes/requests')
      .then(res => setReports(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando reportes…</p>

  return (
    <div>
      <h1 className="text-2xl mb-4">Solicitudes de Reporte</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Generado</th>
            <th>Solicitado por</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.report_id}>
              <td>{r.report_id}</td>
              <td>{r.type}</td>
              <td>{r.status}</td>
              <td>
                {r.generated_at
                  ? new Date(r.generated_at).toLocaleString()
                  : '–'}
              </td>
              <td>{r.requested_by || '–'}</td>
              <td>
                <Button onClick={() => alert(`Ver reporte #${r.report_id}`)}>
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
