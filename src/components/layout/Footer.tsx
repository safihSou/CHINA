import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-gradient-vermilion flex items-center justify-center">
                <span className="text-primary-foreground font-chinese text-lg font-bold">
                  築
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">
                  Architecture Chinoise Ancienne
                </h3>
                <p className="text-xs text-secondary-foreground/70">
                  Les Grandes Réalisations
                </p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-md leading-relaxed">
              Un voyage éducatif à travers les merveilles architecturales de la
              Chine ancienne, explorant les sciences, les architectes, les textes
              historiques et l'héritage culturel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4 text-accent">
              Explorer
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sciences"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Sciences Naturelles
                </Link>
              </li>
              <li>
                <Link
                  to="/architectes"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Grands Architectes
                </Link>
              </li>
              <li>
                <Link
                  to="/livres"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Livres Anciens
                </Link>
              </li>
              <li>
                <Link
                  to="/culture"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Culture & Héritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4 text-accent">
              Ressources
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Bibliographie
                </span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Chronologie
                </span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Carte Interactive
                </span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Glossaire
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <p>
            © 2024 Concours Architecture Chinoise. Projet éducatif.
          </p>
          <p className="font-chinese">
            中国古代建筑艺术
          </p>
        </div>
      </div>
    </footer>
  );
};
