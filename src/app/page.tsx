"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type IconName =
  | "arrow"
  | "book"
  | "check"
  | "chevron"
  | "circle"
  | "headphones"
  | "layers"
  | "menu"
  | "mic"
  | "pause"
  | "play"
  | "spark"
  | "upload"
  | "volume";

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    book: <><path d="M12 7v14" /><path d="M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4a3 3 0 0 0-3 3 3 3 0 0 0-3-3H5a2 2 0 0 1-2-2Z" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    chevron: <><path d="m6 9 6 6 6-6" /></>,
    circle: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8m-4-4h8" /></>,
    headphones: <><path d="M3 14v-3a9 9 0 0 1 18 0v3" /><path d="M5 14h2a2 2 0 0 1 2 2v3H7a4 4 0 0 1-4-4v-1Zm14 0h-2a2 2 0 0 0-2 2v3h2a4 4 0 0 0 4-4v-1Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    mic: <><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2m-7 9v3m-4 0h8" /></>,
    pause: <><path d="M9 5v14m6-14v14" /></>,
    play: <><path d="m8 5 12 7-12 7V5Z" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
    upload: <><path d="M12 16V4m-5 5 5-5 5 5" /><path d="M20 16.5v2A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-2" /></>,
    volume: <><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const features = [
  {
    number: "01",
    icon: "layers" as const,
    title: "Narrativas inteligentes",
    text: "Capítulos, narradores, personagens e diálogos são reconhecidos para preservar o ritmo e a estrutura da história.",
  },
  {
    number: "02",
    icon: "mic" as const,
    title: "Vozes personalizadas",
    text: "Escolha uma voz para cada personagem. A identidade de cada um acompanha a história do primeiro ao último capítulo.",
  },
  {
    number: "03",
    icon: "spark" as const,
    title: "Interpretação contextual",
    text: "No Premium, personalidade, contexto e emoção orientam uma interpretação mais expressiva, além das palavras.",
  },
];

const steps = [
  {
    number: "01",
    icon: "upload" as const,
    title: "Envie seu livro",
    text: "PDF, EPUB ou TXT. Sua história começa com um arquivo.",
  },
  {
    number: "02",
    icon: "layers" as const,
    title: "Analisamos a história",
    text: "Identificamos estrutura, narradores, personagens e diálogos.",
  },
  {
    number: "03",
    icon: "mic" as const,
    title: "Personalize a experiência",
    text: "Escolha as vozes e o nível de interpretação que você imagina.",
  },
  {
    number: "04",
    icon: "headphones" as const,
    title: "Ouça sua história",
    text: "Gere, acompanhe e aproveite seu audiolivro, capítulo a capítulo.",
  },
];

const plans = [
  {
    index: "01",
    name: "Essencial",
    description: "Uma voz, a história inteira. Do seu jeito.",
    features: [
      "Uma voz para todo o livro",
      "Narração natural",
      "Organização por capítulos",
      "Controles de reprodução",
    ],
  },
  {
    index: "02",
    name: "Multivozes",
    description: "Cada personagem com sua própria presença.",
    features: [
      "Vozes distintas para personagens",
      "Detecção de diálogos",
      "Identidade vocal consistente",
      "Alternância entre personagens",
    ],
    featured: true,
  },
  {
    index: "03",
    name: "Premium",
    description: "Uma interpretação que sente a história.",
    features: [
      "Tudo do Multivozes",
      "Personalidades vocais",
      "Interpretação emocional contextual",
      "Variações de entonação e ritmo",
      "Maior controle criativo",
    ],
  },
];

const faqs = [
  {
    question: "Quais formatos de arquivo são aceitos?",
    answer:
      "Você poderá enviar arquivos PDF, EPUB e TXT. A análise identifica o texto e a estrutura do documento antes de apresentar as opções de narração.",
  },
  {
    question: "A plataforma identifica automaticamente os personagens?",
    answer:
      "Sim. O Taler analisa a narrativa para sugerir narradores, personagens, capítulos e diálogos. Você poderá revisar essas sugestões antes de continuar.",
  },
  {
    question: "Posso escolher as vozes?",
    answer:
      "Sim. Você escolhe as vozes disponíveis para narradores e personagens e pode ouvir prévias antes de configurar seu projeto.",
  },
  {
    question: "Como funciona quando o narrador muda?",
    answer:
      "A análise identifica mudanças de perspectiva e diálogos para que você possa revisar quem está falando e definir a voz correspondente.",
  },
  {
    question: "Posso alterar uma voz depois de gerar o audiolivro?",
    answer:
      "As configurações poderão ser revistas antes da geração. Se quiser alterar algo depois, você poderá ajustar a seleção e conferir o impacto no orçamento antes de gerar novamente.",
  },
  {
    question: "Como o preço é calculado?",
    answer:
      "O orçamento considera o tamanho do documento, a qualidade escolhida, a quantidade de vozes e a complexidade da interpretação. Você verá o valor antes de iniciar a geração.",
  },
  {
    question: "Posso utilizar livros de minha autoria?",
    answer:
      "Sim. Você pode usar obras próprias ou documentos para os quais tenha autorização de uso. Certifique-se de possuir os direitos necessários para transformar o conteúdo em áudio.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#top" aria-label="Taler, voltar ao início">
      <span className="brand-word">taler<span className="brand-dot">.</span></span>
      {footer ? (
        <span className="brand-tagline">Stories, tailored to you.</span>
      ) : (
        <span className="brand-phonetic">/ˈteɪ.lɚ/</span>
      )}
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Ilustração abstrata de um livro que se transforma em ondas sonoras">
      <div className="art-glow" />
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <span className="art-label art-label-top"><span /> UMA HISTÓRIA, MUITAS VOZES</span>
      <span className="art-note art-note-left">capítulo um</span>
      <span className="art-note art-note-right">em cada palavra</span>
      <svg className="book-art" viewBox="0 0 520 390" role="img" aria-labelledby="book-art-title">
        <title id="book-art-title">Livro aberto irradiando ondas sonoras</title>
        <defs>
          <linearGradient id="pageLeft" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#e9ddca" />
            <stop offset="1" stopColor="#a697aa" />
          </linearGradient>
          <linearGradient id="pageRight" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#c3a9d8" />
            <stop offset="1" stopColor="#75607f" />
          </linearGradient>
          <linearGradient id="sound" x1="0" x2="1">
            <stop offset="0" stopColor="#b9a2c9" stopOpacity=".3" />
            <stop offset="1" stopColor="#c6a9dc" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <ellipse cx="267" cy="327" rx="164" ry="22" fill="#050406" opacity=".55" />
        <path d="M88 128c54-21 110-12 168 20v156c-58-32-114-41-168-20V128Z" fill="#251e26" stroke="#dac8c9" strokeOpacity=".47" strokeWidth="1.5" />
        <path d="M95 134c49-15 101-5 154 23v137c-53-27-105-37-154-21V134Z" fill="url(#pageLeft)" />
        <path d="M256 157c59-34 119-44 177-29v156c-58-14-118-5-177 29V157Z" fill="#211b24" stroke="#d6bfd9" strokeOpacity=".55" strokeWidth="1.5" />
        <path d="M263 160c55-30 111-40 163-28v137c-52-12-108-2-163 28V160Z" fill="url(#pageRight)" />
        <path d="M256 149v161" stroke="#443342" strokeWidth="5" />
        <path d="M111 161c34-7 73 0 117 18M111 176c31-6 69 1 105 15M111 191c26-3 55 2 84 11M111 222c31-6 64 1 96 13M278 182c39-19 79-28 119-26M278 198c36-17 73-25 108-25M278 229c35-14 70-21 104-21" fill="none" stroke="#6c5968" strokeWidth="2" strokeLinecap="round" opacity=".55" />
        <path d="M300 139c16-34 31-37 45-2 15 38 29 32 43-2 14-34 30-29 44 6M322 126c15-30 27-29 39 5 11 31 22 27 33-1 12-29 22-27 34 1M343 116c11-22 20-21 29 4 9 23 16 22 25-1 8-20 16-21 25-5" fill="none" stroke="url(#sound)" strokeWidth="2.3" strokeLinecap="round" filter="url(#softGlow)" />
        <circle cx="425" cy="102" r="3" fill="#e1c4ef" />
        <circle cx="298" cy="103" r="2" fill="#e1c4ef" />
        <path d="M214 105c-11-18-8-31 6-38 15-7 27 1 24 14-3 12-18 17-30 24Z" fill="#d2b8a0" opacity=".9" />
        <path d="M216 102c-2-13 3-23 13-29" fill="none" stroke="#f4e3d3" strokeWidth="1.5" />
      </svg>
      <div className="art-voice voice-one"><span className="voice-avatar">N</span><span><b>narrador</b><small>calmo · envolvente</small></span><i /></div>
      <div className="art-voice voice-two"><span className="voice-avatar avatar-lilac">L</span><span><b>lena</b><small>curiosa · luminosa</small></span><i /></div>
      <div className="art-voice voice-three"><span className="voice-avatar avatar-copper">M</span><span><b>marcos</b><small>grave · sereno</small></span><i /></div>
      <span className="art-label art-label-bottom"><span /> A MESMA HISTÓRIA. OUTRA DIMENSÃO.</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" size={22} />
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? " nav-open" : ""}`} aria-label="Navegação principal">
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#recursos" onClick={closeMenu}>Recursos</a>
            <a href="#planos" onClick={closeMenu}>Planos</a>
            <a className="button button-small button-light nav-cta" href="#orcamento" onClick={closeMenu}>Começar agora <Icon name="arrow" size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> UM NOVO JEITO DE OUVIR</div>
          <h1>Toda história merece <em>uma voz própria.</em></h1>
          <p className="hero-description">
            Transforme seus livros em experiências de áudio únicas. O Taler interpreta narrativas, identifica personagens e cria vozes que dão vida a cada história.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#orcamento">Criar meu audiolivro <Icon name="arrow" size={17} /></a>
            <a className="text-link" href="#como-funciona">Conhecer a plataforma <span>↓</span></a>
          </div>
          <div className="hero-caption"><span className="caption-rule" /> Uma experiência narrativa, feita sob medida.</div>
        </div>
        <HeroArtwork />
        <div className="hero-bottom"><span>01 — UMA NOVA PERSPECTIVA</span><span>FEITO PARA HISTÓRIAS QUE FICAM</span></div>
      </section>

      <section className="intro-strip" aria-label="Diferencial Taler">
        <div className="section-shell intro-inner">
          <span className="intro-mark"><Icon name="spark" size={20} /></span>
          <p>Não é apenas ler em voz alta.<br /><strong>É interpretar uma história.</strong></p>
          <span className="intro-side-note">A arte de contar,<br />reinventada para ouvir.</span>
        </div>
      </section>

      <section className="section-shell section-block" id="recursos">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> O DIFERENCIAL</div>
            <h2>Uma narrativa que<br /><em>entende a nuance.</em></h2>
          </div>
          <p className="section-lead">Uma história não é uma sequência de palavras. É feita de vozes, intenções e momentos. O Taler escuta tudo isso.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="card-topline"><span>{feature.number} / 03</span><Icon name={feature.icon} size={21} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="feature-decoration" aria-hidden="true">✳</span>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="como-funciona">
        <div className="section-shell section-block">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> COMO FUNCIONA</div>
              <h2>Do seu livro a uma experiência<br /><em>feita sob medida.</em></h2>
            </div>
            <p className="section-lead">Você traz a história. A gente ajuda a encontrar a melhor forma de contá-la.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step.number}>
                <div className="step-icon"><Icon name={step.icon} size={22} /><span>{step.number}</span></div>
                {index < steps.length - 1 && <div className="step-connector" aria-hidden="true" />}
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="format-note"><Icon name="book" size={17} /><span>PDF, EPUB e TXT</span><i /> Seus arquivos permanecem seus.</div>
        </div>
      </section>

      <section className="section-shell section-block demo-section">
        <div className="section-heading demo-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> OUÇA A DIFERENÇA</div>
            <h2>Uma história.<br /><em>Diferentes vozes.</em></h2>
          </div>
          <p className="section-lead">Uma prévia fictícia para mostrar como cada personagem pode ganhar uma presença própria.</p>
        </div>
        <div className="demo-card">
          <div className="demo-story">
            <div className="demo-story-meta"><span>PRÉVIA DEMONSTRATIVA</span><span>00:18</span></div>
            <div className="demo-chapter">O JARDIM DEPOIS DA CHUVA <span>— TRECHO FICTÍCIO</span></div>
            <div className="dialogue dialogue-narrator"><span className="speaker">NARRADOR <i /></span><p>A chuva havia parado, mas as folhas ainda guardavam pequenos mundos de água.</p></div>
            <div className="dialogue dialogue-lena"><span className="speaker">LENA <i /></span><p>“Você ouviu isso?”, perguntou, sem tirar os olhos do jardim.</p></div>
            <div className="dialogue dialogue-marcos"><span className="speaker">MARCOS <i /></span><p>“Só o silêncio”, ele disse. “Às vezes, ele conta mais.”</p></div>
          </div>
          <div className="demo-player">
            <div className="player-person"><span className="person-initial">N</span><span><small>AGORA NARRA</small><strong>{isPlaying ? "Narrador · trecho em reprodução" : "Narrador · voz neutra e envolvente"}</strong></span></div>
            <div className={`waveform${isPlaying ? " waveform-playing" : ""}`} aria-label="Visualização de onda sonora demonstrativa">
              {Array.from({ length: 48 }, (_, index) => <i key={index} style={{ "--bar-height": `${18 + ((index * 17 + 11) % 34)}px` } as CSSProperties} />)}
            </div>
            <div className="player-controls">
              <span>00:07</span>
              <button
                type="button"
                className="play-button"
                aria-label={isPlaying ? "Pausar prévia demonstrativa" : "Reproduzir prévia demonstrativa"}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Icon name={isPlaying ? "pause" : "play"} size={19} />
              </button>
              <span>00:18</span>
              <Icon name="volume" size={19} />
            </div>
          </div>
        </div>
        <p className="demo-disclaimer"><span /> Esta é uma demonstração visual. Nenhum áudio real está sendo reproduzido.</p>
      </section>

      <section className="plans-section" id="planos">
        <div className="section-shell section-block">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> MODALIDADES</div>
              <h2>Escolha como sua história<br /><em>será contada.</em></h2>
            </div>
            <p className="section-lead">Cada livro é único. Seu orçamento também — sem preços fixos ou surpresas.</p>
          </div>
          <div className="plans-grid">
            {plans.map((plan) => (
              <article className={`plan-card${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
                <div className="plan-top"><span>MODALIDADE {plan.index}</span>{plan.featured && <span className="plan-badge">MAIS ESCOLHIDO</span>}</div>
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">Sob medida<span> orçamento personalizado</span></div>
                <div className="plan-divider" />
                <ul>
                  {plan.features.map((feature) => <li key={feature}><Icon name="check" size={15} />{feature}</li>)}
                </ul>
                <a className={`button ${plan.featured ? "button-primary" : "button-outline"}`} href="#orcamento">Explorar {plan.name} <Icon name="arrow" size={16} /></a>
              </article>
            ))}
          </div>
          <div className="plan-footnote"><Icon name="circle" size={17} /><span>O valor é calculado conforme tamanho do documento, qualidade, quantidade de vozes e complexidade da interpretação.</span></div>
        </div>
      </section>

      <section className="section-shell section-block pricing-section" id="orcamento">
        <div className="pricing-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PREÇO JUSTO, DO SEU JEITO</div>
          <h2>Você paga pelo que<br /><em>realmente produz.</em></h2>
          <p>Cada livro tem seu próprio ritmo. Analisamos seu documento para montar um orçamento que leva em conta o que a sua história precisa — nem mais, nem menos.</p>
          <a className="button button-primary" href="mailto:oi@taler.audio?subject=Quero%20calcular%20meu%20audiolivro">Calcular o valor do meu audiolivro <Icon name="arrow" size={17} /></a>
          <div className="pricing-reassurance"><Icon name="check" size={16} /> Você revisa tudo antes de começar.</div>
        </div>
        <div className="quote-flow" aria-label="Etapas do orçamento personalizado">
          {[
            ["01", "Upload do livro", "Seu arquivo, sua história"],
            ["02", "Análise automática", "Estrutura e personagens"],
            ["03", "Configuração", "Vozes e interpretação"],
            ["04", "Orçamento personalizado", "Tudo transparente, antes de gerar"],
          ].map(([number, title, caption], index) => (
            <div className="quote-step" key={number}>
              <div className="quote-number">{number}</div>
              <div className="quote-step-copy"><strong>{title}</strong><span>{caption}</span></div>
              {index < 3 && <div className="quote-line" aria-hidden="true" />}
            </div>
          ))}
          <div className="quote-review"><span className="review-check"><Icon name="check" size={17} /></span><span><strong>Você decide quando está pronto.</strong><small>Revise a distribuição de vozes e as configurações antes de iniciar a geração.</small></span></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-shell section-block faq-layout">
          <div className="faq-intro">
            <div className="eyebrow"><span className="eyebrow-line" /> PERGUNTAS FREQUENTES</div>
            <h2>Boas histórias<br />começam com<br /><em>boas perguntas.</em></h2>
            <a className="text-link" href="mailto:oi@taler.audio">Ainda tem dúvidas? Fale com a gente <Icon name="arrow" size={15} /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}<Icon name="chevron" size={18} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-orb" aria-hidden="true" />
        <div className="section-shell closing-inner">
          <div className="eyebrow"><span className="eyebrow-line" /> A SUA HISTÓRIA, EM OUTRA DIMENSÃO</div>
          <h2>Sua próxima história<br />merece ser <em>ouvida.</em></h2>
          <p>Envie seu livro e descubra como ele pode ganhar uma nova dimensão.</p>
          <a className="button button-light" href="#orcamento">Começar agora <Icon name="arrow" size={17} /></a>
          <span className="closing-note">Stories, tailored to you.</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <Brand footer />
          <nav className="footer-links" aria-label="Links institucionais">
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#planos">Planos</a>
            <a href="mailto:oi@taler.audio">Contato</a>
          </nav>
          <nav className="footer-legal" aria-label="Links legais">
            <a href="mailto:oi@taler.audio?subject=Termos%20de%20uso">Termos de uso</a>
            <a href="mailto:oi@taler.audio?subject=Pol%C3%ADtica%20de%20privacidade">Privacidade</a>
          </nav>
          <div className="footer-bottom">
            <span>© 2025 Taler. Todos os direitos reservados.</span>
            <span>Feito para histórias que merecem ser ouvidas.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
