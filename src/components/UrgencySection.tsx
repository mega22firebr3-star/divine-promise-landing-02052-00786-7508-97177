import { Clock, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-12 md:py-20 px-4 scroll-reveal" style={{ background: '#B22222' }}>
      <div className="container mx-auto max-w-5xl text-center">
        <div className="flex justify-center mb-4 md:mb-6">
          <AlertCircle className="w-16 h-16 md:w-20 md:h-20 text-white animate-pulse" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 px-2">
          Oferta válida solo por tiempo limitado
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto px-2">
          Miles ya recibieron las promesas.
          <br className="hidden sm:block" />
          Pero esta oferta especial podría terminar en cualquier momento.
          <br className="hidden sm:block" />
          <span className="font-bold">No dejes pasar la oportunidad de transformar tu vida HOY.</span>
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12 border-2 border-white/20 mx-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
            <Clock className="w-10 h-10 md:w-12 md:h-12 text-white animate-pulse" />
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white animate-pulse">
              El tiempo se agota:
            </p>
          </div>
          
          <div className="flex justify-center gap-3 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 min-w-[80px] md:min-w-[100px] lg:min-w-[140px]">
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold" style={{ color: '#B22222' }}>
                {String(minutes).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm lg:text-base font-semibold mt-1 md:mt-2" style={{ color: '#B22222' }}>
                MINUTOS
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">:</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 min-w-[80px] md:min-w-[100px] lg:min-w-[140px]">
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold" style={{ color: '#B22222' }}>
                {String(seconds).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm lg:text-base font-semibold mt-1 md:mt-2" style={{ color: '#B22222' }}>
                SEGUNDOS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
