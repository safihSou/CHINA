import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Calendar, MapPin, BookOpen, Award } from "lucide-react";
import architectPortrait from "@/assets/architect-portrait.jpg";

const architects = [
  {
    name: "Li Jie",
    chineseName: "李誡",
    period: "1065 – 1110",
    dynasty: "Northern Song",
    role: "Imperial Construction Supervisor",
    achievement: "Yingzao Fashi (營造法式)",
    description:
      "Li Jie authored the most influential architectural treatise in Chinese history. His work codified construction techniques and established standards that endured for centuries.",
    contributions: [
      "Authoring the Yingzao Fashi",
      "Standardizing the modular cai-fen system",
      "Documenting Dougong techniques",
      "Classifying buildings into 8 grades",
    ],
    quote:
      "Construction must follow the principles of heaven and earth, combining strength and harmony.",
  },
  {
    name: "Lei Fada",
    chineseName: "雷發達",
    period: "1619 – 1693",
    dynasty: "Qing",
    role: "Imperial Master Carpenter",
    achievement: "Founder of the Lei Dynasty",
    description:
      "Patriarch of a dynasty of master carpenters who served the imperial court for over 200 years. The Lei family designed the Qing dynasty’s greatest architectural projects.",
    contributions: [
      "Design of the restored Forbidden City",
      "Creation of the 'Lei drawings' (Yangshi Lei)",
      "Summer Palace and imperial gardens",
      "Training seven generations of architects",
    ],
    quote:
      "Every beam carries the weight of the empire; every tile reflects the glory of heaven.",
  },
  {
    name: "Kuai Xiang",
    chineseName: "蒯祥",
    period: "1398 – 1481",
    dynasty: "Ming",
    role: "Chief Imperial Architect",
    achievement: "Builder of the Forbidden City",
    description:
      "Nicknamed the 'Lu Ban of the Ming dynasty,' Kuai Xiang oversaw the construction of the Forbidden City and numerous major imperial buildings in Beijing.",
    contributions: [
      "Construction of the Forbidden City",
      "Hall of Supreme Harmony",
      "Chengtian Gate (Tiananmen)",
      "Innovations in the Ming Dougong system",
    ],
    quote:
      "Imperial architecture is the earthly mirror of the sovereign’s virtue.",
  },
];

const ArchitectesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-imperial relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="font-chinese text-5xl text-accent/60 block mb-4">
                建築師
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Great Architects
                <br />
                <span className="text-accent">of Ancient China</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Meet the master builders who elevated architecture to an imperial art. Their works continue to inspire and amaze the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Architects */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="大師"
              title="Master Builders"
              subtitle="The visionaries who shaped the architectural landscape of the Middle Kingdom."
            />

            <div className="space-y-16">
              {architects.map((architect, index) => (
                <motion.div
                  key={architect.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Portrait */}
                  <div
                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden relative chinese-frame">
                      <img
                        src={architectPortrait}
                        alt={`Portrait of ${architect.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="font-chinese text-3xl text-secondary-foreground drop-shadow-lg">
                          {architect.chineseName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="mb-6">
                      <span className="font-chinese text-3xl text-muted-foreground/40 block mb-2">
                        {architect.chineseName}
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                        {architect.name}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          {architect.period}
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {architect.dynasty} Dynasty
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4 text-accent" />
                          {architect.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {architect.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        Major Contributions
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {architect.contributions.map((contribution) => (
                          <li
                            key={contribution}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                      "{architect.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArchitectesPage;
