import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, PieChart, ShieldCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Seguimiento de Gastos",
      description:
        "Controla tus gastos diarios y recibe alertas personalizadas para no excederte en tu presupuesto.",
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Análisis de Inversiones",
      description:
        "Optimiza tus inversiones con recomendaciones personalizadas basadas en tus objetivos financieros.",
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Seguridad",
      description:
        "Protegemos tus datos con tecnología de encriptación avanzada, asegurando la máxima privacidad.",
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Características Clave
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
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
  );
}
