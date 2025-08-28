"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"

const tabs = [
    { value: "/about", label: "О Hodwini" },
    { value: "/about/seasons", label: "Сезоны" },
    { value: "/about/modes", label: "Игровые режимы" },
    { value: "/wiki", label: "Вики" },
    { value: "/about/launcher", label: "Лаунчер"}
]

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="p-6">
      <Tabs
        value={tabs.find((t) => pathname === t.value)?.value ?? "/about"}
        onValueChange={(val) => router.push(val)}
      >
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-6">{children}</div>
    </div>
  )
}