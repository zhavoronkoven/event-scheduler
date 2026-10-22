const Footer = () => {
  return (
    <footer className="border-t-es-outline bg-es-background/60 flex border-t">
      <div className="px-es-desktop container mx-auto flex h-16 items-center justify-between">
        <div className="gap-es-gap flex items-center">
          <a href="/" className="gap-es-gap flex items-center font-bold">
            Event Scheduler
          </a>
          <span className="text-es-outline hidden">•</span>
          <div className="gap-space-sm mono-meta text-es-label gap-es-gap flex items-center uppercase">
            <span className="hidden md:inline">[ Your Time, Your Place ]</span>
          </div>
        </div>
        <div className="mono-meta text-es-label uppercase">Copyright © {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
