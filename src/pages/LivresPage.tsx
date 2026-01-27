import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BookOpen, Calendar, Scroll, FileText, Star } from "lucide-react";
import manuscriptImage from "@/assets/ancient-manuscript.jpg";

const books = [
  {
    title: "Yingzao Fashi",
    chineseTitle: "營造法式",
    author: "Li Jie (李誡)",
    year: "1103",
    dynasty: "Song du Nord",
    description:
      "Le traité d'architecture le plus complet et influent de la Chine ancienne. Commandé par l'empereur et publié officiellement, il codifie tous les aspects de la construction impériale.",
    significance:
      "Première standardisation complète des techniques de construction chinoises, incluant les proportions, matériaux et méthodes.",
    contents: [
      "Système modulaire cai-fen",
      "Techniques Dougong détaillées",
      "34 volumes illustrés",
      "3555 illustrations techniques",
    ],
    impact:
      "Référence officielle pour toutes les constructions impériales pendant des siècles.",
  },
  {
    title: "Lu Ban Jing",
    chineseTitle: "魯班經",
    author: "Attribué à Lu Ban",
    year: "XVe siècle",
    dynasty: "Ming",
    description:
      "Manuel pratique de charpenterie traditionnelle, mêlant techniques de construction, rituels et géomancie. Destiné aux artisans et charpentiers de tous niveaux.",
    significance:
      "Transmission du savoir-faire artisanal et des traditions spirituelles liées à la construction.",
    contents: [
      "Techniques de menuiserie",
      "Rituels de construction",
      "Calculs de Feng Shui",
      "Fabrication de meubles",
    ],
    impact:
      "Bible des charpentiers chinois, encore consultée par les artisans traditionnels.",
  },
  {
    title: "Gongcheng Zuofa",
    chineseTitle: "工程做法",
    author: "Bureau des Travaux Qing",
    year: "1734",
    dynasty: "Qing",
    description:
      "Règlement officiel des travaux publics de la dynastie Qing, établissant les normes de construction pour tous les bâtiments gouvernementaux et impériaux.",
    significance:
      "Adaptation des principes du Yingzao Fashi aux besoins et esthétiques de la dynastie Qing.",
    contents: [
      "27 règlements officiels",
      "Standards de matériaux",
      "Coûts et budgets",
      "Procédures administratives",
    ],
    impact:
      "Gouverné la construction de tous les bâtiments officiels Qing, y compris les restaurations de la Cité Interdite.",
  },
];

const LivresPage = () => {
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
                古書
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Livres d'Architecture
                <br />
                <span className="text-accent">Anciens</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Les traités qui ont codifié le savoir architectural chinois,
                transmettant les techniques des maîtres à travers les siècles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="典籍"
              title="Traités Fondamentaux"
              subtitle="Les textes essentiels qui ont façonné l'architecture chinoise."
            />

            <div className="space-y-16">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="museum-card overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3">
                    {/* Book Cover Placeholder */}
                    <div className="bg-secondary p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-sm bg-accent/20 flex items-center justify-center mb-4">
                        <Scroll className="w-10 h-10 text-accent" />
                      </div>
                      <span className="font-chinese text-4xl text-secondary-foreground mb-2">
                        {book.chineseTitle}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-secondary-foreground mb-4">
                        {book.title}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2 text-xs">
                        <span className="px-2 py-1 rounded-sm bg-primary/20 text-primary-foreground">
                          {book.dynasty}
                        </span>
                        <span className="px-2 py-1 rounded-sm bg-accent/20 text-accent-foreground">
                          {book.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" />
                          {book.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          {book.year}
                        </span>
                      </div>

                      <p className="text-foreground leading-relaxed mb-6">
                        {book.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-primary" />
                            Contenu Principal
                          </h4>
                          <ul className="space-y-2">
                            {book.contents.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-accent" />
                            Importance Historique
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {book.significance}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-muted rounded-sm">
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">Impact durable : </span>
                          {book.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Viewer Placeholder */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="閱讀"
              title="Manuscrits Numérisés"
              subtitle="Explorez les pages originales de ces trésors historiques."
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden border border-border relative group">
                <img
                  src={manuscriptImage}
                  alt="Manuscrit ancien du Yingzao Fashi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="font-serif text-xl font-semibold text-secondary-foreground mb-2">
                      Yingzao Fashi - 營造法式
                    </h4>
                    <p className="text-secondary-foreground/80 text-sm max-w-md">
                      Pages originales du traité architectural de Li Jie, montrant les illustrations techniques détaillées des méthodes de construction.
                    </p>
                  </div>
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

export default LivresPage;
