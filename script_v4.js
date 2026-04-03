/* ============================================
   CV Executivo — Raoni Rodrigues de Morais
   Script principal — v3
   ============================================ */

// ── Data ──────────────────────────────────────

/**
 * Timeline: work experiences (expandable) + education milestones (minimal, 1-line).
 * Dates aligned with LinkedIn profile.
 */
const timelineEntries = [
  {
    type: 'work',
    company: 'Mirow & Co.',
    role: 'Associate Partner',
    period: 'Ago/2018 – Presente',
    location: 'Rio de Janeiro',
    description: 'Consultoria estratégica com foco de atuação na resolução dos principais desafios da alta gestão de empresas líderes de seus segmentos.',
    positions: [
      { title: 'Associate Partner', period: 'Nov/2024 – Presente' },
      { title: 'Senior Expert', period: 'Jan/2024 – Out/2024' },
      { title: 'Engagement Manager', period: 'Jan/2021 – Dez/2023' },
      { title: 'Associate', period: 'Jan/2020 – Dez/2020' },
      { title: 'Fellow Associate', period: 'Ago/2018 – Dez/2019' }
    ],
    details: [
      'Liderança e execução de projetos de estratégia de crescimento, planejamento estratégico, eficiência operacional e inovação',
      'Estruturação de business cases, modelagem econômico-financeira e análise de mercado',
      'Facilitação de workshops estratégicos com diretorias e C-level',
      'Gestão de stakeholders e condução de processos de mudança organizacional',
      'Atuação em indústrias de base e infraestrutura, setores intensivos em capital e operações complexas'
    ]
  },
  {
    type: 'work',
    company: 'Instituto Brasileiro de Petróleo, Gás e Biocombustíveis (IBP)',
    role: 'Consultor da Secretaria Executiva',
    period: 'Abr/2018 – Jul/2018',
    location: 'Rio de Janeiro',
    description: 'Principal entidade representativa do setor de O&G no Brasil.',
    details: [
      'Coordenação de estudo estratégico sobre a relevância do setor de óleo e gás para a economia brasileira',
      'Articulação com stakeholders institucionais e setoriais',
      'Produção de análises e conteúdo de apoio à Secretaria Executiva do IBP'
    ]
  },
  {
    type: 'education',
    label: 'Mestrados — Universitat de Barcelona · UFRJ/COPPE',
    period: '2014 – 2017'
  },
  {
    type: 'work',
    company: 'Catavento Consultoria',
    role: 'Consultor · Sócio e Consultor',
    period: 'Jun/2015 – Ago/2016 · Jan/2018 – Abr/2018',
    location: 'Rio de Janeiro',
    description: 'Consultoria de gestão especializada em estratégia, com foco na sustentabilidade dos modelos de negócios e integração de tendências à estratégia corporativa.',
    positions: [
      { title: 'Consultor', period: 'Jan/2018 – Abr/2018' },
      { title: 'Sócio e Consultor', period: 'Jun/2015 – Ago/2016' }
    ],
    details: [
      'Análises de tendências e integração à estratégia corporativa de grandes empresas',
      'Desenvolvimento de ferramentas de gestão e facilitação de workshops com diretorias executivas',
      'Suporte estratégico a empresas dos setores de energia, óleo & gás, logística e financeiro',
      'Projetos focados em sustentabilidade dos modelos de negócios e visão de longo prazo'
    ]
  },
  {
    type: 'work',
    company: 'Consórcio Integrador Rio de Janeiro (CIRJ) — CH2M Hill e Odebrecht',
    role: 'Gerente de Projetos · Analista de Projetos',
    period: 'Ago/2012 – Mai/2015',
    location: 'Rio de Janeiro',
    description: 'Consórcio para integração dos projetos de infraestrutura das Olimpíadas Rio 2016, com monitoramento de obras de arenas esportivas, instalações temporárias e infraestrutura pública.',
    positions: [
      { title: 'Gerente de Projetos', period: 'Jan/2014 – Mai/2015' },
      { title: 'Analista de Projetos', period: 'Ago/2012 – Dez/2013' }
    ],
    details: [
      'Monitoramento e controle de carteira de projetos de R$ 5,7 bilhões',
      'Acompanhamento de arenas esportivas, instalações temporárias e infraestrutura pública',
      'Mapeamento de stakeholders e identificação de temas críticos',
      'Elaboração de relatórios executivos e apresentações periódicas ao Comitê Olímpico Internacional (COI)',
      'Priorização de riscos e coordenação entre múltiplas frentes de trabalho'
    ]
  },
  {
    type: 'work',
    company: 'Schlumberger Business Consulting',
    role: 'Analista de Negócios',
    period: 'Abr/2011 – Jun/2012',
    location: 'Rio de Janeiro',
    description: 'Consultoria estratégica global com foco na indústria de O&G.',
    details: [
      'Condução de projeto de transformação de custos em operação de O&G no Brasil',
      'Identificação de drivers de custo e priorização de oportunidades de redução',
      'Implementação de iniciativas de eficiência e acompanhamento de resultados',
      'Definição de mecanismos de gestão para desenvolvimento de liderança e competências gerenciais'
    ]
  },
  {
    type: 'education',
    label: 'Engenharia Civil — Instituto Militar de Engenharia (IME)',
    period: '2007 – 2011'
  }
];

/**
 * Projects — client names removed.
 * NPI project corrected from "Inovação" to "Inovação & ESG".
 */
const projects = [
  // ── Mirow & Co. ──
  { name: 'Governança Comercial', industry: 'Agronegócio & Fertilizantes', theme: 'Estratégia comercial', date: 'Jun/2018', description: 'Desenvolvimento de modelo de governança comercial para reduzir dispersão de preços e perdas financeiras.' },
  { name: 'Monetização de Gás na Região Norte', industry: 'Óleo & Gás', theme: 'Estratégia de crescimento & novos negócios', date: 'Jul/2019', description: 'Análise técnica e econômica para monetização de reservas de gás natural onshore.' },
  { name: 'Mobilidade Elétrica', industry: 'Energia & Utilidades', theme: 'Estratégia de crescimento & novos negócios', date: 'Mar/2020', description: 'Identificação de modelos de negócios para viabilizar a mobilidade elétrica no Brasil.' },
  { name: 'Planejamento Estratégico', industry: 'Óleo & Gás', theme: 'Planejamento estratégico', date: 'Jun/2020', description: 'Desenvolvimento de planejamento estratégico focado no mercado de gás natural.' },
  { name: 'Implementação do Open Banking no Brasil', industry: 'Financeiro', theme: 'PMO & Implementação', date: 'Out/2020', description: 'Coordenação de grupos de trabalho técnicos e gestão da estrutura administrativa para operação inicial.' },
  { name: 'Oportunidades de Crescimento', industry: 'Óleo & Gás', theme: 'Estratégia de crescimento & novos negócios', date: 'Dez/2021', description: 'Análise de contexto de mercado e identificação de oportunidades de investimento.' },
  { name: 'Estratégia de Crescimento 2026', industry: 'Sustentabilidade & Meio Ambiente', theme: 'Planejamento estratégico', date: 'Mar/2022', description: 'Diagnóstico interno e externo com roadmap de implementação para expansão no mercado de ativos ambientais.' },
  { name: 'Oportunidades em Supply Chain', industry: 'Química & Materiais', theme: 'Eficiência operacional', date: 'Jun/2022', description: 'Diagnóstico e estruturação de iniciativas em Supply Chain, com foco em governança, S&OP e gestão de estoques.' },
  { name: 'COA como Serviço', industry: 'Agronegócio & Fertilizantes', theme: 'Inovação & ESG', date: 'Ago/2022', description: 'Business case para oferta de serviços de Centro de Operações Agrícolas, incluindo estratégia de go-to-market.' },
  { name: 'Estratégia de Máquina de Papel (PM)', industry: 'Papel & Celulose', theme: 'Estratégia de crescimento & novos negócios', date: 'Dez/2022', description: 'Avaliação técnica e financeira de alternativas locacionais para nova máquina de papel.' },
  { name: 'Desenvolvimento de Novos Produtos (NPI)', industry: 'Agronegócio & Fertilizantes', theme: 'Inovação & ESG', date: 'Set/2023', description: 'Condução da fase de ideação para desenvolvimento de novos produtos, com análise de mercado e entrevistas com especialistas.' },
  { name: 'Mercado de Hidrogênio Verde', industry: 'Energia & Utilidades', theme: 'Estratégia de crescimento & novos negócios', date: 'Out/2023', description: 'Panorama do mercado global e local de hidrogênio verde, identificando oportunidades e gargalos.' },
  { name: 'Oportunidades em Gás Natural e GLP', industry: 'Óleo & Gás', theme: 'Estratégia de crescimento & novos negócios', date: 'Ago/2024', description: 'Avaliação de perspectivas e oportunidades nos mercados de gás natural e GLP.' },
  { name: 'Avaliação de Planta de E-metanol', industry: 'Energia & Utilidades', theme: 'Estratégia de crescimento & novos negócios', date: 'Out/2024', description: 'Elaboração de business case e estruturação financeira para planta de e-metanol.' },
  { name: 'Workshop de Estratégia Brasil 2024', industry: 'Óleo & Gás', theme: 'Planejamento estratégico', date: 'Nov/2024', description: 'Consolidação de resultados de workshop executivo para definição de plano estratégico.' },
  { name: 'Mercado de Químicos Líquidos e Petroquímicos', industry: 'Logística & Terminais', theme: 'Estratégia de crescimento & novos negócios', date: 'Nov/2024', description: 'Avaliação do mercado brasileiro de químicos líquidos, projetando demanda e oportunidades de infraestrutura.' },
  { name: 'Otimização de Custos de Gás Natural', industry: 'Óleo & Gás', theme: 'Eficiência operacional', date: 'Jan/2025', description: 'Diagnóstico de uso de gás natural em unidades fabris para identificação de oportunidades de redução de custo.' },
  { name: 'Rentabilização através de Ativos', industry: 'Energia & Utilidades', theme: 'Eficiência operacional', date: 'Abr/2025', description: 'Roadmap de iniciativas para otimizar a gestão de ativos, visando rentabilização da operação de transmissão.' },
  { name: 'Estratégia de Fibra Ótica', industry: 'Telecomunicações', theme: 'Planejamento estratégico', date: 'Jul/2025', description: 'Desenvolvimento de estratégia para escalar o negócio de fibra ótica, com modelo comercial e priorização de clientes.' },
  { name: 'Avaliação de Novos Negócios', industry: 'Energia & Utilidades', theme: 'Estratégia de crescimento & novos negócios', date: 'Set/2025', description: 'Identificação e priorização de novas avenidas de crescimento, incluindo data centers e baterias (BESS).' },
  { name: 'Radar de Tendências do Setor Elétrico', industry: 'Energia & Utilidades', theme: 'Inovação & ESG', date: 'Set/2025', description: 'Mapeamento de megatendências e tecnologias emergentes para o setor elétrico até 2040.' },
  { name: 'Competitividade do Gás Natural', industry: 'Óleo & Gás', theme: 'Estratégia comercial', date: 'Out/2025', description: 'Análise de market share e competitividade do gás natural face a GLP e biomassa.' },
  { name: 'Virtual Pipeline de Gás', industry: 'Óleo & Gás', theme: 'Estratégia de crescimento & novos negócios', date: 'Fev/2026', description: 'Avaliação estratégica para monetização de reservas de gás através de pipelines virtuais.' },
  { name: 'Interconexão Regional de Transmissão', industry: 'Energia & Utilidades', theme: 'Estratégia de crescimento & novos negócios', date: 'Fev/2026', description: 'Análise de viabilidade técnica e financeira para projetos de linhas de transmissão regionais.' },
  // ── Catavento ──
  { name: 'Critérios Socioambientais na Avaliação de Crédito', industry: 'Financeiro', theme: 'Inovação & ESG', date: 'Jun/2015', description: 'Implementação de critérios socioambientais na avaliação de crédito de instituição financeira.' },
  { name: 'Apoio à Área de Sustentabilidade', industry: 'Energia & Utilidades', theme: 'Inovação & ESG', date: 'Ago/2015', description: 'Suporte estratégico à área de sustentabilidade de empresa do setor elétrico.' },
  { name: 'Transição para Economia de Baixo Carbono', industry: 'Financeiro', theme: 'Inovação & ESG', date: 'Out/2015', description: 'Workshop de apoio ao planejamento estratégico sobre transição para uma economia de baixo carbono.' },
  { name: 'Evolução da Agenda de Sustentabilidade', industry: 'Óleo & Gás', theme: 'PMO & Implementação', date: 'Dez/2015', description: 'Apoio à implementação de iniciativas ESG em empresa de logística de O&G.' },
  { name: 'Cidades do Futuro', industry: 'Óleo & Gás', theme: 'Inovação & ESG', date: 'Fev/2016', description: 'Apoio à elaboração de conteúdo da publicação sobre tendências urbanas e energia.' },
  { name: 'Planejamento Estratégico', industry: 'Óleo & Gás', theme: 'Estratégia de crescimento & novos negócios', date: 'Abr/2016', description: 'Apoio à elaboração do planejamento estratégico de empresa do setor de O&G.' },
  { name: 'Acompanhamento de Desempenho', industry: 'Óleo & Gás', theme: 'Estratégia de crescimento & novos negócios', date: 'Mai/2016', description: 'Elaboração de ferramentas e metodologia de acompanhamento de performance operacional de longo prazo.' },
  // ── CIRJ ──
  { name: 'Integração de Projetos — Olimpíadas Rio 2016', industry: 'Esporte & Infraestrutura', theme: 'PMO & Implementação', date: 'Jan/2013', description: 'Integração e monitoramento dos projetos de infraestrutura dos Jogos Olímpicos Rio 2016.' },
  // ── SBC ──
  { name: 'Otimização de RH', industry: 'Óleo & Gás', theme: 'Eficiência operacional', date: 'Jun/2011', description: 'Projeto de otimização de recursos humanos em empresa de logística de O&G.' },
  { name: 'Cost Transformation', industry: 'Óleo & Gás', theme: 'Eficiência operacional', date: 'Jan/2012', description: 'Projeto de transformação de custos em operação brasileira de empresa de O&G.' }
];

const skills = [
  'Estratégia e Gestão', 'Setores Intensivos em Capital', 'Novos Negócios', 'Eficiência Operacional',
  'PMO e Implementação', 'Inovação e Tendências', 'Business Case',
  'Análise de Mercado', 'Modelagem Econômico-Financeira', 'Governança',
  'Stakeholder Management', 'Suprimentos'
];

// ── Utility Functions ─────────────────────────

function countByTheme() {
  const counts = {};
  projects.forEach(p => { counts[p.theme] = (counts[p.theme] || 0) + 1; });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function getIndustries() {
  return [...new Set(projects.map(p => p.industry))].sort();
}

const themeColors = {
  'Estratégia de crescimento & novos negócios': '#1a5276',
  'Planejamento estratégico': '#2980b9',
  'Eficiência operacional': '#148f77',
  'Inovação & ESG': '#1abc9c',
  'Estratégia comercial': '#2c3e50',
  'PMO & Implementação': '#5d6d7e'
};

// ── Render Functions ──────────────────────────

function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = timelineEntries.map((entry, i) => {
    if (entry.type === 'education') {
      // Minimal single-line node
      return `
        <div class="timeline-item education-node animate-on-scroll" data-index="${i}">
          <div class="timeline-dot"></div>
          <div class="timeline-header">
            <div class="timeline-header-left">
              <h3><i data-lucide="graduation-cap" class="icon-sm timeline-edu-icon"></i> ${entry.label} <span class="tl-meta-inline">${entry.period}</span></h3>
            </div>
          </div>
        </div>
      `;
    }
    // Work experience — expandable, with positions if available
    const positionsHtml = entry.positions ? `
      <div class="tl-positions">
        ${entry.positions.map(p => `<span class="tl-position"><strong>${p.title}</strong> · ${p.period}</span>`).join('')}
      </div>
    ` : '';
    return `
      <div class="timeline-item animate-on-scroll" data-index="${i}">
        <div class="timeline-dot"></div>
        <div class="timeline-header" role="button" tabindex="0" aria-expanded="false" aria-label="Expandir detalhes de ${entry.company}">
          <div class="timeline-header-left">
            <h3>${entry.company}</h3>
            <span class="tl-role">${entry.role}</span>
            <div class="tl-meta">
              <span><i data-lucide="calendar" class="icon-sm"></i> ${entry.period}</span>
              <span><i data-lucide="map-pin" class="icon-sm"></i> ${entry.location}</span>
            </div>
          </div>
          <i data-lucide="chevron-down" class="timeline-chevron icon-sm"></i>
        </div>
        <div class="timeline-body">
          <p>${entry.description}</p>
          ${positionsHtml}
          <ul>
            ${entry.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

function renderChart() {
  const container = document.getElementById('chart-container');
  const themeCounts = countByTheme();
  const maxCount = themeCounts[0][1];
  container.innerHTML = themeCounts.map(([theme, count]) => {
    const pct = (count / maxCount) * 100;
    const color = themeColors[theme] || '#1a5276';
    return `
      <div class="chart-row" data-theme="${theme}" role="button" tabindex="0" aria-label="${theme}: ${count} projetos">
        <span class="chart-label">${theme}</span>
        <div class="chart-bar-wrapper">
          <div class="chart-bar" style="background: ${color};" data-width="${pct}">
            <span>${count}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function animateChartBars() {
  document.querySelectorAll('.chart-bar').forEach(bar => {
    bar.style.width = bar.dataset.width + '%';
  });
}

function renderIndustryFilter() {
  const container = document.getElementById('industry-filter');
  const industries = getIndustries();
  container.innerHTML = `<button class="filter-tag active" data-industry="all">Todas</button>` +
    industries.map(ind => `<button class="filter-tag" data-industry="${ind}">${ind}</button>`).join('');
}

function renderProjects(theme, industry = 'all') {
  const container = document.getElementById('projects-list');
  let filtered = projects.filter(p => p.theme === theme);
  if (industry !== 'all') filtered = filtered.filter(p => p.industry === industry);
  filtered.sort((a, b) => parsePortugueseDate(b.date) - parsePortugueseDate(a.date));
  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--color-text-muted);padding:2rem;">Nenhum projeto encontrado para esta combinação de filtros.</p>';
    return;
  }
  container.innerHTML = filtered.map(p => `
    <div class="project-card">
      <h4>${p.name}</h4>
      <div class="project-meta">
        <span><i data-lucide="calendar" class="icon-sm"></i> ${p.date}</span>
        <span class="project-badge">${p.industry}</span>
      </div>
      <p>${p.description}</p>
    </div>
  `).join('');
  lucide.createIcons();
}

function parsePortugueseDate(dateStr) {
  const months = { 'Jan': 0, 'Fev': 1, 'Mar': 2, 'Abr': 3, 'Mai': 4, 'Jun': 5, 'Jul': 6, 'Ago': 7, 'Set': 8, 'Out': 9, 'Nov': 10, 'Dez': 11 };
  const parts = dateStr.split('/');
  return new Date(parseInt(parts[1]), months[parts[0]] || 0);
}

function renderSkills() {
  const container = document.getElementById('skills-cloud');
  container.innerHTML = skills.map(s => `<span class="skill-tag">${s}</span>`).join('');
}

// ── Interactions ──────────────────────────────

function setupTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.addEventListener('click', (e) => {
    const header = e.target.closest('.timeline-header');
    if (!header) return;
    const item = header.closest('.timeline-item');
    if (item.classList.contains('education-node')) return;
    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    header.setAttribute('aria-expanded', !isActive);
  });
  timeline.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const header = e.target.closest('.timeline-header');
      if (header) { e.preventDefault(); header.click(); }
    }
  });
  document.getElementById('btn-expand-all').addEventListener('click', () => {
    const items = document.querySelectorAll('.timeline-item:not(.education-node)');
    const allExpanded = [...items].every(i => i.classList.contains('active'));
    items.forEach(item => {
      item.classList.toggle('active', !allExpanded);
      item.querySelector('.timeline-header').setAttribute('aria-expanded', !allExpanded);
    });
    document.getElementById('btn-expand-all').textContent = allExpanded ? 'Expandir todos' : 'Recolher todos';
  });
}

let selectedTheme = null;
let selectedIndustry = 'all';

function setupChart() {
  const chartContainer = document.getElementById('chart-container');
  chartContainer.addEventListener('click', (e) => {
    const row = e.target.closest('.chart-row');
    if (!row) return;
    handleBarClick(row.dataset.theme);
  });
  chartContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const row = e.target.closest('.chart-row');
      if (row) { e.preventDefault(); handleBarClick(row.dataset.theme); }
    }
  });
  document.getElementById('industry-filter').addEventListener('click', (e) => {
    const tag = e.target.closest('.filter-tag');
    if (!tag) return;
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    selectedIndustry = tag.dataset.industry;
    if (selectedTheme) renderProjects(selectedTheme, selectedIndustry);
  });
}

function handleBarClick(theme) {
  const rows = document.querySelectorAll('.chart-row');
  if (selectedTheme === theme) {
    selectedTheme = null;
    rows.forEach(r => r.classList.remove('selected', 'dimmed'));
    document.getElementById('projects-list').innerHTML = '';
    return;
  }
  selectedTheme = theme;
  rows.forEach(r => {
    r.classList.toggle('selected', r.dataset.theme === theme);
    r.classList.toggle('dimmed', r.dataset.theme !== theme);
  });
  selectedIndustry = 'all';
  document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
  document.querySelector('.filter-tag[data-industry="all"]')?.classList.add('active');
  renderProjects(theme);
  document.getElementById('projects-list').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Navbar ────────────────────────────────────

function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    links.classList.toggle('open');
  });
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    });
  });
  const sections = document.querySelectorAll('section[id], header[id], footer[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-30% 0px -70% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ── Animations ────────────────────────────────

function setupScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}

function setupCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.target));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 1500, start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round((1 - Math.pow(1 - progress, 3)) * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function setupLanguageBars() {
  const fills = document.querySelectorAll('.lang-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.style.width = entry.target.dataset.level + '%'; observer.unobserve(entry.target); }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => observer.observe(f));
}

function setupChartAnimation() {
  const wrapper = document.querySelector('.chart-wrapper');
  if (!wrapper) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animateChartBars(); observer.unobserve(entry.target); } });
  }, { threshold: 0.2 });
  observer.observe(wrapper);
}

// ── Init ──────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderChart();
  renderIndustryFilter();
  renderSkills();
  lucide.createIcons();
  setupNavbar();
  setupTimeline();
  setupChart();
  setupScrollAnimations();
  setupCounters();
  setupLanguageBars();
  setupChartAnimation();
});
