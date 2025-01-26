import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Contáctanos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input type="text" placeholder="Nombre" />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Mensaje" />
                    <Button type="submit" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    <span>soporte@babbler.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    <span>123 Calle Finanzas, Ciudad Tecnológica, 12345</span>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <a
                      href="https://facebook.com/babbler"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://twitter.com/babbler"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://instagram.com/babbler"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
