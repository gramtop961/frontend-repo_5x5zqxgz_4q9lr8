import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-medium ring-1 ring-inset ring-emerald-200">
            AI chat for modern dog parents
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            The smartest way to understand your dog
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            Meet your on-call canine coach. Get instant answers about behavior, training, nutrition and wellness tailored to your pup — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-3 text-white font-semibold shadow hover:opacity-95">
              Start free
            </a>
            <a href="#download" className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 font-semibold shadow-sm hover:bg-gray-50">
              Download app
            </a>
          </div>
          <p className="text-xs text-gray-500">No sign-up required. Works great on mobile.</p>
        </div>
        <div className="h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-xl overflow-hidden shadow-inner bg-gradient-to-b from-gray-50 to-gray-100">
          <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      {/* Soft glow accent that does not block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-emerald-100/40 to-transparent blur-2xl" />
    </section>
  );
}
