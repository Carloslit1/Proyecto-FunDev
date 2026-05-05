import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/intranet")({
  head: () => ({
    meta: [
      { title: "Portal Interno — Doggie Chic Studio" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Intranet,
});

type TabKey = "dash" | "inv" | "servicios" | "productos" | "incidencias" | "consultas" | "estado";
type Item = { sku: string; nombre: string; categoria: string; stock: number; min: number };

const initialInv: Item[] = [
  { sku: "SH-001", nombre: "Shampoo hipoalergénico 1L", categoria: "Baño",     stock: 12, min: 5 },
  { sku: "SH-002", nombre: "Shampoo dermatológico",     categoria: "Farmacia", stock: 3,  min: 5 },
  { sku: "AC-010", nombre: "Acondicionador hidratante", categoria: "Baño",     stock: 8,  min: 4 },
  { sku: "PA-020", nombre: "Perfume pet-safe",          categoria: "Boutique", stock: 18, min: 6 },
  { sku: "DE-030", nombre: "Pasta dental canina",       categoria: "Higiene",  stock: 4,  min: 4 },
  { sku: "DE-031", nombre: "Cepillo dental",            categoria: "Higiene",  stock: 22, min: 8 },
];
const servicios = [
  { id: "S1", nombre: "Paquete Baño",     duracion: "45 min", precio: "$290", activo: true },
  { id: "S2", nombre: "Paquete Básico",   duracion: "60 min", precio: "$390", activo: true },
  { id: "S3", nombre: "Paquete Completo", duracion: "90 min", precio: "$590", activo: true },
  { id: "S4", nombre: "Aromaterapia",     duracion: "20 min", precio: "$120", activo: false },
];
const productos = [
  { id: "P1", nombre: "Perfume pet-safe",       categoria: "Boutique", precio: "$240", stock: 18 },
  { id: "P2", nombre: "Antiparasitario premium", categoria: "Farmacia", precio: "$380", stock: 9 },
  { id: "P3", nombre: "Cepillo dental canino",  categoria: "Higiene",  precio: "$160", stock: 22 },
];
const incidencias = [
  { id: "I-021", tipo: "Sistema",    desc: "Reinicio programado API intranet",    estado: "Resuelta", sev: "Baja" },
  { id: "I-022", tipo: "Inventario", desc: "Stock bajo en SH-002 y DE-030",       estado: "Abierta",  sev: "Media" },
];
const consultas = [
  { id: 1, fecha: "2026-05-04", cliente: "Ana López",    mensaje: "¿Tienen shampoo para piel sensible?" },
  { id: 2, fecha: "2026-05-04", cliente: "Luis García",  mensaje: "Información sobre paquete completo." },
  { id: 3, fecha: "2026-05-05", cliente: "María Torres", mensaje: "¿Atienden razas grandes?" },
];

const navItems: { key: TabKey; label: string; icon: string }[] = [
  { key: "dash",       label: "Resumen",           icon: "▣" },
  { key: "inv",        label: "Inventario",         icon: "▦" },
  { key: "servicios",  label: "Servicios",          icon: "✦" },
  { key: "productos",  label: "Productos",          icon: "◈" },
  { key: "incidencias",label: "Incidencias",        icon: "⚠" },
  { key: "consultas",  label: "Solicitudes",        icon: "✉" },
  { key: "estado",     label: "Estado del sistema", icon: "◉" },
];

/* ─── sub-components ─── */
function DBadge({ tone, children }: { tone: "ok"|"warn"|"info"|"muted"; children: React.ReactNode }) {
  return <span className={`dash-badge ${tone}`}>{children}</span>;
}

function DCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="dash-metric-card" style={{ display:"flex", flexDirection:"column", gap:".75rem" }}>
      <div style={{ fontSize:".65rem", textTransform:"uppercase", letterSpacing:".14em", fontWeight:700, color:"var(--color-text-muted)" }}>{title}</div>
      {children}
    </div>
  );
}

function DTable({ cols, rows }: { cols: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="dash-table">
      <table style={{ width:"100%", borderCollapse:"collapse" }}>
        <thead><tr>{cols.map(c => <th key={c} className="dash-table">{c}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((cell, j) => <td key={j} className="dash-table">{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/* ─── Login ─── */
function Login({ onLogin, err }: { onLogin:(u:string,p:string)=>void; err:string }) {
  const [u, setU] = useState(""); const [p, setP] = useState("");
  return (
    <div style={{ minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr", background:"var(--gradient-hero)" }} className="login-wrap">
      {/* Left panel */}
      <div className="dash-sidebar" style={{ position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"3rem", overflow:"hidden" }} >
        <div className="ambient-blob" style={{ width:"350px", height:"350px", top:"-100px", left:"-80px", background:"rgba(59,167,255,.3)", opacity:.35 }} />
        <div style={{ position:"relative" }}>
          <div style={{ display:"flex", alignItems:"center", gap:".625rem", marginBottom:"3rem" }}>
            <span style={{ width:"42px", height:"42px", borderRadius:"11px", background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", display:"grid", placeItems:"center", fontFamily:"var(--font-display)", fontWeight:800, fontSize:"1.1rem", color:"white" }}>D</span>
            <span style={{ fontFamily:"var(--font-display)", fontSize:"1.125rem", fontWeight:700, color:"white" }}>Doggie Chic Studio</span>
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"2.75rem", fontWeight:700, color:"white", lineHeight:1.15, marginBottom:"1rem" }}>Portal interno</h2>
          <p style={{ color:"rgba(255,255,255,.65)", lineHeight:1.7, maxWidth:"340px" }}>Acceso restringido al personal autorizado para gestión de inventario, servicios e incidencias.</p>
        </div>
        {/* Metrics preview */}
        <div style={{ display:"flex", flexDirection:"column", gap:".875rem", position:"relative" }}>
          {[{l:"Servicios activos",v:"3"},{l:"SKUs en inventario",v:"6"},{l:"Solicitudes nuevas",v:"3"}].map(m=>(
            <div key={m.l} className="glass-dark" style={{ borderRadius:"1rem", padding:"1rem 1.25rem", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:".875rem", color:"rgba(255,255,255,.7)" }}>{m.l}</span>
              <span style={{ fontFamily:"var(--font-display)", fontWeight:800, color:"white", fontSize:"1.25rem" }}>{m.v}</span>
            </div>
          ))}
        </div>
        <div style={{ position:"relative", fontSize:".75rem", color:"rgba(255,255,255,.4)" }}>© 2026 Doggie Chic Studio · Monterrey, N.L.</div>
      </div>

      {/* Right — form */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem" }}>
        <form onSubmit={e=>{e.preventDefault();onLogin(u,p);}} className="card-premium" style={{ width:"100%", maxWidth:"400px", padding:"2.5rem" }}>
          <div style={{ marginBottom:"2rem" }}>
            <div style={{ fontSize:".65rem", textTransform:"uppercase", letterSpacing:".14em", fontWeight:700, color:"var(--color-text-muted)", marginBottom:".375rem" }}>Bienvenido</div>
            <h1 style={{ fontFamily:"var(--font-display)", fontSize:"1.875rem", fontWeight:700 }}>Inicia sesión</h1>
          </div>
          {err && <div style={{ background:"rgba(239,68,68,.1)", color:"#b91c1c", borderRadius:".75rem", padding:".75rem 1rem", fontSize:".875rem", marginBottom:"1.25rem" }}>{err}</div>}
          {[{l:"Usuario",v:u,set:setU,t:"text"},{l:"Contraseña",v:p,set:setP,t:"password"}].map(f=>(
            <div key={f.l} style={{ marginBottom:"1.125rem" }}>
              <label style={{ fontSize:".65rem", textTransform:"uppercase", letterSpacing:".12em", fontWeight:700, color:"var(--color-text-muted)", display:"block", marginBottom:".5rem" }}>{f.l}</label>
              <input type={f.t} value={f.v} onChange={e=>f.set(e.target.value)} className="input-premium" placeholder={f.l} required />
            </div>
          ))}
          <button type="submit" className="btn-premium" style={{ width:"100%", justifyContent:"center", marginTop:".5rem" }}>Entrar →</button>
          <p style={{ textAlign:"center", fontSize:".75rem", color:"var(--color-text-muted)", marginTop:"1rem" }}>Demo: admin / admin</p>
        </form>
      </div>
      <style>{`@media(max-width:700px){.login-wrap{grid-template-columns:1fr!important}}.login-wrap>div:first-child{display:flex}@media(max-width:700px){.login-wrap>div:first-child{display:none!important}}`}</style>
    </div>
  );
}

/* ─── Main dashboard ─── */
function Dashboard({ tab, setTab, inv, onLogout }: { tab:TabKey; setTab:(t:TabKey)=>void; inv:Item[]; onLogout:()=>void }) {
  const lowStock = inv.filter(i=>i.stock<=i.min).length;

  return (
    <div style={{ minHeight:"100vh", display:"flex", background:"#F4F8FC" }}>
      {/* Sidebar */}
      <aside className="dash-sidebar desktop-sidebar" style={{ width:"240px", display:"flex", flexDirection:"column", padding:"1.5rem 1rem", position:"sticky", top:0, height:"100vh", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:".625rem", marginBottom:"2.5rem", padding:"0 .5rem" }}>
          <span style={{ width:"38px", height:"38px", borderRadius:"10px", background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.18)", display:"grid", placeItems:"center", fontFamily:"var(--font-display)", fontWeight:800, color:"white", fontSize:"1rem", flexShrink:0 }}>D</span>
          <div>
            <div style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"white", fontSize:".9375rem", lineHeight:1.2 }}>Doggie Chic</div>
            <div style={{ fontSize:".6rem", textTransform:"uppercase", letterSpacing:".14em", color:"rgba(255,255,255,.4)", fontWeight:600 }}>Intranet</div>
          </div>
        </div>
        <nav style={{ flex:1, display:"flex", flexDirection:"column", gap:".25rem" }}>
          {navItems.map(n => (
            <button key={n.key} onClick={()=>setTab(n.key)} className={`dash-nav-item ${tab===n.key?"active":""}`}>
              <span style={{ width:"18px", textAlign:"center", fontSize:".875rem", color:tab===n.key?"var(--color-sky)":"rgba(255,255,255,.5)", flexShrink:0 }} className="dash-nav-icon">{n.icon}</span>
              {n.label}
            </button>
          ))}
        </nav>
        <div style={{ borderTop:"1px solid rgba(255,255,255,.08)", paddingTop:"1.25rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:".625rem", marginBottom:".875rem" }}>
            <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:"var(--gradient-primary)", display:"grid", placeItems:"center", color:"white", fontWeight:700, fontSize:".875rem", flexShrink:0 }}>A</div>
            <div>
              <div style={{ fontSize:".875rem", fontWeight:600, color:"white" }}>admin</div>
              <div style={{ fontSize:".65rem", color:"rgba(255,255,255,.4)" }}>Administrador</div>
            </div>
          </div>
          <button onClick={onLogout} style={{ background:"transparent", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.6)", borderRadius:".625rem", padding:".5rem .875rem", fontSize:".75rem", cursor:"pointer", width:"100%", transition:"all .2s" }}>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0 }}>
        {/* Header */}
        <header style={{ background:"white", borderBottom:"1px solid var(--color-silver)", position:"sticky", top:0, zIndex:10, padding:"0 2rem", height:"64px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:".6rem", textTransform:"uppercase", letterSpacing:".14em", fontWeight:700, color:"var(--color-text-muted)" }}>Panel interno</div>
            <div style={{ fontFamily:"var(--font-display)", fontSize:"1.125rem", fontWeight:700, color:"var(--foreground)", marginTop:".1rem" }}>
              {navItems.find(n=>n.key===tab)?.label}
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
            <span className="glass" style={{ display:"inline-flex", alignItems:"center", gap:".4rem", borderRadius:"999px", padding:".375rem .875rem", fontSize:".75rem", fontWeight:600, color:"var(--color-text-muted)" }}>
              <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#10b981", display:"inline-block" }} />
              Sistema operativo
            </span>
            <div style={{ width:"36px", height:"36px", borderRadius:"50%", background:"var(--gradient-primary)", display:"grid", placeItems:"center", color:"white", fontWeight:700, fontSize:".875rem" }}>A</div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex:1, padding:"2rem", overflowY:"auto" }}>
          {/* DASHBOARD */}
          {tab==="dash" && (
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1rem" }}>
                {[
                  {l:"Clientes atendidos hoy",v:"24",s:"+12% vs ayer",c:"var(--color-primary)"},
                  {l:"Productos vendidos",v:"41",s:"+8% semana",c:"#10b981"},
                  {l:"SKUs en inventario",v:String(inv.length),s:`${lowStock} a reabastecer`,c:"#f59e0b"},
                  {l:"Solicitudes nuevas",v:String(consultas.length),s:"Hoy",c:"var(--color-mid)"},
                ].map(s=>(
                  <div key={s.l} className="dash-metric-card">
                    <div style={{ fontSize:".65rem", textTransform:"uppercase", letterSpacing:".14em", fontWeight:700, color:"var(--color-text-muted)" }}>{s.l}</div>
                    <div style={{ fontFamily:"var(--font-display)", fontSize:"2.5rem", fontWeight:800, color:s.c, lineHeight:1 }}>{s.v}</div>
                    <div style={{ fontSize:".75rem", color:"var(--color-text-muted)", fontWeight:500 }}>{s.s}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem" }}>
                <DCard title="Servicios activos">
                  <div style={{ display:"flex", flexDirection:"column", gap:".625rem" }}>
                    {servicios.filter(s=>s.activo).map(s=>(
                      <div key={s.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:".625rem", borderBottom:"1px solid var(--color-silver)" }}>
                        <div>
                          <div style={{ fontWeight:600, fontSize:".875rem" }}>{s.nombre}</div>
                          <div style={{ fontSize:".75rem", color:"var(--color-text-muted)" }}>{s.duracion}</div>
                        </div>
                        <div style={{ fontWeight:700, color:"var(--color-primary)" }}>{s.precio}</div>
                      </div>
                    ))}
                  </div>
                </DCard>
                <DCard title="Stock bajo">
                  <div style={{ display:"flex", flexDirection:"column", gap:".625rem" }}>
                    {inv.filter(i=>i.stock<=i.min).map(i=>(
                      <div key={i.sku} style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                        <span style={{ fontSize:".875rem" }}>{i.nombre}</span>
                        <DBadge tone="warn">{i.stock}/{i.min}</DBadge>
                      </div>
                    ))}
                  </div>
                </DCard>
                <DCard title="Últimas solicitudes">
                  <div style={{ display:"flex", flexDirection:"column", gap:".75rem" }}>
                    {consultas.slice(0,3).map(c=>(
                      <div key={c.id} style={{ paddingBottom:".625rem", borderBottom:"1px solid var(--color-silver)" }}>
                        <div style={{ fontWeight:600, fontSize:".875rem" }}>{c.cliente}</div>
                        <div style={{ fontSize:".75rem", color:"var(--color-text-muted)", marginTop:".2rem" }}>{c.mensaje}</div>
                      </div>
                    ))}
                  </div>
                </DCard>
              </div>
            </div>
          )}

          {/* INVENTARIO */}
          {tab==="inv" && (
            <div className="dash-table">
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead><tr>{["SKU","Producto","Categoría","Stock","Mín","Estado"].map(c=><th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {inv.map(i=>(
                    <tr key={i.sku}>
                      <td><span style={{ fontFamily:"monospace", fontSize:".8125rem", background:"var(--color-ice)", padding:".2rem .5rem", borderRadius:".375rem" }}>{i.sku}</span></td>
                      <td style={{ fontWeight:600 }}>{i.nombre}</td>
                      <td style={{ color:"var(--color-text-muted)" }}>{i.categoria}</td>
                      <td style={{ fontWeight:700 }}>{i.stock}</td>
                      <td style={{ color:"var(--color-text-muted)" }}>{i.min}</td>
                      <td>{i.stock<=i.min?<DBadge tone="warn">Reabastecer</DBadge>:<DBadge tone="ok">OK</DBadge>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* SERVICIOS */}
          {tab==="servicios" && (
            <div className="dash-table">
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead><tr>{["ID","Servicio","Duración","Precio","Estado"].map(c=><th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {servicios.map(s=>(
                    <tr key={s.id}>
                      <td><span style={{ fontFamily:"monospace", fontSize:".8125rem" }}>{s.id}</span></td>
                      <td style={{ fontWeight:600 }}>{s.nombre}</td>
                      <td>{s.duracion}</td>
                      <td style={{ fontWeight:700, color:"var(--color-primary)" }}>{s.precio}</td>
                      <td>{s.activo?<DBadge tone="ok">Activo</DBadge>:<DBadge tone="muted">Pausado</DBadge>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* PRODUCTOS */}
          {tab==="productos" && (
            <div className="dash-table">
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead><tr>{["ID","Producto","Categoría","Precio","Stock"].map(c=><th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {productos.map(p=>(
                    <tr key={p.id}>
                      <td><span style={{ fontFamily:"monospace", fontSize:".8125rem" }}>{p.id}</span></td>
                      <td style={{ fontWeight:600 }}>{p.nombre}</td>
                      <td style={{ color:"var(--color-text-muted)" }}>{p.categoria}</td>
                      <td style={{ fontWeight:700, color:"var(--color-primary)" }}>{p.precio}</td>
                      <td>{p.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* INCIDENCIAS */}
          {tab==="incidencias" && (
            <div className="dash-table">
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead><tr>{["ID","Tipo","Descripción","Severidad","Estado"].map(c=><th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {incidencias.map(i=>(
                    <tr key={i.id}>
                      <td><span style={{ fontFamily:"monospace", fontSize:".8125rem" }}>{i.id}</span></td>
                      <td style={{ fontWeight:600 }}>{i.tipo}</td>
                      <td style={{ color:"var(--color-text-muted)" }}>{i.desc}</td>
                      <td><DBadge tone={i.sev==="Media"?"warn":"muted"}>{i.sev}</DBadge></td>
                      <td>{i.estado==="Resuelta"?<DBadge tone="ok">Resuelta</DBadge>:<DBadge tone="warn">Abierta</DBadge>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* CONSULTAS */}
          {tab==="consultas" && (
            <div className="dash-table">
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead><tr>{["Fecha","Cliente","Mensaje","Acción"].map(c=><th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {consultas.map(c=>(
                    <tr key={c.id}>
                      <td><span style={{ fontFamily:"monospace", fontSize:".8125rem", color:"var(--color-text-muted)" }}>{c.fecha}</span></td>
                      <td style={{ fontWeight:600 }}>{c.cliente}</td>
                      <td style={{ color:"var(--color-text-muted)" }}>{c.mensaje}</td>
                      <td><DBadge tone="info">Pendiente</DBadge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ESTADO */}
          {tab==="estado" && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.25rem" }}>
              <DCard title="Servicios del sistema">
                <div style={{ display:"flex", flexDirection:"column", gap:".5rem" }}>
                  {[
                    "Frontend (web pública)",
                    "API Intranet",
                    "Base de datos PostgreSQL",
                    "Notificaciones Lambda + SNS",
                  ].map(s=>(
                    <div key={s} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:".625rem 0", borderBottom:"1px solid var(--color-silver)" }}>
                      <span style={{ fontSize:".875rem" }}>{s}</span>
                      <DBadge tone="ok">● Operativo</DBadge>
                    </div>
                  ))}
                </div>
              </DCard>
              <DCard title="Observabilidad AWS">
                <p style={{ fontSize:".875rem", color:"var(--color-text-muted)", lineHeight:1.7 }}>
                  Los logs de la API y del frontend se envían al Log Group{" "}
                  <code style={{ background:"var(--color-ice)", padding:".1rem .4rem", borderRadius:".375rem", fontSize:".8125rem", color:"var(--color-mid)" }}>/doggiechic/intranet</code>{" "}
                  y <code style={{ background:"var(--color-ice)", padding:".1rem .4rem", borderRadius:".375rem", fontSize:".8125rem", color:"var(--color-mid)" }}>/doggiechic/web</code>{" "}
                  en <strong>AWS CloudWatch</strong>. Un filtro detecta eventos{" "}
                  <code style={{ background:"var(--color-ice)", padding:".1rem .4rem", borderRadius:".375rem" }}>ERROR</code>{" "}
                  e invoca <strong>AWS Lambda</strong> con notificación por SNS.
                </p>
              </DCard>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .desktop-sidebar { display:flex!important; }
        @media(max-width:768px){ .desktop-sidebar { display:none!important; } }
        .dash-table th { padding:.875rem 1.25rem; font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--color-text-muted); text-align:left; background:var(--color-ice); }
        .dash-table td { padding:.9375rem 1.25rem; font-size:.875rem; border-top:1px solid var(--color-silver); }
        .dash-table tr:hover td { background:var(--color-ice); }
      `}</style>
    </div>
  );
}

function Intranet() {
  const [auth, setAuth] = useState(false);
  const [err, setErr] = useState("");
  const [tab, setTab] = useState<TabKey>("dash");
  const inv = initialInv;

  if (!auth) return <Login onLogin={(u,p) => { if(u==="admin"&&p==="admin"){setAuth(true);setErr("");}else setErr("Credenciales inválidas"); }} err={err} />;
  return <Dashboard tab={tab} setTab={setTab} inv={inv} onLogout={()=>setAuth(false)} />;
}
