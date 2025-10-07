import { Check, Shield, Heart, Star, Crown } from "lucide-react";

const BenefitsSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/RR9iB5b', '_blank');
  };
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      text: "Dormir con paz y confianza"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      text: "Sentir la protección de Dios en cada paso"
    },
    {
      icon: <Star className="w-8 h-8" />,
      text: "Llenar tu corazón de esperanza en medio de la tormenta"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      text: "Recuperar la fe que creías perdida"
    }
  ];

  return (
    <section data-cms-id="benefits-section" className="py-12 md:py-20 px-4 bg-card scroll-reveal">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 data-cms-id="benefits-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 px-2">
            Al descargar estas promesas 
            <span className="text-gradient-divine"> hoy mismo</span> podrás:
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 my-8 md:my-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-cms-id={`benefit-${index}`}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-heaven rounded-xl border border-golden/20 hover:shadow-divine transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-divine rounded-full flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-golden flex-shrink-0" />
                  <span className="text-sm md:text-base lg:text-lg font-medium text-primary">{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 md:pt-8 px-4">
            <button
              data-cms-id="benefits-button"
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-2xl font-bold shadow-sacred hover-sacred divine-pulse"
              style={{
                background: 'linear-gradient(135deg, #B22222, #DAA520)',
                color: 'white',
              }}
            >
              👉 No quiero seguir sufriendo — Quiero recibir las promesas ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;