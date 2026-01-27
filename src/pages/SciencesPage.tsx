import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Cog, Wind, Shield, Layers, Ruler, Compass } from "lucide-react";
import dougongImage from "@/assets/dougong-system.jpg";

const innovations = [
  {
    icon: Shield,
    title: "Système Dougong",
    chineseTitle: "斗拱",
    description:
      "Assemblage de consoles en bois sans clous ni vis, permettant une flexibilité structurelle unique. Ce système absorbe les chocs sismiques et distribue le poids de la toiture.",
    details: [
      "Résistance aux tremblements de terre",
      "Distribution optimale des charges",
      "Assemblage sans métal",
    ],
  },
  {
    icon: Wind,
    title: "Ventilation Naturelle",
    chineseTitle: "通風",
    description:
      "Les bâtiments traditionnels utilisent des cours intérieures et des orientations précises pour créer une circulation d'air naturelle, régulant la température sans énergie externe.",
    details: [
      "Cours intérieures (Siheyuan)",
      "Orientation sud optimale",
      "Toits en pente pour évacuation thermique",
    ],
  },
  {
    icon: Cog,
    title: "Techniques Antisismiques",
    chineseTitle: "抗震",
    description:
      "Les pagodes et temples utilisent des colonnes centrales flottantes et des fondations flexibles permettant aux structures de résister à des siècles de séismes.",
    details: [
      "Colonnes centrales suspendues",
      "Fondations en pierre sans mortier",
      "Joints flexibles en bois",
    ],
  },
  {
    icon: Layers,
    title: "Architecture Modulaire",
    chineseTitle: "模組",
    description:
      "Un système de modules standardisés (cai-fen) permettait de construire des bâtiments de toute taille en maintenant des proportions harmonieuses.",
    details: [
      "Unité de mesure cai",
      "Proportions codifiées",
      "Scalabilité parfaite",
    ],
  },
  {
    icon: Ruler,
    title: "Géométrie Sacrée",
    chineseTitle: "幾何",
    description:
      "Les dimensions des bâtiments impériaux suivent des ratios mathématiques précis liés au Feng Shui et à la cosmologie chinoise.",
    details: [
      "Nombres yin et yang",
      "Carré magique Lo Shu",
      "Axe nord-sud sacré",
    ],
  },
  {
    icon: Compass,
    title: "Orientation Feng Shui",
    chineseTitle: "風水",
    description:
      "Chaque bâtiment est orienté selon les principes du Feng Shui pour harmoniser l'énergie (Qi) entre l'homme et son environnement.",
    details: [
      "Boussole Luopan",
      "Protection des montagnes au nord",
      "Eau au sud pour la prospérité",
    ],
  },
];

const SciencesPage = () => {
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
                科學
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Sciences Naturelles
                <br />
                <span className="text-accent">& Innovations</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                L'architecture chinoise ancienne représente une fusion
                remarquable entre science, art et philosophie. Découvrez les
                innovations techniques qui ont permis à ces structures de
                traverser les millénaires.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Innovations Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="創新"
              title="Innovations Techniques"
              subtitle="Des prouesses d'ingénierie qui continuent d'inspirer l'architecture moderne."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="museum-card p-6 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <innovation.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-chinese text-lg text-muted-foreground/50">
                        {innovation.chineseTitle}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {innovation.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {innovation.description}
                  </p>
                  <ul className="space-y-2">
                    {innovation.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3D Model Placeholder */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="模型"
              title="Modèle 3D Interactif"
              subtitle="Explorez la structure du système Dougong en trois dimensions."
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-video bg-muted rounded-sm overflow-hidden border border-border relative group">
                <img
                  src={dougongImage}
                  alt="Système Dougong - Assemblage de consoles en bois"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <h4 className="font-serif text-xl font-semibold text-secondary-foreground mb-2">
                      Système Dougong
                    </h4>
                    <p className="text-secondary-foreground/80 text-sm max-w-md">
                      Assemblage de consoles en bois sans clous, permettant une flexibilité structurelle unique et une résistance aux séismes.
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-sm text-xs font-medium text-foreground">
                  Espace 3D interactif
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SciencesPage;
