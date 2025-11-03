import { Dog, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Dog className="h-5 w-5 text-emerald-600" />,
    title: 'Personalized to your pup',
    desc: 'Share your dog\'s breed, age and routines to get truly tailored guidance for behavior and care.'
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
    title: 'Natural, friendly chat',
    desc: 'Ask anything the way you talk. Follow-ups, photos and context help the AI learn over time.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: 'Vet-backed insights',
    desc: 'Grounded in reliable sources and reviewed prompts for safer, trustworthy suggestions.'
  },
  {
    icon: <Sparkles className="h-5 w-5 text-blue-600" />,
    title: 'Actionable routines',
    desc: 'From crate training to leash manners, get clear step-by-step plans you can actually use.'
  }
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Built for better dog days</h2>
          <p className="mt-2 text-gray-600">Everything you need to feel confident — right in your pocket.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-emerald-50 to-blue-50 mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
