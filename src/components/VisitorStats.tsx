import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Stats { total: number; hari_ini: number; mobile: number; desktop: number; }

export default function VisitorStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [online, setOnline] = useState(1);

  useEffect(() => {
    const muatStats = async () => {
      const { data } = await supabase.rpc('get_statistik_landing');
      if (data) setStats(data as Stats);
    };
    muatStats();
    const interval = setInterval(muatStats, 60000);

    const channel = supabase.channel('landing-online');
    channel
      .on('presence', { event: 'sync' }, () => setOnline(Object.keys(channel.presenceState()).length))
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') await channel.track({ t: Date.now() });
      });

    return () => { clearInterval(interval); supabase.removeChannel(channel); };
  }, []);

  if (!stats) return null;

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-[#6E6252] text-center">
      <span>Total: <strong>{stats.total.toLocaleString('id-ID')}</strong></span>
      <span>Hari ini: <strong>{stats.hari_ini.toLocaleString('id-ID')}</strong></span>
      <span>Online sekarang: <strong>{online}</strong></span>
      <span>📱 HP: <strong>{stats.mobile.toLocaleString('id-ID')}</strong></span>
      <span>💻 Laptop/PC: <strong>{stats.desktop.toLocaleString('id-ID')}</strong></span>
    </div>
  );
}
