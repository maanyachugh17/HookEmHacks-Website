import { Users, HeartHandshake, Gavel, ClipboardList, HelpCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { InterestForm } from "./InterestForm";

const ROLES = [
  {
    id: "participant",
    label: "Participant",
    icon: Users,
    description: "Build, learn, and demo your project",
    benefits: [
      "Workshops (web dev, AI, design, pitching) - curated for UT students and beyond",
      "Mentor office hours to debug and brainstorm",
      "Food, swag, and late-night energy (final details TBD)",
      "Project expo + judging + prizes",
    ],
    note: {
      icon: HelpCircle,
      title: "Beginner-friendly",
      text: "You don't need prior hackathon experience. Bring curiosity - we'll help with the rest.",
    },
  },
  {
    id: "mentor",
    label: "Mentor",
    icon: HeartHandshake,
    description: "Guide teams to unblock and ship",
    benefits: [
      "Be friendly, encouraging, and inclusive",
      "Guide teams with questions and suggestions (not doing the work for them)",
      "Support basics: debugging, APIs, pitching, design, and project scoping",
      "Optional: lead a short workshop",
    ],
    extras: [
      { title: "Skills we love", text: "Frontend, backend, ML/AI, mobile, security, product, UX" },
      { title: "Time commitment", text: "Flexible - 1-2 hours or a full day" },
    ],
  },
  {
    id: "judge",
    label: "Judge",
    icon: Gavel,
    description: "Celebrate strong ideas and demos",
    benefits: [
      "Project expo style demos (teams present at their tables)",
      "Short Q&A focused on problem, approach, and impact",
      "Rubric-based scoring (we'll publish categories later)",
      "Final deliberation + awards",
    ],
    note: {
      title: "We value",
      text: "Clarity, empathy, technical ambition, thoughtful tradeoffs, and a compelling demo.",
    },
  },
  {
    id: "volunteer",
    label: "Volunteer",
    icon: ClipboardList,
    description: "Make the weekend run smoothly",
    benefits: [
      "Registration & check-in",
      "Room monitors & wayfinding",
      "Workshop AV + logistics",
      "Food + supply coordination",
      "Hacker support desk",
    ],
    note: {
      title: "Perks",
      text: "Swag + food (TBD), and a front-row seat to the projects.",
    },
  },
];

export function RegistrationHub({ defaultRole = "participant" }) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-4 md:p-8">
        <Tabs defaultValue={defaultRole} className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
            {ROLES.map((role) => (
              <TabsTrigger
                key={role.id}
                value={role.id}
                className="gap-2"
              >
                <role.icon className="size-4" />
                <span className="hidden sm:inline">{role.label}</span>
                <span className="sm:hidden">{role.label.slice(0, 4)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {ROLES.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-0">
              <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                {/* Role Info Panel */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <role.icon className="size-5 text-primary" />
                      <h3 className="text-xl font-semibold">{role.label}</h3>
                    </div>
                    <p className="mt-1 text-muted-foreground">{role.description}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {role.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {role.note && (
                    <div className="rounded-2xl border bg-secondary/50 p-4">
                      <div className="flex items-center gap-2 font-medium">
                        {role.note.icon && <role.note.icon className="size-4" />}
                        {role.note.title}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{role.note.text}</p>
                    </div>
                  )}

                  {role.extras && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {role.extras.map((extra, i) => (
                        <div key={i} className="rounded-2xl border bg-secondary/50 p-4">
                          <div className="font-medium">{extra.title}</div>
                          <div className="mt-2 text-sm text-muted-foreground">{extra.text}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Form Panel */}
                <div className="rounded-2xl border bg-card p-4 md:p-6">
                  <h4 className="mb-4 text-lg font-semibold">Register your interest</h4>
                  <InterestForm role={role.id} />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
