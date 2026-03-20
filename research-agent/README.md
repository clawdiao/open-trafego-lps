# Research Agent — Coleta Automática de Tendências

## O que faz

Pesquisa automaticamente tópicos relevantes para o time de landing pages e marketing, gerando relatórios diários com:

- **Tendências** do setor (design, copy, performance)
- **Insights** acionáveis para nosso trabalho
- **Action items** para implementação
- **Resources** (links técnicas, docs)

## Como funciona

- Roda **1x por dia** (agendado no Task Scheduler/cron)
- Seleciona tópico baseado no dia da semana (rodízio de 10 temas)
- Gera relatório em JSON + Markdown
- Salva em `research/` com data no nome
- Append em `research-log.json` para histórico

## Tópicos de Pesquisa

1. Landing page design trends 2025
2. GSAP ScrollTrigger best practices
3. Conversion rate optimization techniques
4. Tailwind CSS components 2025
5. 3D web effects Three.js examples
6. AI generated copy for landing pages
7. Web Vitals performance optimization
8. Mobile first landing page patterns
9. Dark mode neon UI inspiration
10. Vercel deployment optimization

## Como usar

### Executar manualmente (teste)

```bash
cd open-trafego-lps
node research-agent.js
```

### Agendar automático (Windows Task Scheduler)

1. Abra Task Scheduler
2. Criar Basic Task → nome: "OpenTrafego Research Agent"
3. Trigger: Daily, 8:00 AM
4. Action: Start program
   - Program: `node`
   - Arguments: `C:\Users\Novo usuário\.openclaw\workspace-clawdiao\open-trafego-lps\research-agent.js`
   - Start in: `C:\Users\Novo usuário\.openclaw\workspace-clawdiao\open-trafego-lps`
5. Finish

### Agendar automático (Linux/macOS crontab)

```bash
0 8 * * * cd /caminho/open-trafego-lps && node research-agent.js
```

## Output

```
research/
├── 2025-03-20-landing-page-design-trends-2025.json
├── 2025-03-20-summary.md        ← para o time ler
├── research-log.json            ← histórico execuções
└── (arquivos diários...)
```

## Customização

### Adicionar novos tópicos

Edite `TOPICS` array no início do script:

```js
const TOPICS = [
  'seu novo tópico aqui',
  // ...
];
```

### Alterar horário

Configure no Task Scheduler / crontab.

## Integração com Skills

O research agent pode alimentar as skills:

- `landing-craft` — novas ideias de templates
- `effect-studio` — descobrir novos efeitos
- `copy-master` — tendências de copy
- `conversion-analyzer` — novas heurísticas

Basta ler os arquivos `research/*.json` e extrair insights.

---

**Objetivo:** Manter o time sempre atualizado com o que há de mais moderno em landing pages e UI/UX, sem esforço manual.

🚀 *Automate the learning!*
