import {
  FaCubes,
  FaGavel,
  FaUsers,
  FaDiscord,
  FaShoppingCart,
  FaVoteYea,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Explicit type for COMMUNITY_LINKS with allowed Button variant types
type CommunityLinkVariant = "outline" | "secondary" | "link" | "default" | "destructive" | "ghost";

interface CommunityLink {
  name: string;
  href: string;
  icon: typeof FaDiscord;
  sr: string;
  variant: CommunityLinkVariant;
}

const GAME_MODES = [
  {
    name: "CB",
    title: "CityBuild",
    icon: FaCubes,
    desc: "Create & build in a custom plot-world. Unique farmworld for resources.",
  },
  {
    name: "PvP",
    title: "PvP",
    icon: FaGavel,
    desc: "Battle others in well-balanced PvP arenas. Show your skills & claim rewards.",
  },
  {
    name: "Event",
    title: "Event Server",
    icon: FaUsers,
    desc: "Join weekly events for fun, glory, and unique in-game prizes.",
  },
];

const COMMUNITY_LINKS: CommunityLink[] = [
  {
    name: "Discord",
    href: "https://discord.gg/", // Replace with actual Discord link
    icon: FaDiscord,
    sr: "Discord Community",
    variant: "outline",
  },
  {
    name: "Store",
    href: "/store", // Replace with actual store link
    icon: FaShoppingCart,
    sr: "Store",
    variant: "secondary",
  },
  {
    name: "Vote",
    href: "/vote", // Replace with actual vote page
    icon: FaVoteYea,
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
        {GAME_MODES.map((mode) => (
          <Card key={mode.name} className="flex flex-col justify-between min-h-[220px]">
            <CardHeader className="flex flex-col items-start gap-1 pb-2">
              <span className="text-muted-foreground">
                <mode.icon className="h-6 w-6" aria-hidden />
              </span>
              <CardTitle className="mt-3 text-lg">{mode.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{mode.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
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