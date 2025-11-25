import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showStudyGuide, setShowStudyGuide] = useState(false);

  const handleDownload = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    toast(`padle bhai itna dimag padhai mein chalata toh kuch ban jata (${newCount}/3)`);
    
    if (newCount === 3) {
      setTimeout(() => {
        setShowStudyGuide(true);
      }, 1000);
    }
  };

  if (showStudyGuide) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background animate-fade-in">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />

        {/* Study Guide Content */}
        <main className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-8">
          <div className="text-center space-y-4 animate-float">
            <h1 className="text-5xl md:text-7xl font-black text-glow-orange text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Study Material Guide
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Time to get serious! 📚
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ways to Study */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <h2 className="text-2xl font-bold text-primary mb-4 text-glow-orange">1. Ways to Study</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">(a)</span>
                  <p className="text-foreground">YouTube - Learn from educational channels</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">(b)</span>
                  <p className="text-foreground">Books - Traditional and effective</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">(c)</span>
                  <p className="text-foreground">Coaching - Structured guidance</p>
                </div>
              </div>
            </Card>

            {/* Ways to Study Properly */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all">
              <h2 className="text-2xl font-bold text-secondary mb-4 text-glow-cyan">2. Ways to Study Properly</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">(a)</span>
                  <p className="text-foreground">Put all devices aside if studying from books</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">(b)</span>
                  <p className="text-foreground">If studying from internet by phone, use <span className="text-secondary font-semibold">Regain</span> app to block YouTube channels</p>
                </div>
              </div>
            </Card>

            {/* Productivity Apps */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all md:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-4 text-glow-orange">3. Want to Become Productive?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-secondary">For Phone:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-semibold text-secondary">Stay Focused</span> - Block distracting apps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-semibold text-secondary">Action Dash</span> - Track your screen time</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-secondary">For Laptop:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-semibold text-secondary">Leach</span> - Chrome extension to stay focused</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Motivational Message */}
          <div className="text-center pt-8 animate-glow-pulse">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Come on man be productive
              </p>
              <p className="text-xl md:text-2xl text-foreground mt-4">
                I told you all now it is on you 💪
              </p>
            </Card>
          </div>
        </main>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-primary/50" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-secondary/50" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-secondary/50" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-primary/50" />
      </div>
    );
  }

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
              {clickCount > 0 && (
                <span className="ml-2 text-base text-secondary">({clickCount}/3)</span>
              )}
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
