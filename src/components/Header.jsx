import { Link } from "react-router";
import { Navbar } from "@/components";
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />

const Header = () => {
  return (
    <header className="border-b-es-outline bg-es-background/60 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg">
      <div className="px-es-mobile lg:px-es-desktop container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="gap-es-gap headline flex items-center text-nowrap">
            Event Scheduler
            <span className="bg-es-accent inline-block h-2 w-2"></span>
          </Link>
          <div className="gap-es-gap mono-meta text-es-label hidden items-center uppercase lg:flex">
            <span className="hidden md:inline">[ Your Time, Your Place ]</span>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;