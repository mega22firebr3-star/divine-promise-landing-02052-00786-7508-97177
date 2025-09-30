import { Button } from "@/components/ui/button";
import { Shield, Clock, Check } from "lucide-react";

const OfferCard = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/RR9iB5b', '_blank');
  };

  return (
    <section className="py-12 md:py-20 px-4 scroll-reveal relative" style={{ background: 'linear-gradient(135deg, hsl(210 40% 98%), hsl(210 25% 95%))' }}>
      {/* Enhanced Background Elements for Desktop */}
      <div className="hidden md:block absolute left-2 top-1/4 opacity-20">
        <div className="text-8xl animate-pulse text-golden">✨</div>
      </div>
      <div className="hidden md:block absolute right-2 top-1/6 opacity-25">
        <div className="text-6xl text-primary animate-bounce">🙏</div>
      </div>
      <div className="hidden md:block absolute left-4 bottom-1/6 opacity-20">
        <div className="text-7xl text-sacred animate-pulse">✝️</div>
      </div>
      <div className="hidden md:block absolute right-4 bottom-1/4 opacity-25">
        <div className="text-5xl text-golden animate-bounce">💫</div>
      </div>
      <div className="hidden md:block absolute left-1/4 top-1/8 opacity-15">
        <div className="text-4xl text-primary">🕊️</div>
      </div>
      <div className="hidden md:block absolute right-1/4 bottom-1/8 opacity-15">
        <div className="text-4xl text-sacred">💝</div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="w-full md:w-3/5 mx-auto">
          <div 
            className="rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-4 animate-fade-in"
            style={{ borderColor: '#DAA520', background: 'hsl(45 80% 97%)' }}
          >
            {/* Título */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                ✨ Hoy es tu momento: recibe las 12 promesas eternas ✨
              </h2>
              
              {/* Subtítulo */}
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
                No ignores este llamado. Cada día sin paz es un día perdido. Hoy puedes cambiar tu historia.
              </p>
            </div>

            {/* Preço */}
            <div className="text-center mb-8 md:mb-10">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ color: '#B22222' }}>
                💰 10x de R$0,59
              </div>
              <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
                o R$5,90 al contado
              </div>
            </div>

            {/* Benefícios Checklist */}
            <div className="mb-8 md:mb-10">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                  <span className="text-base md:text-lg lg:text-xl font-medium">Dormir en paz desde hoy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                  <span className="text-base md:text-lg lg:text-xl font-medium">Recuperar la fe y la esperanza</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                  <span className="text-base md:text-lg lg:text-xl font-medium">Sentir la protección divina</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                  <span className="text-base md:text-lg lg:text-xl font-medium">Llenar tu corazón de propósito</span>
                </div>
              </div>
            </div>

            {/* Garantia */}
            <div className="bg-green-50 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-green-200">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
                <p className="text-base md:text-lg font-semibold text-green-800">
                  🛡️ 7 días de garantía total: si no sientes paz, te devolvemos tu dinero.
                </p>
              </div>
            </div>

            {/* Urgência */}
              <div className="bg-red-50 rounded-2xl p-4 md:p-6 mb-8 md:mb-10 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-600 flex-shrink-0 animate-pulse" />
                <div className="text-base md:text-lg font-semibold text-red-800">
                  <p className="mb-2">⏰ Oferta especial válida solo por tiempo limitado.</p>
                  <p>Cada hora que pasa es una oportunidad menos de vivir en paz.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleCTAClick}
              className="w-full text-base md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 py-6 md:py-8 lg:py-10 rounded-2xl font-bold text-white border-4 border-white shadow-2xl hover:scale-105 transition-all duration-300 offer-pulse text-center break-words leading-tight flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #B22222, #DAA520)',
                wordWrap: 'break-word', 
                whiteSpace: 'normal',
                minHeight: '80px'
              }}
            >
              🔥 Tomar mi decisión AHORA y transformar mi vida
            </Button>
          </div>
        </div>

        <style>{`
          @keyframes offer-pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(178, 34, 34, 0.7);
            }
            50% {
              transform: scale(1.02);
              box-shadow: 0 0 0 15px rgba(178, 34, 34, 0);
            }
          }
          
          .offer-pulse {
            animation: offer-pulse 2s infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default OfferCard;