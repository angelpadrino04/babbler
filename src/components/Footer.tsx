import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Babbler</h3>
            <p>Transforma tu gestión financiera</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/caracteristicas">Características</Link>
              </li>
              <li>
                <Link href="/precios">Precios</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">Términos de Servicio</Link>
              </li>
              <li>
                <Link href="/privacy">Política de Privacidad</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Babbler. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
