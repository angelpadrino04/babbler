import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "¡Increíble! He ahorrado más desde que uso Babbler. La interfaz es muy fácil de usar.",
      author: "María López",
      role: "Cliente Satisfecha",
    },
    {
      quote:
        "Babbler me ayudó a diversificar mis inversiones y ahora tengo más confianza en mis decisiones financieras.",
      author: "Juan Pérez",
      role: "Inversor",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="mr-2">
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
