import { Navbar } from "@/components";

const Header = () => {
  return (
    <header className="border-b-es-outline bg-es-background/60 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <div className="px-es-desktop container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="gap-es-gap headline flex items-center text-nowrap">
            Event Scheduler
            <span className="bg-es-accent inline-block h-2 w-2"></span>
          </a>
          <div className="gap-space-sm mono-meta text-es-label gap-es-gap hidden items-center uppercase lg:flex">
            <span className="hidden md:inline">[ Your Time, Your Place ]</span>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
