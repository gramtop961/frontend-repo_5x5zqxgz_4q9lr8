import { Rocket, Dog } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-blue-500 text-white">
            <Dog className="h-5 w-5" />
          </span>
          <span>PawTalk AI</span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <Rocket className="h-4 w-4 text-emerald-500" />
            Download
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:opacity-95"
          >
            Open App
          </a>
        </div>
      </nav>
    </header>
  );
}
