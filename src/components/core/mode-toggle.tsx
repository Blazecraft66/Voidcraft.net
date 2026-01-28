"use client"
import * as React from "react"
import { Sun, Moon, Computer } from "lucide-react"
import { useTheme } from "next-themes"
import { useId, useEffect } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Theme = "light" | "dark" | "system"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = React.useState<Theme>(
    (typeof window !== "undefined" &&
      (localStorage.getItem("theme") as Theme)) ||
      "system"
  )
  const baseId = useId()

  useEffect(() => {
    setTheme(selectedTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", selectedTheme)
    }
  }, [selectedTheme, setTheme])

  const handleChange = (value: Theme) => {
    setSelectedTheme(value)
  }

  return (
    <Card className="w-fit bg-muted/60 border-none shadow-none">
      <CardContent className="flex gap-3 items-center p-2">
        <Label htmlFor={`${baseId}-toggle`} className="text-sm">
          Theme
        </Label>
        <ToggleGroup
          id={`${baseId}-toggle`}
          type="single"
          size="sm"
          className="rounded-full border bg-background"
          value={selectedTheme}
          onValueChange={(val) => {
            if (val) handleChange(val as Theme)
          }}
          aria-label="Toggle theme"
        >
          <ToggleGroupItem
            value="light"
            aria-label="Light theme"
            className={cn(
              "px-2 py-1 rounded-full transition-all",
              selectedTheme === "light" && "bg-accent border border-primary"
            )}
          >
            <Sun
              className={cn(
                "w-4 h-4",
                selectedTheme === "light"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="dark"
            aria-label="Dark theme"
            className={cn(
              "px-2 py-1 rounded-full transition-all",
              selectedTheme === "dark" && "bg-accent border border-primary"
            )}
          >
            <Moon
              className={cn(
                "w-4 h-4",
                selectedTheme === "dark"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="system"
            aria-label="System theme"
            className={cn(
              "px-2 py-1 rounded-full transition-all",
              selectedTheme === "system" && "bg-accent border border-primary"
            )}
          >
            <Computer
              className={cn(
                "w-4 h-4",
                selectedTheme === "system"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>
  )
}