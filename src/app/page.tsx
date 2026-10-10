import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Fixed Full-site YouTube Video Background - Perfect Cover */}
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black -z-50">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[177.77vw] min-w-[56.25vh] min-h-[100vh] pointer-events-none opacity-50"
          src="https://www.youtube.com/embed/j2f1D7zzlyY?autoplay=1&mute=1&loop=1&playlist=j2f1D7zzlyY&controls=0&showinfo=0&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
        ></iframe>
        {/* Subtle gradient overlay to ensure text remains readable globally */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
      </div>

      {/* Navbar - Glassmorphism */}
      <nav className="fixed w-full top-0 z-50 flex justify-between items-center p-6 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            VOHOBJON
          </h1>
          <div className="space-x-8 hidden md:flex items-center text-sm font-medium tracking-wider text-gray-200">
            <Link href="#about" className="hover:text-white hover:scale-105 transition-all">MEN HAQIMDA</Link>
            <Link href="#projects" className="hover:text-white hover:scale-105 transition-all">LOYIHALAR</Link>
            <Link href="/admin" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              ADMIN PANEL
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <header className="relative flex flex-col items-start justify-center min-h-screen pt-20">
          <div className="z-10 max-w-3xl">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide">
              👋 Xush kelibsiz
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white drop-shadow-2xl">
              Salom, mening ismim <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vohobjon.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Media sohasida anchadan beri shug'ullanaman. Men kreativlik va zamonaviy yondashuv orqali noyob vizual tajribalar yarataman.
            </p>
            <div className="flex gap-4">
              <Link href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Loyihalarni ko'rish
              </Link>
              <Link href="#about" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">
                Batafsil
              </Link>
            </div>
          </div>
        </header>

        {/* About Section - Glassmorphism Card */}
        <section id="about" className="py-32">
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                <Image 
                  src="/profile.png" 
                  alt="Vohobjon" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-blue-400 mb-2 uppercase drop-shadow-md">Karyera & Tajriba</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-md">Men haqimda</h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-8 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Men media va vizual san'at sohasiga chuqur qiziqadigan ijodkorman. Har bir loyihada estetik go'zallik va texnik mukammallikni birlashtirishga intilaman. 
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mr-4 shrink-0">
                      🎬
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-white">Video va Audio Montaj</h4>
                      <p className="text-gray-300 text-sm">Professional dasturlarda yuqori sifatli montaj va rang berish (color grading).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mr-4 shrink-0">
                      🎨
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-white">Grafik Dizayn</h4>
                      <p className="text-gray-300 text-sm">Zamonaviy dizayn trendlari asosida vizual kontent va brending.</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center mr-4 shrink-0">
                      📱
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-white">SMM Kontent</h4>
                      <p className="text-gray-300 text-sm">Ijtimoiy tarmoqlar uchun kreativ yondashuv va e'tiborni tortuvchi media.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-widest text-blue-400 mb-2 uppercase drop-shadow-md">Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">So'nggi Loyihalar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 backdrop-blur-md hover:bg-white/[0.1] transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 bg-black/40 relative overflow-hidden flex items-center justify-center">
                  <span className="text-white/30 font-bold text-xl tracking-widest z-10 group-hover:scale-110 transition-transform">MEDIA {item}</span>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                </div>
                <div className="p-8 absolute bottom-0 left-0 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-2xl font-bold mb-2 text-white">Loyiha Nomi {item}</h4>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Kreativ yondashuv asosida qilingan ajoyib ishlardan namunalar.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vohobjon. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Telegram</Link>
            <Link href="#" className="hover:text-white transition-colors">YouTube</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
