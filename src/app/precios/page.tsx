import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Precios() {
  const plans = [
    {
      name: "Básico",
      price: "$9.99/mes",
      features: [
        "Seguimiento de gastos",
        "Alertas personalizadas",
        "Gestión de presupuestos básica",
        "Soporte por email",
      ],
    },
    {
      name: "Premium",
      price: "$19.99/mes",
      features: [
        "Todas las funciones del plan Básico",
        "Análisis de inversiones",
        "Proyecciones financieras avanzadas",
        "Recordatorios de pagos ilimitados",
        "Soporte prioritario 24/7",
      ],
    },
    {
      name: "Empresas",
      price: "Personalizado",
      features: [
        "Todas las funciones del plan Premium",
        "Integración con sistemas contables",
        "Múltiples usuarios y permisos",
        "Reportes personalizados",
        "Gerente de cuenta dedicado",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Planes y Precios
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      {plan.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-3xl font-bold text-center mb-6">
                      {plan.price}
                    </p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/prueba-gratuita" className="mt-auto">
                      <Button className="w-full">
                        Comenzar prueba gratuita
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
