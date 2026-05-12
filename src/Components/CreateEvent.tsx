import FormEvent from '../FormEvent';

export default function CreateEvent() {
  return (
    <div className="grid lg:grid-cols-3 gap-16 items-start">
      {/* Left side info */}
      <div className="lg:col-span-1 lg:sticky lg:top-28">
        <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold mb-3">
          Host Section
        </span>
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-950 mb-5">
          Launch your <span className="text-indigo-600">Initiative</span>
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          Fill out the details to the right. Once submitted, your event will appear instantly on the public dashboard for thousands to see.
        </p>
        
        <div className="bg-slate-950 p-6 rounded-2xl text-slate-300 text-sm space-y-3 border border-slate-800">
          <p className="font-semibold text-white">Submission Tips:</p>
          <p>• Use a catchy, clear title.</p>
          <p>• Ensure venue details are precise.</p>
          <p>• Make description engaging and informative.</p>
        </div>
      </div>

      {/* Right side Form */}
      <div className="lg:col-span-2">
        <FormEvent />
      </div>
    </div>
  );
}
