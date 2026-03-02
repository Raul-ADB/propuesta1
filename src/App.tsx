import { Shield, Lock, Vault, Network } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex items-center gap-4 mb-12 animate-fade-in">
          <div className="relative">
            <Shield className="w-16 h-16 text-amber-400 fill-amber-500/20" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 text-xs font-bold">★</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">TU LOGO</h1>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-tight">
            SITIO EN
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
            CONSTRUCCIÓN
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16 max-w-6xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/60 transition-all transform hover:scale-105">
              <Network className="w-20 h-20 text-amber-400" strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
            <div className="relative">
              <Shield className="w-32 h-32 md:w-40 md:h-40 text-amber-400 fill-amber-500/20 drop-shadow-2xl" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-16 h-16 md:w-20 md:h-20 text-amber-300" strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/60 transition-all transform hover:scale-105">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-amber-500 rounded-lg flex items-center justify-center bg-slate-900">
                  <Lock className="w-10 h-10 text-amber-400" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/60 transition-all transform hover:scale-105">
              <Vault className="w-20 h-20 text-amber-400" strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/60 transition-all transform hover:scale-105">
              <div className="relative">
                <Shield className="w-16 h-16 text-amber-400 fill-amber-500/20" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 text-[8px] font-bold">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-xl"></div>
          <div className="relative flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-cyan-500/30">
            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${Math.random() * 1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold text-white tracking-wider">
            PROTEGIENDO SU SEGURIDAD Y DATOS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
