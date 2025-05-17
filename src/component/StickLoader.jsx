export function StickLoader() {
    return (
        <div className="pt-4">
        <div className="relative h-8 w-[13.6px]">
          {/* Left bar - animates first */}
          <div 
            className="absolute h-8 w-[13.6px] bg-white animate-[loading-keys-app-loading_0.8s_infinite_ease-in-out]"
            style={{ 
              left: '-19.992px',
              animationDelay: '0s'
            }}
          ></div>
          
          {/* Center bar - animates second */}
          <div 
            className="absolute h-8 w-[13.6px] bg-white animate-[loading-keys-app-loading_0.8s_infinite_ease-in-out]"
            style={{
              left: '0',
              animationDelay: '0.16s'
            }}
          ></div>
          
          {/* Right bar - animates third */}
          <div 
            className="absolute h-8 w-[13.6px] bg-white animate-[loading-keys-app-loading_0.8s_infinite_ease-in-out]"
            style={{ 
              left: '19.992px',
              animationDelay: '0.32s'
            }}
          ></div>
        </div>
  
        <style jsx>{`
          @keyframes loading-keys-app-loading {
            0%, 80%, 100% {
              opacity: 0.75;
              box-shadow: 0 0 white;
              height: 32px;
            }
            40% {
              opacity: 1;
              box-shadow: 0 -8px white;
              height: 40px;
            }
          }
  
          .animate-\[loading-keys-app-loading_0\.8s_infinite_ease-in-out\] {
            animation: loading-keys-app-loading 0.8s infinite ease-in-out;
          }
        `}</style>
      </div>
    );
  }