/* ======================= styles.css ======================= */
/* Minimal, modern styles with smooth transitions and responsive layout */
:root{
--bg:#0f1724; /* deep navy */
--card:#0b1220;
--accent:#06b6d4; /* teal */
--muted:#9aa4b2;
--surface:#0f1724;
--radius:12px;
}


*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;background:linear-gradient(180deg,var(--bg),#071024);color:#e6eef6}


.container{max-width:900px;margin:48px auto;padding:24px}
.xYz123{background:rgba(255,255,255,0.02);padding:24px;border-radius:var(--radius);box-shadow:0 6px 18px rgba(2,6,23,0.6)}


h1{font-size:clamp(1.5rem,3vw,2.25rem);margin:0 0 8px}
#dEf789{color:var(--muted);margin:0 0 16px}


.controls{margin:18px 0}
.btn{appearance:none;border:0;padding:12px 18px;border-radius:10px;background:var(--accent);color:#042026;font-weight:600;cursor:pointer;font-size:1rem}
.btn:focus{outline:3px solid rgba(6,182,212,0.18);outline-offset:3px}


.panel{margin-top:18px;padding:18px;border-radius:10px;background:rgba(255,255,255,0.02);transition:opacity 360ms ease,transform 360ms ease;opacity:0;transform:translateY(6px);pointer-events:none}
.panel.visible{opacity:1;transform:translateY(0);pointer-events:auto}
.hidden{display:none !important;opacity:0}


@media (max-width:520px){.container{margin:24px;padding:16px}.btn{width:100%}}
