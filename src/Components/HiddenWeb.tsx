import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldAlert, KeyRound } from 'lucide-react';
import { PageTitleWithEmoji } from './PageTitleWithEmoji';

export default function HiddenWeb() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Your password is "admin123"
    if (password === 'admin123') {
      navigate('/admin');
    } else {
      alert('🚫 Authentication Failed. Please check password.');
      setPassword('');
    }
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <PageTitleWithEmoji icon={KeyRound} title="AUTHORIZE ACCESS" />

      <div className="flex items-center justify-center flex-grow p-6">
        {/* Style of the restricted card container */}
        <div className="glossy-gradient p-12 rounded-3xl shadow-2xl text-slate-950 border border-slate-100 w-full max-w-lg relative overflow-hidden text-center group">
          
          <div className="text-center mx-auto bg-white h-16 w-16 rounded-3xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-105 transition-transform">
              <ShieldAlert size={24} className="text-[#CA5F7A]" />
          </div>
          
          <h2 className="text-3xl font-extrabold tracking-tighter mb-2 text-slate-950">Restricted Access</h2>
          <p className="text-slate-700 mb-10 text-sm font-mono">System level authorization required.</p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-[#CA5F7A]" size={18} />
              <input 
                type="password" 
                placeholder="Enter Administrator Password" 
                required
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-xl text-center font-mono text-lg text-[#CA5F7A] placeholder:text-slate-400 focus:outline-none focus:border-[#CA5F7A] focus:ring-1 focus:ring-[#CA5F7A] transition"
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </div>
            <button className="w-full flex items-center justify-center gap-3 bg-[#5D428D] hover:bg-[#3F2B66] text-white py-4 rounded-xl font-bold transition shadow-lg shadow-red-600/20 active:scale-95">
              <Lock size={18} /> Authorize Session
            </button>
          </form>
          
          <a href="/" className="inline-block mt-8 text-xs text-slate-500 hover:text-slate-700 transition font-mono">
            &lt; Return to Public Site
          </a>
        </div>
      </div>
    </div>
  );
}
