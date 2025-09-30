import { Button } from "@/components/ui/button";
import heroImage from "@/assets/divine-light-hero.jpg";
import ebookMockup from "@/assets/ebook-mockup.webp";
import jesusImage from "@/assets/jesus-celestial.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/RR9iB5b', '_blank');
  };

  return (
    <section className="relative min-h-screen md:min-h-screen flex items-center bg-card overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luz divina descendiendo del cielo sobre persona en oración" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Jesus Image - Visible and Centered */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img 
            src={jesusImage} 
            alt="Jesús con brazos abiertos en luz celestial" 
            className="w-full h-full object-cover opacity-50"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-mobile-hero md:bg-gradient-to-b md:from-background/80 md:via-background/60 md:to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-20 flex items-center" style={{ minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight fade-up break-words max-w-6xl" style={{ wordWrap: 'break-word', whiteSpace: 'normal', lineHeight: '1.2' }}>
              <span className="text-primary">¿Tu vida se siente vacía y sin paz?</span>
              <span className="block text-golden mt-2 font-black">Descubre las 12 promesas eternas</span>
              <span className="block text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 md:mt-6 leading-relaxed">
                que pueden devolverte esperanza 
                <span className="text-sacred font-black"> HOY.</span>
              </span>
            </h1>

            {/* Mockup Image - Large and Centered */}
            <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl fade-in-delay">
              <img 
                src={ebookMockup} 
                alt="Mockup del ebook Las 12 Promesas Eternas de Dios en múltiples dispositivos" 
                className="w-full rounded-2xl shadow-2xl animate-zoom-in"
                style={{ 
                  background: 'transparent',
                  objectFit: 'contain',
                  maxWidth: '100%'
                }}
              />
            </div>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground leading-relaxed fade-in-delay max-w-4xl break-words" style={{ wordWrap: 'break-word', whiteSpace: 'normal', lineHeight: '1.4' }}>
              No son frases vacías. Son verdades vivas que ya devolvieron esperanza a 
              <span className="text-primary font-semibold"> miles de creyentes</span>. 
              Hoy pueden devolvértela a ti.
            </p>

            {/* CTA Button - Large, Centered and Prominent */}
            <div className="pt-4 md:pt-8 fade-in-delay w-full max-w-4xl">
              <Button 
                onClick={handleCTAClick}
                className="w-full px-8 md:px-16 lg:px-20 py-6 md:py-10 lg:py-12 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl rounded-2xl font-bold bg-gradient-sacred text-white border-0 shadow-sacred hover-sacred divine-pulse transition-all duration-300 hover:shadow-divine hover:scale-105 text-center break-words leading-tight min-h-[80px] md:min-h-[100px] flex items-center justify-center"
                style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
              >
                🙏 Sí, necesito encontrar la paz que tanto busco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;