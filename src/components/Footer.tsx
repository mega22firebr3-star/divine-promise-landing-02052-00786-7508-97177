import { Shield, CreditCard, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Security Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Compra 100% segura</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Verificado por ReclameAQUI</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span>Múltiples formas de pagamento</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="bg-background px-3 py-1 rounded-full">💳 Cartão de Crédito</span>
            <span className="bg-background px-3 py-1 rounded-full">🏦 PIX</span>
            <span className="bg-background px-3 py-1 rounded-full">💰 Boleto</span>
            <span className="bg-background px-3 py-1 rounded-full">📱 PayPal</span>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Las Promesas Eternas. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;