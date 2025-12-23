import { cn } from "@/lib/utils";
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

export function FeaturesSectionWithHoverEffects({ email = "hookemhacks@gmail.com" }) {
    const features = [
        {
            title: "For all skill levels",
            description:
                "First hackathon? You'll have workshops, mentors, and plenty of starter ideas. Experienced? Build something bold.",
            icon: <IconUsers />,
        },
        {
            title: "Mentorship & community",
            description:
                "Industry + student mentors help you unblock, brainstorm, and polish your demo.",
            icon: <IconHeartHandshake />,
        },
        {
            title: "Judging & prizes",
            description:
                "Showcase your work, tell a great story, and compete for prizes across fun categories.",
            icon: <IconTrophy />,
        },
        {
            title: "Build anything",
            description:
                "No required theme — build web apps, mobile apps, AI projects, games, or experimental ideas.",
            icon: <IconCode />,
        },
        {
            title: "April 18–19, 2026",
            description:
                "Save the date! Applications and the full schedule will be posted as we get closer.",
            icon: <IconCalendar />,
        },
        {
            title: "UT Austin campus",
            description:
                "Join us on the Forty Acres for a weekend of building, learning, and meeting incredible people.",
            icon: <IconMapPin />,
        },
        {
            title: "Workshops & resources",
            description:
                "Learn web dev, AI, design, and pitching — curated sessions for UT students and beyond.",
            icon: <IconBulb />,
        },
        {
            title: "Get in touch",
            description: (
                <>
                    For partnerships, mentors, and questions:{" "}
                    <span className="font-medium text-foreground">{email}</span>
                </>
            ),
            icon: <IconMail />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

function Feature({ title, description, icon, index }) {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-border",
                (index === 0 || index === 4) && "lg:border-l border-border",
                index < 4 && "lg:border-b border-border"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none bg-gradient-to-t from-primary/15 to-transparent"
                />
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none bg-gradient-to-b from-primary/15 to-transparent"
                />
            )}
            <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center bg-border"
                />
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center opacity-0 group-hover/feature:opacity-100 bg-primary"
                />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
                    {title}
                </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
}

export default FeaturesSectionWithHoverEffects;
