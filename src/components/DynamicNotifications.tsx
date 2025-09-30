import { useState, useEffect } from "react";
import { X } from "lucide-react";

const DynamicNotifications = () => {
  const [showUrgency, setShowUrgency] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [purchaseCount, setPurchaseCount] = useState(124);
  const [urgencyClosed, setUrgencyClosed] = useState(false);
  const [socialProofClosed, setSocialProofClosed] = useState(false);

  useEffect(() => {
    // Show urgency notification after 5 seconds
    const urgencyTimer = setTimeout(() => {
      if (!urgencyClosed) {
        setShowUrgency(true);
        // Auto-hide after 8 seconds
        setTimeout(() => setShowUrgency(false), 8000);
      }
    }, 5000);

    // Show social proof notification after 12 seconds
    const socialProofTimer = setTimeout(() => {
      if (!socialProofClosed) {
        setShowSocialProof(true);
        // Auto-hide after 8 seconds
        setTimeout(() => setShowSocialProof(false), 8000);
      }
    }, 12000);

    // Update purchase count: +1 every 1 minute, +2 every 2.5 minutes
    const countInterval1min = setInterval(() => {
      setPurchaseCount(prev => prev + 1);
    }, 60000); // 1 minute

    const countInterval2_5min = setInterval(() => {
      setPurchaseCount(prev => prev + 2);
    }, 150000); // 2.5 minutes

    // Re-show notifications periodically (slower)
    const reshowInterval = setInterval(() => {
      if (!urgencyClosed) {
        setShowUrgency(true);
        setTimeout(() => setShowUrgency(false), 8000);
      }
      setTimeout(() => {
        if (!socialProofClosed) {
          setShowSocialProof(true);
          setTimeout(() => setShowSocialProof(false), 8000);
        }
      }, 8000);
    }, 45000);

    return () => {
      clearTimeout(urgencyTimer);
      clearTimeout(socialProofTimer);
      clearInterval(countInterval1min);
      clearInterval(countInterval2_5min);
      clearInterval(reshowInterval);
    };
  }, [urgencyClosed, socialProofClosed]);

  const handleCloseUrgency = () => {
    setShowUrgency(false);
    setUrgencyClosed(true);
  };

  const handleCloseSocialProof = () => {
    setShowSocialProof(false);
    setSocialProofClosed(true);
  };

  return (
    <>
      {/* Urgency Notification - Bottom Left */}
      {showUrgency && !urgencyClosed && (
        <div className="fixed bottom-6 left-6 z-50 slide-in-bottom-right max-w-xs">
          <div className="bg-red-600 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 border-2 border-red-400">
            <span className="text-lg animate-pulse flex-shrink-0">⚡</span>
            <span className="font-semibold text-sm flex-1">
              Oferta válida por tiempo limitado.
            </span>
            <button 
              onClick={handleCloseUrgency}
              className="flex-shrink-0 hover:bg-red-700 rounded p-1 transition-colors"
              aria-label="Cerrar notificación"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Social Proof Notification - Bottom Right */}
      {showSocialProof && !socialProofClosed && (
        <div className="fixed bottom-6 right-6 z-50 slide-in-bottom-right max-w-xs">
          <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-2xl border-2 border-green-400">
            <div className="flex items-center gap-3">
              <span className="text-lg animate-pulse flex-shrink-0">✨</span>
              <span className="font-semibold text-sm flex-1">
                {purchaseCount} personas compraron este ebook en las últimas 24 horas.
              </span>
              <button 
                onClick={handleCloseSocialProof}
                className="flex-shrink-0 hover:bg-green-700 rounded p-1 transition-colors"
                aria-label="Cerrar notificación"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicNotifications;