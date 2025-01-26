import { CheckCircle } from "lucide-react";

export function Benefits() {
  const benefits = [
    "Ahorra Tiempo y Dinero: Automatiza el seguimiento de tus finanzas y encuentra áreas de ahorro.",
    "Decisiones Financieras Informadas: Toma decisiones basadas en análisis claros y precisos de tus finanzas.",
    "Acceso desde Cualquier Dispositivo: Gestiona tus finanzas desde tu computadora, tablet o smartphone, en cualquier lugar y momento.",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Beneficios</h2>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
