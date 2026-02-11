import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dian-gray flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-dian-navy mb-4">404</p>
        <p className="text-sm text-gray-500 mb-6">
          No encontramos la página que buscas.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-dian-navy text-white rounded-xl font-semibold hover:bg-dian-navy-light transition-colors text-sm"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
