import { ModeToggle } from "@/components/core/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Gavel,
  ShoppingCart,
  Users,
  Vote,
} from "lucide-react";

type CommunityLinkVariant = "outline" | "secondary" | "link" | "default" | "destructive" | "ghost";

interface CommunityLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sr: string;
  variant: CommunityLinkVariant;
}

const BuildBattleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="9" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M6 15V9m12 6V9M9 9v6m6-6v6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" fill="none" />
    <path fill="currentColor" d="M20.317 4.369A19.791 19.791 0 0016.885 3c-.2.367-.432.846-.593 1.224a18.542 18.542 0 00-4.585 0c-.16-.378-.389-.857-.588-1.224A19.788 19.788 0 003.684 4.369a20.13 20.13 0 00-3.195 14.751a19.932 19.932 0 006.142 1.922c.471-.638.886-1.311 1.241-2.014c-.677-.194-1.319-.453-1.908-.763a.56.56 0 01-.25-.614a.567.567 0 01.277-.31c.258-.13.523-.262.775-.391a.563.563 0 01.524 0c2.887 1.358 6.005 1.358 8.892 0a.563.563 0 01.524 0c.252.13.517.26.775.391a.563.563 0 01.026.924a7.823 7.823 0 01-1.906.763c.361.703.776 1.376 1.247 2.014a20.137 20.137 0 006.141-1.92a20.128 20.128 0 00-3.196-14.753zM8.02 15.331c-1.185 0-2.153-1.087-2.153-2.42c0-1.333.948-2.42 2.153-2.42c1.207 0 2.167 1.099 2.153 2.437c0 1.317-.947 2.403-2.153 2.403zm7.963 0c-1.186 0-2.153-1.087-2.153-2.42c0-1.333.947-2.42 2.153-2.42c1.209 0 2.167 1.099 2.154 2.437c0 1.317-.947 2.403-2.154 2.403z" />
  </svg>
);

const GAME_MODES = [
  {
    name: "CB",
    title: "BuildBattle",
    icon: BuildBattleIcon,
    desc: "Create & build in a custom plot-world. Unique farmworld for resources.",
  },
  {
    name: "PvP",
    title: "PvP",
    icon: Gavel,
    desc: "Battle others in well-balanced PvP arenas. Show your skills & claim rewards.",
  },
  {
    name: "Event",
    title: "Event Server",
    icon: Users,
    desc: "Join weekly events for fun, glory, and unique in-game prizes.",
  },
];

const COMMUNITY_LINKS: CommunityLink[] = [
  {
    name: "Discord",
    href: "https://discord.gg/", // Replace with actual Discord link
    icon: DiscordIcon,
    sr: "Discord Community",
    variant: "outline",
  },
  {
    name: "Store",
    href: "/store", // Replace with actual store link
    icon: ShoppingCart,
    sr: "Store",
    variant: "secondary",
  },
  {
    name: "Vote",
    href: "/vote", // Replace with actual vote page
    icon: Vote,
    sr: "Vote for rewards",
    variant: "outline",
  },
];

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 pt-16 pb-10 md:pt-24 md:pb-14">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">VoidMine</h1>
      <p className="text-lg md:text-2xl font-normal text-muted-foreground max-w-xl mx-auto">
        The Ultimate Minecraft Network Experience
      </p>
      <Button size="lg" className="mt-2" aria-label="Join Now">
        Join Now
      </Button>
      <ModeToggle />
      <span className="mt-2 text-xs font-mono tracking-widest text-muted-foreground select-all">
        PLAY.VOIDMINE.NET
      </span>
    </section>
  );
}

function GameModesSection() {
  return (
    <section className="max-w-5xl mx-auto w-full px-4 mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
        Game Modes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {GAME_MODES.map((mode) => {
          const Icon = mode.icon;
          return (
            <Card key={mode.name} className="flex flex-col justify-between min-h-[220px]">
              <CardHeader className="flex flex-col items-start gap-1 pb-2">
                <span className="text-muted-foreground">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <CardTitle className="mt-3 text-lg">{mode.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{mode.desc}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function ServerStatusSection() {
  return (
    <section
      className="max-w-md w-full mx-auto mb-12 px-4"
      aria-label="Server Status"
    >
      <Card className="w-full">
        <CardHeader className="pb-3 flex flex-row items-center gap-2">
          <Badge variant="outline" className={cn("text-green-700 border-green-200 bg-green-50")}>
            Online
          </Badge>
          <span className="ml-2 text-xs text-muted-foreground font-mono tracking-wide">
            PLAY.VOIDMINE.NET
          </span>
          <Separator orientation="vertical" className="mx-3 h-5" />
          <span className="text-xs text-muted-foreground">
            Players: <span className="font-semibold text-foreground">???</span>
          </span>
        </CardHeader>
        <CardContent className="pt-0">
          <span className="text-xs text-muted-foreground">
            Status updates coming soon
          </span>
        </CardContent>
      </Card>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="flex flex-wrap justify-center gap-3 mb-20 px-4">
      {COMMUNITY_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.name}
            asChild
            variant={link.variant}
            className="gap-2 min-w-[120px] justify-center"
            aria-label={link.sr}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-4 w-4" />
              {link.name}
            </a>
          </Button>
        );
      })}
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border text-muted-foreground text-sm flex flex-col md:flex-row items-center justify-between gap-3 px-4 bg-background">
      <span>
        &copy; {new Date().getFullYear()} VoidMine &mdash; All Rights Reserved.
      </span>
      <span className="flex gap-4">
        <a
          href="/terms"
          className="hover:text-foreground transition underline underline-offset-2 focus:outline-none"
        >
          Terms
        </a>
        <a
          href="/privacy"
          className="hover:text-foreground transition underline underline-offset-2 focus:outline-none"
        >
          Privacy
        </a>
      </span>
    </footer>
  );
}

const HomePage = () => {
  return (
    <main className="min-h-screen w-full bg-background text-foreground flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto flex-1">
        <HeroSection />
        <GameModesSection />
        <ServerStatusSection />
        <CommunitySection />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;