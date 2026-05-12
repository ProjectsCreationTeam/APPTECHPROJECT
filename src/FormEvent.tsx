import { useState } from 'react';
import axios from 'axios';
import { SendHorizontal, Loader2 } from 'lucide-react';

const InputField = ({ label, icon: Icon, ...props }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-[#CA5F7A]" />}
      {label}
    </label>
    {/* Style of form fields from image_2.png */}
    <input 
      {...props} 
      className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-[#CA5F7A]/5 focus:ring-2 focus:ring-[#EDC4C7] focus:border-[#CA5F7A]/20 transition outline-none text-slate-900 placeholder:text-slate-400"
    />
  </div>
);

export default function FormEvent() {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState({
    organizerName: '', campaignTitle: '', venue: '', date: '', description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/events', event);
      alert('🎉 Campaign published successfully!');
      setEvent({ organizerName: '', campaignTitle: '', venue: '', date: '', description: '' });
    } catch (err) {
      alert('Error creating event. Is server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField 
          label="Organizer Name" placeholder="e.g. Acme Corp" required
          value={event.organizerName} onChange={(e: any) => setEvent({...event, organizerName: e.target.value})} 
        />
        <InputField 
          label="Campaign Title" placeholder="e.g. Summer Code Fest '24" required
          value={event.campaignTitle} onChange={(e: any) => setEvent({...event, campaignTitle: e.target.value})} 
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField 
          label="Venue Location" placeholder="e.g. Grand Venture Hall, NY" required
          value={event.venue} onChange={(e: any) => setEvent({...event, venue: e.target.value})} 
        />
        <InputField 
          label="Event Date & Time" type="datetime-local" required
          value={event.date} onChange={(e: any) => setEvent({...event, date: e.target.value})} 
        />
      </div>

      <div className="space-y-1.5 w-full">
        <label className="text-sm font-medium text-slate-700">Detailed Description</label>
        <textarea 
          placeholder="Describe the purpose, agenda, and target audience..." required rows={6} 
          className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-[#CA5F7A]/5 focus:ring-2 focus:ring-[#EDC4C7] focus:border-[#CA5F7A]/20 transition outline-none text-slate-900 placeholder:text-slate-400 resize-none"
          value={event.description} onChange={e => setEvent({...event, description: e.target.value})} 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 glossy-gradient text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 active:scale-[0.98]"
      >
        {loading ? (
          <><Loader2 className="animate-spin" /> Processing...</>
        ) : (
          <><SendHorizontal size={20} /> Publish Campaign Live</>
        )}
      </button>
    </form>
  );
}
