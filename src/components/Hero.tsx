import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transforma tu gestión financiera con Babbler
        </h1>
        <p className="text-xl mb-8">¡Prueba gratuita por 30 días!</p>
        <div>
          <Link href="/prueba-gratuita">
            <Button size="lg" variant="secondary">
              Prueba Gratuita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
