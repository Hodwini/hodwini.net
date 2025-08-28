// app/not-found.tsx
export default function NotFound() {
  return (
    <html>
      <body className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-gray-600">Страница не найдена</p>
          <a
            href="/"
            className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            На главную
          </a>
        </div>
      </body>
    </html>
  )
}
