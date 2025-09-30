import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.webp";

const FinalCTASection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/RR9iB5b', '_blank');
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-primary scroll-reveal">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="flex justify-center mb-6 md:mb-8">
          <Heart 
            className="w-16 h-16 md:w-20 md:h-20 text-white animate-pulse" 
            fill="white"
            strokeWidth={1}
          />
        </div>

        {/* Ebook Mockup - Smaller size, centered */}
        <div className="flex justify-center mb-8 md:mb-12 fade-in">
          <div className="w-[70%] md:w-[50%] max-w-md">
            <img 
              src={ebookMockup} 
              alt="Mockup del ebook Las 12 Promesas Eternas de Dios" 
              className="w-full rounded-xl shadow-2xl"
              style={{ 
                background: 'transparent',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button
            onClick={handleCTAClick}
            className="w-full md:w-auto text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl px-4 md:px-16 lg:px-20 py-4 md:py-10 lg:py-12 rounded-2xl font-bold bg-gradient-sacred text-white border-4 border-white shadow-2xl hover:scale-105 hover:shadow-divine transition-all duration-300 divine-pulse text-center break-words leading-tight min-h-[80px] md:min-h-[100px] flex items-center justify-center"
            style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
          >
            💝 Mi última oportunidad de recibir estas promesas
          </Button>
        </div>

        <style>{`
          @keyframes infinite-pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(218, 165, 32, 0.7);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 20px rgba(218, 165, 32, 0);
            }
          }
          
          .divine-pulse {
            animation: infinite-pulse 2s infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default FinalCTASection;
