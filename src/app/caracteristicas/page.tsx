import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  PieChart,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function Caracteristicas() {
  const features = [
    {
      title: "Seguimiento de Gastos",
      description:
        "Controla tus gastos diarios y recibe alertas personalizadas para no excederte en tu presupuesto.",
      icon: <LineChart className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Análisis de Inversiones",
      description:
        "Optimiza tus inversiones con recomendaciones personalizadas basadas en tus objetivos financieros.",
      icon: <PieChart className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Seguridad Avanzada",
      description:
        "Protegemos tus datos con tecnología de encriptación avanzada, asegurando la máxima privacidad.",
      icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Gestión de Presupuestos",
      description:
        "Crea y administra presupuestos personalizados para diferentes categorías de gastos.",
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Proyecciones Financieras",
      description:
        "Visualiza tu futuro financiero con proyecciones basadas en tus hábitos de gasto e ingresos.",
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Recordatorios de Pagos",
      description:
        "Nunca más te olvides de una factura con nuestro sistema de recordatorios personalizables.",
      icon: <Clock className="h-12 w-12 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Características de Babbler
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {feature.icon}
                      <span className="ml-4">{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
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
