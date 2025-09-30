import { Star } from "lucide-react";
import testimonialMaria28 from "@/assets/testimonial-maria-28.jpg";
import testimonialSofia47 from "@/assets/testimonial-sofia-47.jpg";
import testimonialCarlos from "@/assets/testimonial-carlos.jpg";
import testimonialJuan from "@/assets/testimonial-juan.jpg";
import testimonialElena from "@/assets/testimonial-elena.jpg";
import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialSofia from "@/assets/testimonial-sofia.jpg";

const TestimonialsSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/RR9iB5b', '_blank');
  };
  
  const testimonials = [
    {
      text: "Después de leerlas, pude dormir en paz por primera vez en meses.",
      name: "Carlos M.",
      age: "35 años",
      image: testimonialCarlos
    },
    {
      text: "Sentí que Dios me hablaba directamente, mi ansiedad se fue.",
      name: "María P.",
      age: "28 años", 
      image: testimonialMaria28
    },
    {
      text: "Me devolvió la esperanza que había perdido.",
      name: "Sofía R.",
      age: "47 años",
      image: testimonialSofia47
    },
    {
      text: "Ya no me siento sola, sé que Dios está conmigo siempre.",
      name: "Ana L.",
      age: "42 años",
      image: testimonialMaria
    },
    {
      text: "Estas promesas me dieron la fuerza para seguir adelante cuando todo parecía perdido.",
      name: "Roberto J.",
      age: "52 años",
      image: testimonialSofia
    },
    {
      text: "Mi vida cambió completamente, ahora tengo paz en medio de las tormentas.",
      name: "Juan C.",
      age: "38 años",
      image: testimonialJuan
    },
    {
      text: "Encontré consuelo cuando más lo necesitaba. Estas promesas son un regalo del cielo.",
      name: "Elena M.",
      age: "55 años",
      image: testimonialElena
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-primary scroll-reveal">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-golden mb-6 md:mb-8 px-2">
            Lo que dicen quienes ya recibieron las promesas
          </h2>
        </div>

        {/* First Row - 3 testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border-2 border-golden/30 hover:border-golden hover:shadow-divine transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-golden fill-golden" />
                  ))}
                </div>
                
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-6 md:mb-8 border-3 border-golden shadow-divine object-cover"
                />
                
                <p className="text-lg md:text-xl text-primary leading-relaxed mb-6 md:mb-8 italic font-medium">
                  "{testimonial.text}"
                </p>
                
                <div className="text-golden font-bold text-base md:text-lg">
                  – {testimonial.name} ({testimonial.age})
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 testimonials centered */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div 
              key={index + 3} 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border-2 border-golden/30 hover:border-golden hover:shadow-divine transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-golden fill-golden" />
                  ))}
                </div>
                
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-6 md:mb-8 border-3 border-golden shadow-divine object-cover"
                />
                
                <p className="text-lg md:text-xl text-primary leading-relaxed mb-6 md:mb-8 italic font-medium">
                  "{testimonial.text}"
                </p>
                
                <div className="text-golden font-bold text-base md:text-lg">
                  – {testimonial.name} ({testimonial.age})
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 2 testimonials centered */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
          {testimonials.slice(5, 7).map((testimonial, index) => (
            <div 
              key={index + 5} 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border-2 border-golden/30 hover:border-golden hover:shadow-divine transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${(index + 5) * 200}ms` }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-golden fill-golden" />
                  ))}
                </div>
                
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-6 md:mb-8 border-3 border-golden shadow-divine object-cover"
                />
                
                <p className="text-lg md:text-xl text-primary leading-relaxed mb-6 md:mb-8 italic font-medium">
                  "{testimonial.text}"
                </p>
                
                <div className="text-golden font-bold text-base md:text-lg">
                  – {testimonial.name} ({testimonial.age})
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <button
            onClick={handleCTAClick}
            className="w-full sm:w-auto px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-2xl font-bold shadow-sacred hover-sacred divine-pulse transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #B22222, #DAA520)',
              color: 'white',
            }}
          >
            👉 No quiero seguir sufriendo — Quiero recibir las promesas ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
