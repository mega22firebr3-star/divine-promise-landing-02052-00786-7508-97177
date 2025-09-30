import { BookOpen, Shield } from "lucide-react";
import bibleIlluminated from "@/assets/bible-illuminated.jpg";

const AuthoritySection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-gentle scroll-reveal">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-divine">
              <img 
                src={bibleIlluminated} 
                alt="Biblia abierta iluminada por luz divina" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 border-2 border-golden/30 shadow-divine">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-golden flex-shrink-0" />
                <p className="text-sm md:text-base font-bold text-primary">
                  Basado en la Palabra de Dios
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="text-center md:text-left order-1 md:order-2">
            <div className="mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-divine rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 md:mb-6">
                <BookOpen className="w-8 h-8 md:w-14 md:h-14 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8 px-2">
                Palabras con autoridad eterna
              </h2>
            </div>
            
            <div className="bg-card p-6 md:p-10 rounded-2xl border-2 border-golden/30 shadow-divine">
              <p className="text-base md:text-lg lg:text-xl text-primary leading-relaxed font-medium">
                Estas 12 promesas están 100% basadas en la Biblia, no en palabras humanas.
                <br />
                <span className="text-golden font-bold">Por siglos han sostenido a creyentes en todo el mundo.</span>
                <br />
                <span className="text-sacred font-bold">Hoy, pueden sostener también tu vida.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
