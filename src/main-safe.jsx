import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  root.render(
    <main style={{minHeight:'100vh',background:'#090b12',color:'#fff',display:'grid',placeItems:'center',fontFamily:'system-ui, sans-serif',padding:24}}>
      <section style={{maxWidth:560,width:'100%',background:'#121622',border:'1px solid #2a3142',borderRadius:18,padding:28}}>
        <div style={{fontSize:30,fontWeight:800,letterSpacing:2}}>RIVO<span style={{color:'#ff4d4f'}}>.</span></div>
        <h1 style={{marginTop:24}}>RIVO needs one deployment refresh</h1>
        <p style={{color:'#b7c0d1',lineHeight:1.6}}>The app shell is working, but this deployed build does not contain the Supabase environment variables yet.</p>
        <p style={{color:'#b7c0d1',lineHeight:1.6}}>Rebuild the Netlify site after adding <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_PUBLISHABLE_KEY</code>.</p>
      </section>
    </main>
  );
} else {
  import('./main.jsx');
}
