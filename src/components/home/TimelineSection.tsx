import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const timelineEvents = [
  {
    year: "-221",
    era: "Qin",
    title: "Grande Muraille",
    description:
      "Unification et début de la construction de la Grande Muraille sous Qin Shi Huang.",
  },
  {
    year: "607",
    era: "Sui",
    title: "Grand Canal",
    description:
      "Achèvement du Grand Canal, prouesse d'ingénierie hydraulique reliant le nord et le sud.",
  },
  {
    year: "1103",
    era: "Song",
    title: "Yingzao Fashi",
    description:
      "Publication du traité d'architecture de Li Jie, codifiant les standards de construction.",
  },
  {
    year: "1406",
    era: "Ming",
    title: "Cité Interdite",
    description:
      "Début de la construction de la Cité Interdite à Beijing sous l'empereur Yongle.",
  },
  {
    year: "1420",
    era: "Ming",
    title: "Temple du Ciel",
    description:
      "Achèvement du Temple du Ciel, chef-d'œuvre de symbolisme cosmologique.",
  },
  {
    year: "1703",
    era: "Qing",
    title: "Palais d'Été",
    description:
      "Construction du Jardin de la Clarté Parfaite, apogée de l'art des jardins.",
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <SectionTitle
          chineseTitle="時間"
          title="Chronologie Architecturale"
          subtitle="Les moments clés qui ont façonné l'architecture chinoise à travers les dynasties."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Content */}
              <div className="flex-1 pl-12 md:pl-0">
                <div className="museum-card p-6">
                  <div className="flex items-center gap-3 mb-3 md:justify-start">
                    <span className="text-xs font-medium px-2 py-1 rounded-sm bg-primary/10 text-primary">
                      {event.era}
                    </span>
                    <span className="font-serif text-lg font-semibold text-accent">
                      {event.year.startsWith("-")
                        ? `${event.year.slice(1)} av. J.-C.`
                        : event.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6">
                <div className="timeline-dot" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
