import { Link, useLocation } from "react-router";

const NotFoundPage = () => {

  const { pathname } = useLocation();

  return (
    <section className="px-es-mobile md:px-es-desktop py-es-mobile md:py-es-desktop container mx-auto">
      <div className="gap-es-gap border-b-es-divider mono-meta text-es-label flex items-center justify-between border-b pb-4 uppercase">
        <span>[ Error 404 ]</span>
        <span className="truncate">Page not found</span>
      </div>

      <div className="gap-x-es-desktop gap-y-es-mobile py-es-mobile md:py-es-desktop grid min-h-[50svh] grid-cols-1 items-end lg:grid-cols-12">
        <h1 aria-label="404" className="h1 nodot text-[clamp(7rem,32vw,20rem)] leading-none font-semibold tracking-tighter select-none lg:col-span-7">
          404
          <span aria-hidden="true" className="bg-es-accent ml-[0.04em] inline-block h-[0.1em] w-[0.1em]" />
        </h1>

        <div className="gap-es-mobile flex flex-col lg:col-span-5">
          <div className="gap-es-gap flex flex-col">
            <p className="headline">This page doesn't exist.</p>
            <p className="text-es-label max-w-md">The address may be mistyped, or the event has been removed. Head back to the event list to see what's coming up.</p>
          </div>

          <p className="mono-meta text-es-label border-t-es-divider border-t pt-4 break-all uppercase">{pathname}</p>

          <div className="gap-x-es-mobile gap-y-es-gap flex flex-wrap items-center">
            <Link to="/" className="px-es-mobile bg-es-primary text-es-background hover:bg-es-accent focus-visible:outline-es-accent inline-flex h-12 items-center font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2">
              Back to events
            </Link>
            <Link to="/events/create" className="decoration-es-outline hover:decoration-es-accent focus-visible:outline-es-accent font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">
              Create event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
