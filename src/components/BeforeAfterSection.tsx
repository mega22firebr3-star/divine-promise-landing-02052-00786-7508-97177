import { X, Check, ArrowRight } from "lucide-react";

const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-card scroll-reveal">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
          El cambio que experimentarás
        </h2>
        
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
          Seguir sin estas promesas es seguir viviendo un infierno silencioso. Con ellas, es como abrir una ventana al cielo.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Antes */}
          <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 p-6 md:p-8 rounded-2xl border-2 border-destructive/20">
            <h3 className="text-2xl md:text-3xl font-bold text-destructive mb-4 md:mb-6 flex items-center gap-2">
              <X className="w-6 h-6 md:w-8 md:h-8" />
              Antes
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {["Ansiedad", "Soledad", "Vacío", "Noches en vela"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                  <X className="w-5 h-5 md:w-6 md:h-6 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2 my-4 md:my-0">
            <ArrowRight className="w-12 h-12 md:w-16 md:h-16 text-golden animate-pulse" />
          </div>

          {/* Después */}
          <div className="bg-gradient-to-br from-golden/10 to-golden/5 p-6 md:p-8 rounded-2xl border-2 border-golden/30">
            <h3 className="text-2xl md:text-3xl font-bold text-golden mb-4 md:mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 md:w-8 md:h-8" />
              Después
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {["Descanso", "Fe renovada", "Paz verdadera", "Propósito claro"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-golden flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;