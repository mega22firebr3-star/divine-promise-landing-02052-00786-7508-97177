import { Shield, Heart, BookOpen, Star } from "lucide-react";

const DetailedBenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Protección divina constante",
      description: "sentir que no caminas solo."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Paz en medio de la tormenta",
      description: "descanso real en las noches difíciles."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Fe renovada",
      description: "recordar cada día que Dios cumple su palabra."
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Esperanza viva",
      description: "mirar el futuro sin miedo, con confianza."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-primary scroll-reveal">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-golden mb-6 md:mb-8 px-2">
            ¿Qué ganarás al recibir estas promesas?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-divine border border-golden/20 hover:shadow-sacred transition-all duration-500 group scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-divine rounded-full flex items-center justify-center text-golden mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedBenefitsSection;