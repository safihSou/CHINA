import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Mountain,
  Droplets,
  Sun,
  Moon,
  Leaf,
  Crown,
  Home,
  Compass,
} from "lucide-react";

const philosophies = [
  {
    icon: Compass,
    title: "Feng Shui",
    chineseTitle: "風水",
    description:
      "L'art ancestral de l'harmonisation de l'énergie (Qi) entre l'homme et son environnement. Chaque bâtiment est orienté pour optimiser la circulation des énergies bénéfiques.",
    principles: [
      "Orientation sud pour capter le Yang",
      "Montagnes protectrices au nord",
      "Eau au sud pour la prospérité",
      "Équilibre des cinq éléments",
    ],
  },
  {
    icon: Sun,
    title: "Yin et Yang",
    chineseTitle: "陰陽",
    description:
      "Le principe de dualité complémentaire se retrouve dans chaque aspect de l'architecture chinoise, des proportions aux matériaux, en passant par l'orientation.",
    principles: [
      "Façades sud (Yang) vs nord (Yin)",
      "Bois (Yang) et pierre (Yin)",
      "Espaces ouverts et fermés",
      "Lumière et ombre",
    ],
  },
  {
    icon: Mountain,
    title: "Harmonie avec la Nature",
    chineseTitle: "天人合一",
    description:
      "Le concept de 'Tianren Heyi' (union du ciel et de l'homme) guide l'intégration des bâtiments dans leur environnement naturel.",
    principles: [
      "Intégration au paysage",
      "Respect des courbes naturelles",
      "Jardins comme microcosmes",
      "Matériaux locaux",
    ],
  },
];

const symbols = [
  {
    icon: Crown,
    name: "Dragon",
    chineseName: "龍",
    meaning: "Pouvoir impérial, force et protection. Réservé à l'empereur.",
    usage: "Toits impériaux, colonnes du palais, tuiles décoratives",
  },
  {
    icon: Leaf,
    name: "Phénix",
    chineseName: "鳳凰",
    meaning: "Impératrice, renouveau et prospérité. Symbole féminin par excellence.",
    usage: "Quartiers de l'impératrice, décorations de mariage",
  },
  {
    icon: Home,
    name: "Toit Courbé",
    chineseName: "飛簷",
    meaning:
      "Les toits relevés symbolisent l'élévation spirituelle et protègent des mauvais esprits.",
    usage: "Temples, palais, pavillons de jardin",
  },
  {
    icon: Droplets,
    name: "Eau",
    chineseName: "水",
    meaning: "Richesse, purification et flux de l'énergie vitale.",
    usage: "Douves, fontaines, étangs de lotus",
  },
  {
    icon: Moon,
    name: "Lune",
    chineseName: "月",
    meaning: "Féminité, cycles naturels et sagesse contemplative.",
    usage: "Portes lunaires, pavillons de méditation",
  },
  {
    icon: Sun,
    name: "Soleil",
    chineseName: "日",
    meaning: "Masculinité, pouvoir et énergie vitale Yang.",
    usage: "Orientation des palais, décorations impériales",
  },
];

const colors = [
  {
    name: "Jaune Impérial",
    chineseName: "皇黃",
    hex: "#FFD700",
    meaning: "Couleur exclusive de l'empereur, symbole du centre et de la terre.",
    usage: "Toits de la Cité Interdite, vêtements impériaux",
  },
  {
    name: "Rouge Vermillon",
    chineseName: "朱紅",
    hex: "#C41E3A",
    meaning: "Bonheur, bonne fortune et protection contre le mal.",
    usage: "Murs, portes, colonnes des temples et palais",
  },
  {
    name: "Bleu/Vert",
    chineseName: "青",
    meaning: "Immortalité, printemps et croissance. Couleur du ciel.",
    hex: "#1A365D",
    usage: "Toits du Temple du Ciel, décorations de céladon",
  },
  {
    name: "Noir",
    chineseName: "黑",
    hex: "#1a1a2e",
    meaning: "Eau, nord, sagesse et mystère.",
    usage: "Toits des bibliothèques (protection contre le feu)",
  },
  {
    name: "Blanc",
    chineseName: "白",
    hex: "#FFFEF5",
    meaning: "Pureté, deuil et métal dans les cinq éléments.",
    usage: "Murs d'enceinte, balustrades en marbre",
  },
];

const CulturePage = () => {
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
                文化
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Culture & Héritage
                <br />
                <span className="text-accent">Architectural</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Explorez le symbolisme profond et la philosophie qui imprègnent
                chaque aspect de l'architecture chinoise traditionnelle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="哲學"
              title="Philosophie Architecturale"
              subtitle="Les principes spirituels et cosmologiques qui guident la conception des bâtiments."
            />

            <div className="grid md:grid-cols-3 gap-8">
              {philosophies.map((philosophy, index) => (
                <motion.div
                  key={philosophy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="museum-card p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                      <philosophy.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-chinese text-lg text-muted-foreground/50">
                        {philosophy.chineseTitle}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {philosophy.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {philosophy.description}
                  </p>
                  <ul className="space-y-2">
                    {philosophy.principles.map((principle) => (
                      <li
                        key={principle}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Symbols Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="象徵"
              title="Symbolisme Architectural"
              subtitle="Les motifs et symboles qui ornent les bâtiments et leur signification profonde."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {symbols.map((symbol, index) => (
                <motion.div
                  key={symbol.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="museum-card p-5 group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <symbol.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif font-semibold text-foreground">
                          {symbol.name}
                        </h4>
                        <span className="font-chinese text-muted-foreground/50">
                          {symbol.chineseName}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {symbol.meaning}
                      </p>
                      <p className="text-xs text-accent">
                        Usage : {symbol.usage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="顏色"
              title="Couleurs Symboliques"
              subtitle="Chaque couleur dans l'architecture chinoise porte une signification cosmologique et sociale."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="museum-card overflow-hidden"
                >
                  <div
                    className="h-24"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-serif font-semibold text-foreground text-sm">
                        {color.name}
                      </h4>
                      <span className="font-chinese text-muted-foreground/50 text-sm">
                        {color.chineseName}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {color.meaning}
                    </p>
                    <p className="text-xs text-accent">{color.usage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block font-chinese text-5xl text-accent/60 mb-4"
              >
                傳承
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl font-semibold mb-6"
              >
                Un Héritage Vivant
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-secondary-foreground/80 leading-relaxed mb-8"
              >
                L'architecture chinoise ancienne continue d'inspirer le monde
                entier. Des techniques antisismiques du Dougong aux principes
                d'harmonie du Feng Shui, cet héritage millénaire trouve des
                applications dans l'architecture contemporaine durable et
                respectueuse de l'environnement.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-8"
              >
                <div>
                  <span className="block font-serif text-4xl font-bold text-accent mb-2">
                    55+
                  </span>
                  <span className="text-sm text-secondary-foreground/70">
                    Sites UNESCO
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-4xl font-bold text-accent mb-2">
                    4000+
                  </span>
                  <span className="text-sm text-secondary-foreground/70">
                    Années d'histoire
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-4xl font-bold text-accent mb-2">
                    ∞
                  </span>
                  <span className="text-sm text-secondary-foreground/70">
                    Inspiration
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CulturePage;
