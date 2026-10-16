import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-b-es-outline bg-es-background/60 backdrop-blur-lg">
      <div className="container mx-auto flex items-center h-16 justify-between px-es-desktop">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-es-gap headline">
            Event Scheduler
            <span className="w-2 h-2 inline-block bg-es-accent"></span>
          </a>
          <div className="hidden lg:flex items-center gap-space-sm uppercase mono-meta text-es-label gap-es-gap">
            <span>[ Public calendar ]</span>
            <span className="text-es-outline">•</span>
            <span>WBS Coding School Edition</span>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
