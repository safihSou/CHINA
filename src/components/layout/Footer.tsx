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
                  Ancient Chinese Architecture
                </h3>
                <p className="text-xs text-secondary-foreground/70">
                  The Great Achievements
                </p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-md leading-relaxed">
              An educational journey through the architectural wonders of
              ancient China, exploring the sciences, architects, historical
              texts, and cultural heritage.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4 text-accent">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sciences"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Natural Sciences
                </Link>
              </li>
              <li>
                <Link
                  to="/architectes"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Great Architects
                </Link>
              </li>
              <li>
                <Link
                  to="/livres"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Ancient Books
                </Link>
              </li>
              <li>
                <Link
                  to="/culture"
                  className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  Culture & Heritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4 text-accent">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Bibliography
                </span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Timeline
                </span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Interactive Map
                </span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/70">
                  Glossary
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <p>
            © 2024 Chinese Architecture Competition. Educational project.
          </p>
          <p className="font-chinese">
            中国古代建筑艺术
          </p>
        </div>
      </div>
    </footer>
  );
};
