import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¡Comienza Ahora!</h2>
        <p className="mb-8 text-xl">
          Transforma tu gestión financiera con Babbler
        </p>
        <Link href="/prueba-gratuita">
          <Button size="lg" variant="secondary">
            Prueba Gratuita
          </Button>
        </Link>
      </div>
    </section>
  );
}
