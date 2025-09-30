import { Quote } from "lucide-react";

const StorytellingSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-gentle scroll-reveal">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <Quote className="w-12 h-12 md:w-16 md:h-16 text-golden mx-auto mb-6 md:mb-8" />
          
          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
            <p className="text-primary font-medium text-lg md:text-xl">
              María pasaba noches enteras sin dormir.
            </p>
            <p className="text-muted-foreground">
              El corazón acelerado, la mente llena de miedo, preguntándose si Dios la había olvidado.
            </p>
            <p className="text-primary font-semibold text-xl md:text-2xl">
              Hasta que encontró estas promesas.
            </p>
            <p className="text-muted-foreground">
              Hoy duerme tranquila, sonríe de nuevo y dice:
            </p>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient-divine italic py-4 mt-6">
              <span className="underline decoration-golden decoration-2 underline-offset-4">Volví a sentir la mano de Dios en mi vida</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;