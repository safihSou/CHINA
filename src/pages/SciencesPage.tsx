import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Cog, Wind, Shield, Layers, Ruler, Compass } from "lucide-react";
import dougongImage from "@/assets/dougong-system.jpg";

const innovations = [
  {
    icon: Shield,
    title: "Dougong System",
    chineseTitle: "斗拱",
    description:
      "An interlocking wooden bracket system assembled without nails or screws, providing unique structural flexibility. It absorbs seismic shocks and distributes roof weight efficiently.",
    details: [
      "Earthquake resistance",
      "Optimal load distribution",
      "Metal-free assembly",
    ],
  },
  {
    icon: Wind,
    title: "Natural Ventilation",
    chineseTitle: "通風",
    description:
      "Traditional buildings use interior courtyards and precise orientations to create natural airflow, regulating indoor temperature without external energy.",
    details: [
      "Interior courtyards (Siheyuan)",
      "Optimal south-facing orientation",
      "Sloped roofs for thermal regulation",
    ],
  },
  {
    icon: Cog,
    title: "Seismic-Resistant Techniques",
    chineseTitle: "抗震",
    description:
      "Pagodas and temples employ floating central columns and flexible foundations, enabling structures to withstand centuries of earthquakes.",
    details: [
      "Suspended central columns",
      "Mortarless stone foundations",
      "Flexible wooden joints",
    ],
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    chineseTitle: "模組",
    description:
      "A standardized modular system (cai-fen) allowed buildings of any scale to be constructed while maintaining harmonious proportions.",
    details: [
      "Cai as the base unit of measurement",
      "Codified proportional ratios",
      "Perfect scalability",
    ],
  },
  {
    icon: Ruler,
    title: "Sacred Geometry",
    chineseTitle: "幾何",
    description:
      "Imperial building dimensions follow precise mathematical ratios derived from Feng Shui and Chinese cosmology.",
    details: [
      "Yin and Yang numbers",
      "Lo Shu magic square",
      "Sacred north-south axis",
    ],
  },
  {
    icon: Compass,
    title: "Feng Shui Orientation",
    chineseTitle: "風水",
    description:
      "Every building is oriented according to Feng Shui principles to harmonize the flow of energy (Qi) between humans and their environment.",
    details: [
      "Luopan compass",
      "Protective mountains to the north",
      "Water to the south for prosperity",
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
                Natural Sciences
                <br />
                <span className="text-accent">& Innovations</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Ancient Chinese architecture represents a remarkable fusion of science, art, and philosophy. Discover the technical innovations that enabled these structures to endure for millennia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Innovations Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="創新"
              title="Technical Innovations"
              subtitle="Engineering marvels that continue to inspire modern architecture."
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
              title="Interactive 3D Model",
              subtitle="Explore the Dougong bracket system in three dimensions."
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
                  alt="Dougong System – Interlocking wooden brackets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <h4 className="font-serif text-xl font-semibold text-secondary-foreground mb-2">
                      Dougong System
                    </h4>
                    <p className="text-secondary-foreground/80 text-sm max-w-md">
                      An interlocking wooden bracket system assembled without nails, offering unique structural flexibility and earthquake resistance.
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-sm text-xs font-medium text-foreground">
                  Interactive 3D Space
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
