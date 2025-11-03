export default function CTA() {
  return (
    <section id="download" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-r from-emerald-500 to-blue-600 p-6 sm:p-10 text-white">
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Chat smarter with your best friend</h3>
            <p className="mt-2 max-w-2xl text-white/90">
              Get instant help for training, behavior and everyday care. Start free — no account required.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white/95 px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-white">
                Get on App Store
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-black/70 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/80">
                Get on Play Store
              </a>
            </div>
            <p className="mt-3 text-xs text-white/80">Works on iOS, Android and web.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
