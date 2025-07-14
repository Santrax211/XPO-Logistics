export function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">{children}</table>
    </div>
  )
}
