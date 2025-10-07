import { Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section data-cms-id="pricing-section" className="py-12 md:py-20 px-4 bg-gradient-gentle scroll-reveal">
      <div className="container mx-auto max-w-4xl text-center">
        <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" style={{ color: '#DAA520' }} />
        
        <h2 data-cms-id="pricing-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 px-2">
          Acceso inmediato por un precio simbólico
        </h2>
        
        <div 
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-4 transform hover:scale-105 transition-all duration-300 mx-2 cursor-pointer" 
          style={{ borderColor: '#DAA520' }}
          onClick={() => window.open('https://pay.kiwify.com.br/RR9iB5b', '_blank')}
        >
          <div className="mb-6 md:mb-8">
            <div data-cms-id="pricing-installment" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4" style={{ color: '#B22222' }}>
              10x R$ 0,59
            </div>
            <div data-cms-id="pricing-full" className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Ou R$ 5,90 à vista
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 md:p-6 border-2" style={{ borderColor: '#DAA520' }}>
            <p data-cms-id="pricing-description" className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              Menos que un café… por la paz eterna de tu corazón.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
