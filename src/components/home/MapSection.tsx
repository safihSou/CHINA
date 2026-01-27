import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import chinaMap from "@/assets/china-map.jpg";

const sites = [
  {
    name: "Great Wall",
    location: "Northern China",
    description: "Over 20,000 km of fortifications",
    coords: { top: "25%", left: "55%" },
  },
  {
    name: "Forbidden City",
    location: "Beijing",
    description: "980 buildings, 8,704 rooms",
    coords: { top: "30%", left: "60%" },
  },
  {
    name: "Temple of Heaven",
    location: "Beijing",
    description: "Masterpiece of cosmological symbolism",
    coords: { top: "32%", left: "62%" },
  },
  {
    name: "Terracotta Army",
    location: "Xi'an",
    description: "8,000 soldiers guarding Emperor Qin",
    coords: { top: "45%", left: "48%" },
  },
  {
    name: "Suzhou Gardens",
    location: "Suzhou",
    description: "The art of classical Chinese gardens",
    coords: { top: "50%", left: "65%" },
  },
  {
    name: "Wudang Temples",
    location: "Hubei",
    description: "Taoist architecture in the mountains",
    coords: { top: "55%", left: "52%" },
  },
];

export const MapSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          chineseTitle="地圖"
          title="Major Architectural Sites"
          subtitle="Explore the geography of ancient China's greatest architectural achievements."
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
              alt="Map of ancient Chinese architectural sites"
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
