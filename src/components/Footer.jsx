const Footer = () => {
  return (
    <footer className="border-t border-t-es-outline flex bg-es-background/60">
      <div className="container mx-auto flex items-center h-16 justify-between px-es-desktop">
        <div className="flex items-center gap-es-gap">
          <a href="/" className="flex items-center gap-es-gap font-bold">
            Event Scheduler
          </a>
          <span className="text-es-outline">•</span>
          <div className="hidden lg:flex items-center gap-space-sm uppercase mono-meta text-es-label gap-es-gap">
            <span>[ Public calendar ]</span>
            <span className="text-es-outline">•</span>
            <span>WBS Coding School Edition</span>
          </div>
        </div>
        <div className="mono-meta text-es-label uppercase">
          Copyright © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
