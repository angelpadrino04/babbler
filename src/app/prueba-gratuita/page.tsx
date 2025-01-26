import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PruebaGratuita() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Comienza tu prueba gratuita de 30 días
            </h1>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Regístrate para tu prueba gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input type="text" placeholder="Nombre completo" />
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Contraseña" />
                  <Input type="password" placeholder="Confirmar contraseña" />
                  <Button type="submit" className="w-full">
                    Comenzar prueba gratuita
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Al registrarte, aceptas nuestros Términos de Servicio y
                  Política de Privacidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
