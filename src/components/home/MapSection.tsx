import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import chinaMap from "@/assets/china-map.jpg";

const sites = [
  {
    name: "Grande Muraille",
    location: "Nord de la Chine",
    description: "Plus de 20 000 km de fortifications",
    coords: { top: "25%", left: "55%" },
  },
  {
    name: "Cité Interdite",
    location: "Beijing",
    description: "980 bâtiments, 8 704 pièces",
    coords: { top: "30%", left: "60%" },
  },
  {
    name: "Temple du Ciel",
    location: "Beijing",
    description: "Chef-d'œuvre de symbolisme cosmologique",
    coords: { top: "32%", left: "62%" },
  },
  {
    name: "Armée de Terre Cuite",
    location: "Xi'an",
    description: "8 000 soldats gardant l'empereur Qin",
    coords: { top: "45%", left: "48%" },
  },
  {
    name: "Jardins de Suzhou",
    location: "Suzhou",
    description: "L'art du jardin classique chinois",
    coords: { top: "50%", left: "65%" },
  },
  {
    name: "Temples de Wudang",
    location: "Hubei",
    description: "Architecture taoïste dans les montagnes",
    coords: { top: "55%", left: "52%" },
  },
];

export const MapSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          chineseTitle="地圖"
          title="Sites Architecturaux Majeurs"
          subtitle="Explorez la géographie des plus grandes réalisations architecturales de la Chine ancienne."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] relative rounded-sm overflow-hidden border border-border"
          >
            <img
              src={chinaMap}
              alt="Carte des sites architecturaux de la Chine ancienne"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

            {/* Decorative pins */}
            {sites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ top: site.coords.top, left: site.coords.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg border-2 border-background animate-pulse" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-background/95 backdrop-blur-sm px-3 py-2 rounded-sm shadow-lg border border-border whitespace-nowrap">
                      <p className="text-xs font-semibold text-foreground">{site.name}</p>
                      <p className="text-xs text-muted-foreground">{site.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sites list */}
          <div className="space-y-4">
            {sites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group museum-card p-4 flex items-start gap-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {site.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-accent mb-1">{site.location}</p>
                  <p className="text-sm text-muted-foreground">
                    {site.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
