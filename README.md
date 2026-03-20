# 🚀 Open-Trafego Landing Pages

**20 landing pages modernas + 110 prompts + sistema de pesquisa automática**

🔗 **Demo:** https://open-trafego-lps.vercel.app

---

## 📦 O que tem aqui

### 🎨 **20 Landing Pages Completas**
- Efeitos 3D avançados (perspective, translateZ, rotate, scale, morph)
- Componentes 21st.dev (chat, terminal, slider, observability)
- Tecnologias: HTML5, Tailwind CSS, GSAP 3.12.2, CSS3
- Dark mode neon (ciano #00F5D4, roxo #7B2FBE, índigo #6366f1)
- 100% estático, zero build, deploy instantâneo no Vercel

### 📚 **Prompt Library (110 exemplos)**
- 11 categorias: Landpages, Formulários, CTAs, Heros, Features, Depoimentos, Pricing, Analytics, Testimonials, FAQ, Navigation
- Cada prompt com descrição, tech stack e **botão "copiar"**
- Prontos para usar em qualquer projeto

### 🤖 **Research Agent (Auto-Learning)**
- Roda diariamente automaticamente
- Coleta tendências de design, performance, SEO
- Gera relatórios em `research/` (JSON + Markdown)
- integrado com OpenClaw Scout

### 🛠️ **Skills OpenClaw (8 custom + 3 community)**
- `landing-craft` — Gera LPs completas
- `copy-master` — Copywriter AIDA/PAS
- `effect-studio` — Biblioteca de efeitos
- `seo-optimizer` — SEO on-page
- `conversion-analyzer` — Análise CRO
- `component-studio` — Componentes UI
- `webhook-manager` — Webhooks externos
- `ui-components` — Componentes 21st.dev
- ClawHub: `landing-page-generator`, `landing-page-auditor`, `landing-page-optimizer`

---

## 🗂️ Estrutura do Projeto

```
open-trafego-lps/
├── index.html                    # Menu principal (20 LPs)
├── lp1.html - lp20.html         # Landing pages
├── prompts/                      # Prompt Library (110 prompts)
│   ├── index.html               # Interface de navegação
│   ├── landpages/
│   ├── formularios/
│   ├── ctas/
│   ├── heros/
│   ├── features/
│   ├── depoimentos/
│   ├── pricing/
│   ├── analytics/
│   ├── testimonials/
│   ├── faq/
│   └── navigation/
├── research-agent.cjs           # Agente de pesquisa diário
├── openclaw-scout.cjs          # Scout de tendências
├── shared/
│   └── performance-optimizer.js # Otimizações de performance
├── admin/
│   └── metrics.html            # Dashboard de métricas
└── .github/
    └── workflows/
        └── deploy.yml          # CI/CD automático
```

---

## 🚀 Como Usar

### Ver as landing pages
Acesse: https://open-trafego-lps.vercel.app
- Clique em qualquer card para ver a LP
- Todas as 20 páginas estão funcionais

### Usar a Prompt Library
1. Abra: https://open-trafego-lps.vercel.app/prompts/
2. Selecione uma categoria (Landpages, CTAs, etc.)
3. Clique em **"📋 Copiar Prompt"** em qualquer card
4. Cole no ChatGPT/Claude/Codex para gerar o componente

### Rodar Research Agent (auto-learning)
```bash
cd open-trafego-lps
node research-agent.cjs
```
- Gera relatório em `research/`
- Agende no Task Scheduler (Windows) ou crontab (Linux)

### Rodar OpenClaw Scout (tendências)
```bash
node openclaw-scout.cjs
```
- Verifica skills trending no ClawHub
- Monitora commits do OpenClaw core
- Gera relatório em `scout-reports/`

---

## 🎯 Categorias de LPs

### Grupo 1 — Efeitos Diversos (lp1-lp5)
- Automação Total (Parallax + Mesh Gradient)
- Simplicidade (Video BG + Glassmorphism)
- Data-Driven (Chart.js + Neural Viz)
- Meta + Google (3D Tilt + Magnetic)
- Agência & Scale (WebGL + Morphing)

### Grupo 2 — Scroll 3D Effects (lp6-lp10)
- Perspective Layers (camadas 3D)
- Z-Axis Text (texto saindo da tela)
- Scale 3D (zoom dinâmico)
- Rotate Layers (camadas rotacionando)
- Morph Parallax (formas + parallax)

### Grupo 3 — Components 21st.dev (lp11-lp15)
- Dashboard Preview (3D panel + metrics)
- Spend Limit Control (slider + cards)
- Terminal Demo (commands animados)
- Observability Live (real-time charts)
- AI Chat Assistant (floating bubble)

### Grupo 4 — Advanced Mix (lp16-lp20)
- Agent Cards Z-Depth (profundidade)
- Live Status Rotate (badges + rotate)
- Components Showcase (mini versions)
- Advanced Morph (tilt + particles)
- Interactive Demo (tudo combinado)

---

## 🔧 Scripts Úteis

```bash
# Gerar todas as LPs a partir de prompts (futuro)
npx prompt-engine generate --all

# Rodar pesquisa diária
node research-agent.cjs

# Ver tendências OpenClaw
node openclaw-scout.cjs

# Deploy manual (se necessário)
vercel --prod --force

# Ver métricas (dashboard local)
open admin/metrics.html
```

---

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Mobile-first:** Fully responsive

Otimizações implementadas:
- GPU acceleration (transform3d, will-change)
- Lazy loading de imagens
- Preload hints para fontes/críticos
- Code splitting (se usar build)
- CDN assets (Tailwind, GSAP)

---

## 🎨 Design System

### Cores
```css
--neon: #00F5D4     /* Ciano principal */
--purple: #7B2FBE   /* Roxo secundário */
--indigo: #6366f1   /* Índigo (21st.dev) */
--dark: #0A0A0F     /* Fundo escuro */
--surface: #15151F  /* Superfície */
```

### Fontes
- **Inter** — Body text (400, 600, 800)
- **Orbitron** — Headlines (400, 700, 900)
- **JetBrains Mono** — Code/terminal

### Espaçamento
- Base: 4px grid
- Container: 1200px max
- Padding: 20px mobile, 40px desktop

---

## 🤝 Contribuindo

1. **Novas LPs:** Crie em `prompts/` primeiro, depois gere
2. **Melhorias:** Execute `research-agent.cjs` para insights
3. **Deploy:** Push no GitHub → CI/CD automático

---

## 📄 Licença

MIT — Livre para usar, modificar, redistribuir.

---

## 🙌 Créditos

- **Design:** Open-Trafego Team
- **Estrutura:** Clawdiao (OpenClaw)
- **Inspiração:** 21st.dev, modern UI trends
- **Tech:** Tailwind, GSAP, Vercel

---

**Ready to launch?** 🚀 https://open-trafego-lps.vercel.app
