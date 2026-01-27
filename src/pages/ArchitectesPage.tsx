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
    period: "1065 - 1110",
    dynasty: "Song du Nord",
    role: "Superviseur des Constructions Impériales",
    achievement: "Yingzao Fashi (營造法式)",
    description:
      "Li Jie est l'auteur du traité architectural le plus influent de l'histoire chinoise. Son ouvrage codifie les techniques de construction et établit des standards qui perdureront pendant des siècles.",
    contributions: [
      "Rédaction du Yingzao Fashi",
      "Standardisation du système modulaire cai-fen",
      "Documentation des techniques Dougong",
      "Classification des bâtiments en 8 grades",
    ],
    quote:
      "La construction doit suivre les principes du ciel et de la terre, alliant solidité et harmonie.",
  },
  {
    name: "Lei Fada",
    chineseName: "雷發達",
    period: "1619 - 1693",
    dynasty: "Qing",
    role: "Maître Charpentier Impérial",
    achievement: "Fondateur de la dynastie Lei",
    description:
      "Patriarche d'une dynastie de maîtres charpentiers qui servira la cour impériale pendant plus de 200 ans. Les Lei ont conçu les plus grands projets architecturaux des Qing.",
    contributions: [
      "Conception de la Cité Interdite restaurée",
      "Création des 'Lei drawings' (样式雷)",
      "Palais d'Été et jardins impériaux",
      "Formation de sept générations d'architectes",
    ],
    quote:
      "Chaque poutre porte le poids de l'empire, chaque tuile reflète la gloire du ciel.",
  },
  {
    name: "Kuai Xiang",
    chineseName: "蒯祥",
    period: "1398 - 1481",
    dynasty: "Ming",
    role: "Architecte en Chef Impérial",
    achievement: "Constructeur de la Cité Interdite",
    description:
      "Surnommé le 'Lu Ban de la dynastie Ming', Kuai Xiang a dirigé la construction de la Cité Interdite et de nombreux bâtiments impériaux majeurs à Beijing.",
    contributions: [
      "Construction de la Cité Interdite",
      "Palais de la Suprême Harmonie",
      "Porte Chengtian (Tiananmen)",
      "Innovations dans le système Dougong Ming",
    ],
    quote:
      "L'architecture impériale est le miroir de la vertu du souverain sur terre.",
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
                Les Grands Architectes
                <br />
                <span className="text-accent">de la Chine Ancienne</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Rencontrez les maîtres bâtisseurs qui ont élevé l'architecture
                au rang d'art impérial. Leurs œuvres continuent d'inspirer et
                d'émerveiller le monde entier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Architects */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="大師"
              title="Maîtres Bâtisseurs"
              subtitle="Les visionnaires qui ont façonné le paysage architectural de l'Empire du Milieu."
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
                        alt={`Portrait de ${architect.name}`}
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
                          Dynastie {architect.dynasty}
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
                        Contributions Majeures
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
