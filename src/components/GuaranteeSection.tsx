import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 scroll-reveal" style={{ background: '#DAA520' }}>
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 md:p-6 animate-pulse">
            <Shield className="w-20 h-20 md:w-28 md:h-28 text-white" strokeWidth={2} fill="white" fillOpacity={0.3} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 px-2">
          Compra sin miedo — Garantía total de 7 días
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12 border-2 border-white/20 mx-2">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
            Si en 7 días no sientes paz, esperanza o ningún cambio,
            <br className="hidden sm:block" />
            <span className="font-bold">te devolvemos el 100% de tu dinero.</span>
            <br className="hidden sm:block" />
            Así de seguros estamos del poder de estas promesas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
