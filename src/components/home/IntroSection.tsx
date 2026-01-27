import { motion } from "framer-motion";
import { Building2, BookOpen, Users, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";

const categories = [
  {
    icon: Building2,
    title: "Sciences Naturelles",
    chineseTitle: "科學",
    description:
      "Systèmes antisismiques, ventilation naturelle et innovations structurelles qui défient le temps.",
    path: "/sciences",
    color: "primary",
  },
  {
    icon: Users,
    title: "Grands Architectes",
    chineseTitle: "建築師",
    description:
      "Li Jie, Lei Fada, Kuai Xiang : les maîtres qui ont élevé l'architecture au rang d'art.",
    path: "/architectes",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "Livres Anciens",
    chineseTitle: "古書",
    description:
      "Yingzao Fashi, Lu Ban Jing : les traités qui codifient le savoir architectural.",
    path: "/livres",
    color: "accent",
  },
  {
    icon: Landmark,
    title: "Culture & Héritage",
    chineseTitle: "文化",
    description:
      "Symbolisme, philosophie et transmission d'un patrimoine millénaire.",
    path: "/culture",
    color: "ink",
  },
];

export const IntroSection = () => {
  return (
    <section className="py-24 bg-background pattern-overlay">
      <div className="container mx-auto px-4">
        <SectionTitle
          chineseTitle="探索"
          title="Explorez l'Architecture Chinoise"
          subtitle="Quatre perspectives pour comprendre un patrimoine architectural unique au monde, fruit de millénaires d'innovation et de tradition."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={category.path} className="block group">
                <div className="museum-card p-6 h-full chinese-frame">
                  <div className="mb-4">
                    <span className="font-chinese text-2xl text-muted-foreground/50 block mb-2">
                      {category.chineseTitle}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : category.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : category.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : "bg-ink/10 text-ink"
                      }`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
