import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconUsers,
  IconHeartHandshake,
  IconTrophy,
  IconCalendar,
  IconMapPin,
  IconMail,
  IconCode,
  IconBulb,
} from "@tabler/icons-react";
import { BillboardPanel } from "./BillboardPanel";

export function FeatureCards({ email = "hookemhacks@gmail.com" }) {
  const features = [
    {
      title: "For all skill levels",
      description:
        "First hackathon? You'll have workshops, mentors, and plenty of starter ideas. Experienced? Build something bold.",
      icon: <IconUsers className="size-6" />,
      color: "text-primary",
    },
    {
      title: "Mentorship & community",
      description:
        "Industry + student mentors help you unblock, brainstorm, and polish your demo.",
      icon: <IconHeartHandshake className="size-6" />,
      color: "text-accent",
    },
    {
      title: "Judging & prizes",
      description:
        "Showcase your work, tell a great story, and compete for prizes across fun categories.",
      icon: <IconTrophy className="size-6" />,
      color: "text-primary",
    },
    {
      title: "Build anything",
      description:
        "No required theme — build web apps, mobile apps, AI projects, games, or experimental ideas.",
      icon: <IconCode className="size-6" />,
      color: "text-accent",
    },
    {
      title: "April 18–19, 2026",
      description:
        "Save the date! Applications and the full schedule will be posted as we get closer.",
      icon: <IconCalendar className="size-6" />,
      color: "text-primary",
    },
    {
      title: "UT Austin campus",
      description:
        "Join us on the Forty Acres for a weekend of building, learning, and meeting incredible people.",
      icon: <IconMapPin className="size-6" />,
      color: "text-accent",
    },
    {
      title: "Workshops & resources",
      description:
        "Learn web dev, AI, design, and pitching — curated sessions for UT students and beyond.",
      icon: <IconBulb className="size-6" />,
      color: "text-primary",
    },
    {
      title: "Get in touch",
      description: (
        <>
          For partnerships, mentors, and questions:{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-foreground hover:underline"
          >
            {email}
          </a>
        </>
      ),
      icon: <IconMail className="size-6" />,
      color: "text-accent",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div
            className={cn(
              "billboard-panel h-full p-6 transition-all duration-300",
              "hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
            )}
          >
            <div className={cn("mb-4", feature.color)}>{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2 font-heading">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default FeatureCards;
