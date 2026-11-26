export type Locale = 'pt-BR' | 'en'

export type IconName =
  | 'arrow'
  | 'book'
  | 'check'
  | 'chevron'
  | 'circle'
  | 'headphones'
  | 'layers'
  | 'menu'
  | 'mic'
  | 'pause'
  | 'play'
  | 'spark'
  | 'upload'
  | 'volume'

const portuguese = {
  metadata: {
    title: 'Taler — histórias feitas sob medida.',
    description:
      'Conheça o conceito Taler: audiolivros com vozes por personagem e narração guiada pelo contexto.',
  },
  brand: {
    pronunciationHint: "Como 'tailor' em inglês",
    homeLabel: 'Taler, voltar ao início',
    tagline: 'Histórias feitas sob medida.',
  },
  header: {
    navLabel: 'Navegação principal',
    howItWorks: 'Como funciona',
    features: 'Recursos',
    plans: 'Planos',
    start: 'Conhecer a proposta',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    languageAction: 'Mudar idioma para inglês',
  },
  hero: {
    eyebrow: 'LIVROS, NARRADOS COM CONTEXTO',
    title: 'Toda história merece',
    titleEmphasis: 'uma voz própria.',
    description:
      'O Taler é um conceito para transformar livros em audiolivros com vozes distintas para narradores e personagens. A proposta também inclui interpretação contextual e ambientação sonora.',
    createAudiobook: 'Ver como seria o orçamento',
    explore: 'Ver como funcionaria',
    artworkLabel:
      'Ilustração abstrata de um livro que se transforma em ondas sonoras',
    artworkTitle: 'Livro aberto irradiando ondas sonoras',
    artVoiceNarrator: 'narrador',
    artVoiceNarratorTone: 'calmo · cadenciado',
    artVoiceLena: 'lena',
    artVoiceLenaTone: 'curiosa · luminosa',
    artVoiceMarcos: 'marcos',
    artVoiceMarcosTone: 'grave · sereno',
  },
  intro: {
    ariaLabel: 'O diferencial Taler',
    firstLine: 'A narração também interpreta.',
    emphasis: 'O contexto orienta a voz.',
  },
  features: {
    title: 'O texto orienta',
    titleEmphasis: 'quem fala e quando.',
    lead:
      'A proposta organiza capítulos e falas para definir quando a narração muda de voz.',
    cards: [
      {
        number: '01',
        title: 'Estrutura e leitura sincronizada',
        text: 'A proposta prevê organizar capítulos e sincronizar o destaque do texto com a narração.',
      },
      {
        number: '02',
        title: 'Uma voz por personagem',
        text: 'Personagens recorrentes manteriam a mesma voz entre capítulos; a distribuição poderia ser revisada antes da geração.',
      },
      {
        number: '03',
        title: 'Interpretação contextual',
        text: 'A proposta Premium considera o contexto e a emoção da cena para definir a entonação e o ritmo da narração.',
      },
    ],
  },
  process: {
    eyebrow: 'FLUXO PREVISTO',
    title: 'Como o livro vira',
    titleEmphasis: 'um audiolivro.',
    lead:
      'Estas etapas descrevem uma experiência planejada; upload e geração de áudio ainda não estão disponíveis.',
    steps: [
      {
        number: '1',
        icon: 'upload' as IconName,
        title: 'Envie seu livro',
        text: 'Envie um arquivo PDF, EPUB ou TXT.',
      },
      {
        number: '2',
        icon: 'layers' as IconName,
        title: 'Analisamos a história',
        text: 'A análise prevista identifica capítulos, narradores, personagens e diálogos.',
      },
      {
        number: '3',
        icon: 'mic' as IconName,
        title: 'Defina as vozes',
        text: 'Defina uma voz para cada personagem e escolha o grau de interpretação.',
      },
      {
        number: '4',
        icon: 'headphones' as IconName,
        title: 'Ouça sua história',
        text: 'O audiolivro seria organizado por capítulos para você acompanhar a narração.',
      },
    ],
    formats: 'PDF, EPUB e TXT',
    privacyNote: 'O suporte a esses formatos está previsto no conceito.',
  },
  demo: {
    eyebrow: 'TRECHO DEMONSTRATIVO',
    title: 'Três vozes',
    titleEmphasis: 'na mesma cena.',
    lead:
      'Trecho fictício com narrador e dois personagens. A interface mostra como as falas poderiam ser atribuídas a vozes diferentes.',
    preview: 'PRÉVIA DEMONSTRATIVA',
    chapter: 'O JARDIM DEPOIS DA CHUVA',
    fictionLabel: '— TRECHO FICTÍCIO',
    narrator: 'NARRADOR',
    narratorLine:
      'A chuva parou. Nas folhas, a água ainda tremia.',
    lena: 'LENA',
    lenaLine:
      '“Você ouviu?” Lena não tirava os olhos do jardim.',
    marcos: 'MARCOS',
    marcosLine: '“Só o silêncio”, disse Marcos. “Às vezes, basta.”',
    nowNarrating: 'AGORA NARRA',
    narratorVoice: 'Narrador · voz neutra',
    playing: 'Animação demonstrativa',
    waveformLabel: 'Visualização demonstrativa de onda sonora',
    play: 'Iniciar animação demonstrativa',
    pause: 'Pausar animação demonstrativa',
    disclaimer:
      'Esta prévia não reproduz áudio. O botão anima apenas a interface.',
  },
  plans: {
    title: 'Três opções',
    titleEmphasis: 'de narração.',
    lead:
      'A proposta organiza os recursos planejados em três modalidades: Essencial, Multivozes e Premium.',
    price: 'Sob medida',
    priceNote: 'orçamento por projeto',
    choose: 'Explorar',
    items: [
      {
        name: 'Essencial',
        description: 'Uma voz ao longo do livro, com organização por capítulos.',
        features: [
          'Uma voz para todo o livro',
          'Narração natural',
          'Organização por capítulos',
          'Controles de reprodução',
        ],
      },
      {
        name: 'Multivozes',
        description: 'Para narrativas com diferentes personagens e diálogos.',
        features: [
          'Vozes distintas para personagens',
          'Detecção de diálogos',
          'Identidade vocal consistente',
          'Alternância entre personagens',
        ],
      },
      {
        name: 'Premium',
        description: 'Narração, interpretação e ambientação ajustadas à cena.',
        features: [
          'Tudo do Multivozes',
          'Perfil vocal para cada personagem',
          'Interpretação contextual com emoção',
          'Ajustes de entonação e ritmo',
          'Trilha sonora e efeitos gerados por IA',
          'Mudanças musicais alinhadas à narrativa',
          'Volumes independentes para voz, música e efeitos',
        ],
      },
    ],
    priceDisclaimer:
      'Sem tabela fixa: cada orçamento será calculado por projeto.',
  },
  soundscape: {
    eyebrow: 'RECURSO PLANEJADO PARA O PREMIUM',
    title: 'O som também conta',
    titleEmphasis: 'a história.',
    lead:
      'A proposta Premium é gerar música e efeitos com base no contexto de cada cena, acompanhando as mudanças da narrativa.',
    features: [
      {
        title: 'Música guiada pela cena',
        text: 'A música consideraria o gênero, o cenário e o clima da cena. As transições acompanhariam mudanças na narrativa, da tensão à calmaria.',
      },
      {
        title: 'Efeitos no momento certo',
        text: 'Chuva, passos, portas, vento ou multidões seriam inseridos conforme os acontecimentos. Música e efeitos poderiam ser usados juntos ou separados.',
      },
      {
        title: 'Volumes separados',
        text: 'A proposta prevê controles independentes para narração, música e efeitos, além da opção de desligar cada camada sonora.',
      },
    ],
    visualLabel:
      'Interface conceitual de áudio planejada: cena de suspense, narração, trilha sonora e efeitos com níveis de volume independentes.',
    scene: 'O JARDIM DEPOIS DA CHUVA',
    chapter: 'CAPÍTULO 04',
    sceneTitle: 'Passos no',
    sceneTitleEmphasis: 'jardim molhado.',
    tracks: [
      ['Narração', 'VOZ · LENA', 'mix-track-voice'],
      ['Trilha sonora', 'SUSPENSE · CORDAS', 'mix-track-music'],
      ['Efeitos', 'CHUVA · PASSOS', 'mix-track-effects'],
    ],
    plannedForPremium: 'PLANEJADA PARA O PREMIUM',
    illustrativeControls: 'CONTROLES ILUSTRATIVOS · NÃO FUNCIONAIS',
  },
  pricing: {
    eyebrow: 'ORÇAMENTO POR LIVRO',
    title: 'O valor depende',
    titleEmphasis: 'do que você escolher.',
    description:
      'Extensão do livro, qualidade do áudio, número de vozes e grau de interpretação entram no cálculo. O orçamento será apresentado antes da geração.',
    calculate: 'Entenda como seria o orçamento',
    reassurance: 'A geração só começa após sua aprovação.',
    flowLabel: 'Etapas previstas para montar o orçamento',
    steps: [
      ['1', 'Envio do livro', 'Arquivo PDF, EPUB ou TXT'],
      ['2', 'Análise do documento', 'Estrutura e personagens'],
      ['3', 'Configuração', 'Vozes e interpretação'],
      ['4', 'Apresentação do orçamento', 'Antes de gerar o áudio'],
    ],
    reviewTitle: 'Revise antes de aprovar.',
    reviewText:
      'Confira quem fala, as vozes e as configurações antes de aprovar o valor.',
  },
  faq: {
    title: 'Dúvidas',
    titleLine2: 'sobre',
    titleEmphasis: 'o Taler.',
    contact: 'Ficou alguma dúvida? Fale com a gente',
    navLabel: 'Perguntas frequentes',
    items: [
      {
        question: 'Quais formatos de arquivo são aceitos?',
        answer:
          'PDF, EPUB e TXT estão previstos. O envio e a leitura desses arquivos ainda não foram implementados.',
      },
      {
        question: 'A plataforma identifica automaticamente os personagens?',
        answer:
          'Ainda não. O reconhecimento de personagens e diálogos faz parte do plano, não desta versão.',
      },
      {
        question: 'Posso escolher as vozes?',
        answer:
          'A escolha de vozes está planejada; esta versão não gera áudio nem oferece uma seleção funcional.',
      },
      {
        question: 'Como funciona quando o narrador muda?',
        answer:
          'A proposta é identificar mudanças de narrador e atribuir a voz correspondente. Esse processamento ainda não existe.',
      },
      {
        question: 'Posso alterar uma voz depois de gerar o audiolivro?',
        answer:
          'A geração de audiolivros ainda não está disponível. Na proposta, as vozes seriam revisadas antes de gerar o áudio.',
      },
      {
        question: 'Como o preço é calculado?',
        answer:
          'Ainda não há cobrança. O orçamento previsto considera extensão do livro, qualidade do áudio, número de vozes e grau de interpretação.',
      },
      {
        question: 'Posso utilizar livros de minha autoria?',
        answer:
          'A proposta inclui obras próprias. Será necessário ter os direitos ou as autorizações para usar o texto.',
      },
    ],
  },
  closing: {
    title: 'Livros em áudio',
    titleEmphasis: 'com vozes distintas.',
    description:
      'O Taler está em desenvolvimento. Conheça a proposta de narração, vozes por personagem e ambientação sonora.',
    cta: 'Conhecer o projeto',
    tagline: 'Histórias feitas sob medida.',
  },
  footer: {
    linksLabel: 'Links institucionais',
    howItWorks: 'Como funciona',
    features: 'Recursos',
    plans: 'Planos',
    contact: 'Contato',
    legalLabel: 'Links legais',
    terms: 'Termos de uso',
    privacy: 'Privacidade',
    termsSubject: 'Termos de uso',
    privacySubject: 'Política de privacidade',
    copyright: '© 2026 Taler. Todos os direitos reservados.',
    signoff: 'Projeto independente em desenvolvimento.',
  },
}

const english: typeof portuguese = {
  metadata: {
    title: 'Taler — stories, tailored to you.',
    description:
      'Meet the Taler concept: audiobooks with distinct character voices and context-aware narration.',
  },
  brand: {
    pronunciationHint: "As in 'tailor'",
    homeLabel: 'Taler, back to top',
    tagline: 'Stories, tailored to you.'
  },
  header: {
    navLabel: 'Main navigation',
    howItWorks: 'How it works',
    features: 'Features',
    plans: 'Plans',
    start: 'Explore the concept',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageAction: 'Switch language to Portuguese',
  },
  hero: {
    eyebrow: 'BOOKS, NARRATED IN CONTEXT',
    title: 'Every story deserves',
    titleEmphasis: 'a voice of its own.',
    description:
      'Taler is a concept for turning books into audiobooks with distinct voices for narrators and characters. The proposal also includes contextual interpretation and sound design.',
    createAudiobook: 'See how a quote would work',
    explore: 'See how it could work',
    artworkLabel:
      'Abstract illustration of an open book turning into sound waves',
    artworkTitle: 'An open book sending out sound waves',
    artVoiceNarrator: 'narrator',
    artVoiceNarratorTone: 'calm · measured',
    artVoiceLena: 'lena',
    artVoiceLenaTone: 'curious · bright',
    artVoiceMarcos: 'marcos',
    artVoiceMarcosTone: 'deep · steady',
  },
  intro: {
    ariaLabel: 'The Taler difference',
    firstLine: 'Narration involves interpretation.',
    emphasis: 'Context shapes the voice.',
  },
  features: {
    title: 'The text guides',
    titleEmphasis: 'who speaks, and when.',
    lead:
      'The proposal organizes chapters and dialogue to determine when the narration changes voice.',
    cards: [
      {
        number: '01',
        title: 'Structure and synchronized reading',
        text: 'The concept includes chapter organization and text highlighting synced with narration.',
      },
      {
        number: '02',
        title: 'A voice for each character',
        text: 'Recurring characters would keep the same voice across chapters; voice assignments could be reviewed before generation.',
      },
      {
        number: '03',
        title: 'Contextual interpretation',
        text: 'The planned Premium tier would use a scene’s context and emotion to shape narration pace and tone.',
      },
    ],
  },
  process: {
    eyebrow: 'PLANNED FLOW',
    title: 'How a book becomes',
    titleEmphasis: 'an audiobook.',
    lead:
      'These steps describe a planned experience; book uploads and audio generation are not available yet.',
    steps: [
      {
        number: '1',
        icon: 'upload' as IconName,
        title: 'Add your book',
        text: 'Upload a PDF, EPUB, or TXT file.',
      },
      {
        number: '2',
        icon: 'layers' as IconName,
        title: 'We analyze the story',
        text: 'The planned analysis identifies chapters, narrators, characters, and dialogue.',
      },
      {
        number: '3',
        icon: 'mic' as IconName,
        title: 'Set the voices',
        text: 'Choose a voice for each character and set the level of interpretation.',
      },
      {
        number: '4',
        icon: 'headphones' as IconName,
        title: 'Listen to your story',
        text: 'The audiobook would be organized by chapter so you can follow along.',
      },
    ],
    formats: 'PDF, EPUB, and TXT',
    privacyNote: 'Support for these formats is part of the concept.',
  },
  demo: {
    eyebrow: 'VOICE DEMONSTRATION',
    title: 'Three voices',
    titleEmphasis: 'in one scene.',
    lead:
      'A fictional excerpt with a narrator and two characters. The mockup shows how each line could be assigned a different voice.',
    preview: 'DEMO PREVIEW',
    chapter: 'THE GARDEN AFTER THE RAIN',
    fictionLabel: '— FICTIONAL EXCERPT',
    narrator: 'NARRATOR',
    narratorLine: 'The rain had stopped. Water still trembled on the leaves.',
    lena: 'LENA',
    lenaLine: '“Did you hear that?” Lena kept watching the garden.',
    marcos: 'MARCOS',
    marcosLine: '“Only silence,” Marcos said. “Sometimes, that’s enough.”',
    nowNarrating: 'NOW NARRATING',
    narratorVoice: 'Narrator · neutral voice',
    playing: 'Demonstration animation',
    waveformLabel: 'Demonstration sound wave visualization',
    play: 'Start demonstration animation',
    pause: 'Pause demonstration animation',
    disclaimer:
      'This preview has no audio. The button only animates the interface.',
  },
  plans: {
    title: 'Three options',
    titleEmphasis: 'for narration.',
    lead:
      'The concept groups planned features into three options: Essential, Multivoice, and Premium.',
    price: 'Custom',
    priceNote: 'project-based quote',
    choose: 'Explore',
    items: [
      {
        name: 'Essential',
        description: 'One voice throughout the book, organized by chapter.',
        features: [
          'One voice for the entire book',
          'Natural narration',
          'Chapter organization',
          'Playback controls',
        ],
      },
      {
        name: 'Multivoice',
        description: 'For stories with multiple characters and dialogue.',
        features: [
          'Distinct voices for characters',
          'Dialogue detection',
          'Consistent vocal identity',
          'Natural dialogue flow between characters',
        ],
      },
      {
        name: 'Premium',
        description: 'Narration, performance, and sound shaped around each scene.',
        features: [
          'Everything in Multivoice',
          'Vocal profile for each character',
          'Contextual interpretation with emotion',
          'Adjustable tone and pacing',
          'AI-generated soundtrack and sound effects',
          'Musical changes tied to the narrative',
          'Separate volume controls for voice, music, and effects',
        ],
      },
    ],
    priceDisclaimer:
      'No fixed price list; each quote would be calculated for the project.',
  },
  soundscape: {
    eyebrow: 'PLANNED PREMIUM FEATURE',
    title: 'Sound is part',
    titleEmphasis: 'of the story.',
    lead:
      'Premium is planned to generate music and effects based on each scene, following changes in the narrative.',
    features: [
      {
        title: 'Music shaped by the scene',
        text: 'Music would reflect a scene’s genre, setting, and mood. Transitions would follow shifts in the story, from tension to calm.',
      },
      {
        title: 'Effects at the right moment',
        text: 'Rain, footsteps, doors, wind, or crowds would be placed as events unfold. Music and effects could be used together or separately.',
      },
      {
        title: 'Separate volume controls',
        text: 'The concept includes independent controls for narration, music, and effects, with the option to turn off each sound layer.',
      },
    ],
    visualLabel:
      'Concept audio interface planned for the product: suspense scene, narration, soundtrack, and effects with independent volume levels.',
    scene: 'THE GARDEN AFTER THE RAIN',
    chapter: 'CHAPTER 04',
    sceneTitle: 'Footsteps in',
    sceneTitleEmphasis: 'the rain-soaked garden.',
    tracks: [
      ['Narration', 'VOICE · LENA', 'mix-track-voice'],
      ['Soundtrack', 'SUSPENSE · STRINGS', 'mix-track-music'],
      ['Effects', 'RAIN · FOOTSTEPS', 'mix-track-effects'],
    ],
    plannedForPremium: 'PLANNED FOR PREMIUM',
    illustrativeControls: 'ILLUSTRATIVE CONTROLS · NOT FUNCTIONAL',
  },
  pricing: {
    eyebrow: 'A QUOTE FOR EACH BOOK',
    title: 'The cost depends',
    titleEmphasis: 'on your choices.',
    description:
      'Book length, audio quality, number of voices, and interpretation style would factor into the quote. You would see the price before generation.',
    calculate: 'See how a quote would work',
    reassurance: 'Generation would begin after your approval.',
    flowLabel: 'Planned steps to prepare a quote',
    steps: [
      ['1', 'Upload the book', 'PDF, EPUB, or TXT file'],
      ['2', 'Document analysis', 'Structure and characters'],
      ['3', 'Set up narration', 'Voices and interpretation'],
      ['4', 'Review the quote', 'Before audio generation'],
    ],
    reviewTitle: 'Review before you approve.',
    reviewText:
      'Check speakers, voices, and settings before approving the quote.',
  },
  faq: {
    title: 'Questions',
    titleLine2: 'about',
    titleEmphasis: 'Taler.',
    contact: 'Questions about the project? Get in touch',
    navLabel: 'Frequently asked questions',
    items: [
      {
        question: 'Which file formats will be supported?',
        answer:
          'PDF, EPUB, and TXT are planned. Upload and file reading are not implemented yet.',
      },
      {
        question: 'Will the platform identify characters automatically?',
        answer:
          'Not yet. Character and dialogue recognition is planned, but is not part of this version.',
      },
      {
        question: 'Will I be able to choose the voices?',
        answer:
          'Voice selection is planned; this version does not generate audio or offer a working voice selector.',
      },
      {
        question: 'What happens when the narrator changes?',
        answer:
          'The concept is to identify narrator changes and assign the corresponding voice. That processing does not exist yet.',
      },
      {
        question: 'Can I change a voice after generating the audiobook?',
        answer:
          'Audiobook generation is not available yet. The proposal is to review voices before generating audio.',
      },
      {
        question: 'How will pricing work?',
        answer:
          'There is no billing yet. A future quote would consider book length, audio quality, number of voices, and interpretation style.',
      },
      {
        question: 'Can I use books I wrote?',
        answer:
          'Using your own work is part of the proposal. You would need the rights or permission to use the text.',
      },
    ],
  },
  closing: {
    title: 'Books in audio',
    titleEmphasis: 'with distinct voices.',
    description:
      'Taler is in development. Explore its proposed approach to narration, character voices, and sound.',
    cta: 'Explore the concept',
    tagline: 'Stories, tailored to you.',
  },
  footer: {
    linksLabel: 'Explore',
    howItWorks: 'How it works',
    features: 'Features',
    plans: 'Plans',
    contact: 'Contact',
    legalLabel: 'Legal',
    terms: 'Terms of use',
    privacy: 'Privacy',
    termsSubject: 'Terms of use',
    privacySubject: 'Privacy policy',
    copyright: '© 2026 Taler. All rights reserved.',
    signoff: 'An independent project in development.',
  },
}

export const messages = {
  'pt-BR': portuguese,
  en: english,
}

export type Messages = typeof portuguese
