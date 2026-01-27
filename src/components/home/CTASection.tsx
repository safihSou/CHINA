import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-imperial relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      
      {/* Decorative circles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-accent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-primary"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block font-chinese text-5xl text-accent/60 mb-4"
          >
            開始探索
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-6"
          >
            Prêt à Explorer l'Architecture
            <br />
            de l'Empire du Milieu ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 mb-10 leading-relaxed"
          >
            Plongez dans un voyage à travers les dynasties, découvrez les secrets
            des maîtres bâtisseurs et admirez les chefs-d'œuvre qui ont traversé
            les millénaires.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-medium group"
            >
              <Link to="/sciences">
                Commencer l'Aventure
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              <Link to="/architectes">Rencontrer les Maîtres</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
