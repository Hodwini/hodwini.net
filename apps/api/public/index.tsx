import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Elysia + Bun Fullstack</h1>
      <p>HMR should work here on Bun 1.3+.</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)

