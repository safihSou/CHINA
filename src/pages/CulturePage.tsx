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
      "The ancient art of harmonizing energy (Qi) between humans and their environment. Every building is oriented to optimize the flow of beneficial energies.",
    principles: [
      "South-facing orientation to capture Yang energy",
      "Protective mountains to the north",
      "Water to the south for prosperity",
      "Balance of the Five Elements",
    ],
  },
  {
    icon: Sun,
    title: "Yin and Yang",
    chineseTitle: "陰陽",
    description:
      "The principle of complementary duality appears in every aspect of Chinese architecture—from proportions and materials to orientation.",
    principles: [
      "South façades (Yang) vs. north (Yin)",
      "Wood (Yang) and stone (Yin)",
      "Open and enclosed spaces",
      "Light and shadow",
    ],
  },
  {
    icon: Mountain,
    title: "Harmony with Nature",
    chineseTitle: "天人合一",
    description:
      "The concept of 'Tianren Heyi' (Unity of Heaven and Humanity) guides the integration of buildings into their natural surroundings.",
    principles: [
      "Integration with the landscape",
      "Respect for natural contours",
      "Gardens as microcosms",
      "Use of local materials",
    ],
  },
];

const symbols = [
  {
    icon: Crown,
    name: "Dragon",
    chineseName: "龍",
    meaning: "Imperial power, strength, and protection. Reserved exclusively for the emperor.",
    usage: "Imperial roofs, palace columns, decorative tiles",
  },
  {
    icon: Leaf,
    name: "Phoenix",
    chineseName: "鳳凰",
    meaning: "Empress, renewal, and prosperity. The ultimate feminine symbol.",
    usage: "Empress’s quarters, wedding decorations",
  },
  {
    icon: Home,
    name: "Curved Roof",
    chineseName: "飛簷",
    meaning:
      "Upturned eaves symbolize spiritual elevation and ward off evil spirits.",
    usage: "Temples, palaces, garden pavilions",
  },
  {
    icon: Droplets,
    name: "Water",
    chineseName: "水",
    meaning: "Wealth, purification, and the flow of vital energy.",
    usage: "Moats, fountains, lotus ponds",
  },
  {
    icon: Moon,
    name: "Moon",
    chineseName: "月",
    meaning: "Femininity, natural cycles, and contemplative wisdom.",
    usage: "Moon gates, meditation pavilions",
  },
  {
    icon: Sun,
    name: "Sun",
    chineseName: "日",
    meaning: "Masculinity, authority, and Yang vital energy.",
    usage: "Palace orientation, imperial decorations",
  },
];

const colors = [
  {
    name: "Imperial Yellow",
    chineseName: "皇黃",
    hex: "#FFD700",
    meaning: "Exclusive color of the emperor, symbolizing the center and the earth.",
    usage: "Roofs of the Forbidden City, imperial robes",
  },
  {
    name: "Vermilion Red",
    chineseName: "朱紅",
    hex: "#C41E3A",
    meaning: "Happiness, good fortune, and protection against evil.",
    usage: "Walls, doors, temple and palace columns",
  },
  {
    name: "Blue/Green",
    chineseName: "青",
    meaning: "Immortality, spring, and growth. Color of the heavens.",
    hex: "#1A365D",
    usage: "Roofs of the Temple of Heaven, celadon decorations",
  },
  {
    name: "Black",
    chineseName: "黑",
    hex: "#1a1a2e",
    meaning: "Water, north, wisdom, and mystery.",
    usage: "Roofs of libraries (protection against fire)",
  },
  {
    name: "White",
    chineseName: "白",
    hex: "#FFFEF5",
    meaning: "Purity, mourning, and metal in the Five Elements.",
    usage: "Enclosure walls, marble balustrades",
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
                Culture & Heritage
                <br />
                <span className="text-accent">Architectural</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Explore the profound symbolism and philosophy embedded in every aspect of traditional Chinese architecture.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="哲學"
              title="Architectural Philosophy"
              subtitle="The spiritual and cosmological principles guiding building design."
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
              title="Architectural Symbolism"
              subtitle="The motifs and symbols adorning buildings and their deep meanings."
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
                        Usage: {symbol.usage}
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
              title="Symbolic Colors"
              subtitle="Every color in Chinese architecture carries cosmological and social significance."
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
                A Living Heritage
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-secondary-foreground/80 leading-relaxed mb-8"
              >
                Ancient Chinese architecture continues to inspire the world. From the earthquake-resistant Dougong brackets to the harmony principles of Feng Shui, this millennia-old heritage finds new life in sustainable, environmentally conscious contemporary design.
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
                    UNESCO Sites
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-4xl font-bold text-accent mb-2">
                    4000+
                  </span>
                  <span className="text-sm text-secondary-foreground/70">
                    Years of History
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
