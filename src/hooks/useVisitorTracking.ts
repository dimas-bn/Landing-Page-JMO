import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

function getSessionId(): string {
  const KEY = 'jmo_visitor_session';
  let id = sessionStorage.getItem(KEY);
  if (!id) { id = crypto.randomUUID(); sessionStorage.setItem(KEY, id); }
  return id;
}

function detectDeviceType(): 'mobile' | 'desktop' {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}

export function useVisitorTracking() {
  useEffect(() => {
      supabase.rpc('catat_kunjungan_landing', {
        p_session_id: getSessionId(),
        p_device_type: detectDeviceType(),
      }).then(({ error }) => {
        if (error) console.error('[JMO] Gagal catat kunjungan:', error);
      });
  }, []);
}
