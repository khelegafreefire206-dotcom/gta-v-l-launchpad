import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const handleDownload = () => {
    toast("padle bhai itna dimag padhai mein chalata toh kuch ban jata");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djI4SDI0VjE2aDEyek0zNCAzNnYtOGgtOHY4aDh6bS0yLTJoLTR2LTRoNHY0em0tNiAwdi00aC00djRoNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />

      {/* Main content */}
      <main className="relative z-10 text-center px-4 space-y-12">
        {/* Logo/Title */}
        <div className="space-y-6 animate-float">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
            <span className="inline-block text-glow-orange text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-orange-400">
              GTA V
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-secondary text-glow-cyan">
            !!💀
          </p>
          <div className="text-muted-foreground text-lg md:text-xl tracking-widest uppercase">
            Mobile Edition
          </div>
        </div>

        {/* Download button */}
        <div className="pt-8">
          <Button
            onClick={handleDownload}
            size="lg"
            className="relative group px-12 py-8 text-xl md:text-2xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(25_95%_53%/0.6)] animate-glow-pulse"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD NOW
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
          </Button>
        </div>

        {/* Additional decorative text */}
        <div className="pt-8 space-y-2 text-muted-foreground/60 text-sm uppercase tracking-[0.3em]">
          <p>Experience the streets</p>
          <p className="text-secondary/80">Like never before</p>
        </div>
      </main>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-primary/50" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-secondary/50" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-secondary/50" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-primary/50" />
    </div>
  );
};

export default Index;
