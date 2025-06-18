import Header from "@/components/Header";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  return (
    <div className="relative w-full h-full items-center justify-items-center min-h-screen bg-black font-[family-name:var(--font-geist-sans)]">
      {/* Top Left Gradient Spotlight */}
     
      <section className="relative w-full h-dvh flex   flex-col items-center overflow-hidden">
        <Header />

         <div className="absolute -top-15 left-0 w-96 h-1/2 bg-gradient-to-br -rotate-45 from-red-500/30 via-red-500/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>
         <div className="absolute -top-15 right-0 w-96 h-1/2 bg-gradient-to-bl rotate-45 from-red-500/30 via-red-500/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

        <Meteors />
      </section>
    </div>
  );
}
