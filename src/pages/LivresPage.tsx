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
    dynasty: "Northern Song",
    description:
      "The most comprehensive and influential architectural treatise in ancient China. Commissioned by the emperor and officially published, it codified all aspects of imperial construction.",
    significance:
      "The first complete standardization of Chinese construction techniques, including proportions, materials, and methods.",
    contents: [
      "Modular cai-fen system",
      "Detailed Dougong techniques",
      "34 illustrated volumes",
      "3,555 technical illustrations",
    ],
    impact:
      "Official reference for all imperial construction projects for centuries.",
  },
  {
    title: "Lu Ban Jing",
    chineseTitle: "魯班經",
    author: "Attributed to Lu Ban",
    year: "15th century",
    dynasty: "Ming",
    description:
      "A practical manual of traditional carpentry, blending construction techniques, rituals, and geomancy. Intended for artisans and carpenters of all skill levels.",
    significance:
      "Preservation of artisanal craftsmanship and spiritual traditions associated with building.",
    contents: [
      "Woodworking techniques",
      "Construction rituals",
      "Feng Shui calculations",
      "Furniture making",
    ],
    impact:
      "The essential guide for Chinese carpenters—still consulted by traditional craftsmen today.",
  },
  {
    title: "Gongcheng Zuofa",
    chineseTitle: "工程做法",
    author: "Qing Ministry of Works",
    year: "1734",
    dynasty: "Qing",
    description:
      "The official Qing dynasty regulation for public works, establishing construction standards for all government and imperial buildings.",
    significance:
      "Adaptation of Yingzao Fashi principles to Qing-era needs and aesthetics.",
    contents: [
      "27 official regulations",
      "Material standards",
      "Cost estimates and budgets",
      "Administrative procedures",
    ],
    impact:
      "Governed the construction of all Qing official buildings, including restorations of the Forbidden City.",
  },
];

const BooksPage = () => {
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
                Ancient Architectural
                <br />
                <span className="text-accent">Books</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                The treatises that codified Chinese architectural knowledge, transmitting master builders’ techniques across centuries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="典籍"
              title="Foundational Treatises"
              subtitle="The essential texts that shaped Chinese architecture."
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
                            Key Contents
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
                            Historical Significance
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {book.significance}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-muted rounded-sm">
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">Lasting Impact: </span>
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
              title="Digitized Manuscripts"
              subtitle="Explore the original pages of these historical treasures."
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
                  alt="Ancient manuscript from Yingzao Fashi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="font-serif text-xl font-semibold text-secondary-foreground mb-2">
                      Yingzao Fashi - 營造法式
                    </h4>
                    <p className="text-secondary-foreground/80 text-sm max-w-md">
                      Original pages from Li Jie’s architectural treatise, showcasing detailed technical illustrations of construction methods.
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

export default BooksPage;
