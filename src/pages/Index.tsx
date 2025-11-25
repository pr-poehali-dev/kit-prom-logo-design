import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const products = [
    {
      id: 1,
      name: "Океанская коллекция",
      price: "15 990 ₽",
      image: "https://cdn.poehali.dev/projects/f953daf8-f970-43b6-9de8-b80dc8411897/files/5cabf0cf-7d18-41a1-ad42-59cc2b93f790.jpg",
      description: "Премиальные товары морской тематики"
    },
    {
      id: 2,
      name: "Глубинная серия",
      price: "24 990 ₽",
      image: "https://cdn.poehali.dev/projects/f953daf8-f970-43b6-9de8-b80dc8411897/files/5cabf0cf-7d18-41a1-ad42-59cc2b93f790.jpg",
      description: "Эксклюзивная линейка для ценителей"
    },
    {
      id: 3,
      name: "Китовый набор",
      price: "12 490 ₽",
      image: "https://cdn.poehali.dev/projects/f953daf8-f970-43b6-9de8-b80dc8411897/files/5cabf0cf-7d18-41a1-ad42-59cc2b93f790.jpg",
      description: "Идеальный подарок для близких"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/f953daf8-f970-43b6-9de8-b80dc8411897/files/5cabf0cf-7d18-41a1-ad42-59cc2b93f790.jpg" 
              alt="KitProm Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KitProm
            </span>
          </div>
          
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => setActiveSection("home")}
              className={`font-medium transition-colors hover:text-primary ${
                activeSection === "home" ? "text-primary" : "text-foreground"
              }`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection("about")}
              className={`font-medium transition-colors hover:text-primary ${
                activeSection === "about" ? "text-primary" : "text-foreground"
              }`}
            >
              О нас
            </button>
          </div>

          <Button className="gap-2">
            <Icon name="ShoppingCart" size={20} />
            Корзина
          </Button>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === "home" && (
          <>
            <section className="container mx-auto px-4 py-20 text-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-float">
                  Океан возможностей
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Откройте для себя уникальные товары, вдохновленные красотой морских глубин
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
                    <Icon name="ShoppingBag" size={20} />
                    Каталог
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform">
                    <Icon name="Info" size={20} />
                    Подробнее
                  </Button>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
                Популярные товары
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="mb-2">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                      <p className="text-2xl font-bold text-primary mt-4">{product.price}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full gap-2">
                        <Icon name="ShoppingCart" size={18} />
                        В корзину
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
              <div className="container mx-auto px-4 text-center">
                <Icon name="Waves" size={64} className="mx-auto mb-6 animate-float" />
                <h2 className="text-4xl font-bold mb-4">Погрузитесь в мир KitProm</h2>
                <p className="text-xl mb-8 opacity-90">
                  Каждый товар — это история, рассказанная морем
                </p>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Sparkles" size={20} />
                  Узнать больше
                </Button>
              </div>
            </section>
          </>
        )}

        {activeSection === "about" && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О нас
              </h1>
              
              <Card className="mb-8 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon name="Target" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Наша миссия</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        KitProm — это больше, чем интернет-магазин. Мы создаём уникальные продукты, 
                        вдохновлённые величием океана и красотой морских обитателей. Каждый наш товар 
                        несёт частичку морской стихии и призван напоминать о безграничности природы.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-secondary/10 p-4 rounded-full">
                      <Icon name="Heart" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Наши ценности</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Мы верим в качество, экологичность и внимание к деталям. Работаем только 
                        с проверенными поставщиками и следим за тем, чтобы каждый товар соответствовал 
                        высочайшим стандартам. Ваше доверие — наша главная награда.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Наша команда</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        За KitProm стоит команда увлечённых профессионалов, объединённых любовью 
                        к морю и стремлением делиться этой красотой с миром. Мы постоянно 
                        исследуем новые направления и создаём инновационные продукты.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                    <h4 className="text-xl font-bold mb-2">5+ лет</h4>
                    <p className="text-muted-foreground">на рынке</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Star" size={48} className="mx-auto mb-4 text-secondary" />
                    <h4 className="text-xl font-bold mb-2">10 000+</h4>
                    <p className="text-muted-foreground">довольных клиентов</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Package" size={48} className="mx-auto mb-4 text-primary" />
                    <h4 className="text-xl font-bold mb-2">500+</h4>
                    <p className="text-muted-foreground">уникальных товаров</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-foreground text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/f953daf8-f970-43b6-9de8-b80dc8411897/files/5cabf0cf-7d18-41a1-ad42-59cc2b93f790.jpg" 
                  alt="KitProm Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xl font-bold">KitProm</span>
              </div>
              <p className="text-white/70">
                Океан возможностей для вас
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>Email: info@kitprom.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Twitter" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20 text-white/70">
            © 2024 KitProm. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
