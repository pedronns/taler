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
      'Audiolivros com vozes distintas para narradores e personagens, leitura sincronizada e narração guiada pelo contexto.',
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
    start: 'Começar agora',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    languageAction: 'Mudar idioma para inglês',
  },
  hero: {
    eyebrow: 'LIVROS, NARRADOS COM CONTEXTO',
    title: 'Toda história merece',
    titleEmphasis: 'uma voz própria.',
    description:
      'Transforme livros em audiolivros com vozes distintas para narradores e personagens. O Taler também sincroniza o texto com a narração e adapta a interpretação ao contexto de cada cena.',
    createAudiobook: 'Ver como o orçamento é calculado',
    explore: 'Como funciona',
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
    lead: 'O Taler organiza capítulos e falas para alternar a narração conforme a história.',
    cards: [
      {
        number: '01',
        title: 'Estrutura e leitura sincronizada',
        text: 'Capítulos e texto acompanham a narração durante a escuta.',
      },
      {
        number: '02',
        title: 'Uma voz por personagem',
        text: 'O Taler atribui as vozes automaticamente e mantém cada identidade vocal entre os capítulos. Se quiser, ajuste as sugestões antes de gerar.',
      },
      {
        number: '03',
        title: 'Interpretação contextual',
        text: 'No Premium, o contexto e a emoção de cada cena orientam a entonação e o ritmo.',
      },
    ],
  },
  process: {
    eyebrow: 'COMO FUNCIONA',
    title: 'Como o livro vira',
    titleEmphasis: 'um audiolivro.',
    lead: 'A IA identifica os personagens e distribui as vozes. Se quiser, ouça amostras e ajuste as sugestões antes de gerar o audiolivro.',
    steps: [
      {
        number: '1',
        icon: 'upload' as IconName,
        title: 'Importe seu livro',
        text: 'Envie um arquivo PDF, EPUB ou TXT.',
      },
      {
        number: '2',
        icon: 'layers' as IconName,
        title: 'Distribuição automática de vozes',
        text: 'A IA identifica capítulos, narradores, personagens e diálogos, distribui as vozes e mantém cada identidade vocal consistente.',
      },
      {
        number: '3',
        icon: 'mic' as IconName,
        title: 'Personalize se quiser',
        text: 'Ouça amostras e, se preferir, troque as vozes sugeridas por outras disponíveis.',
      },
      {
        number: '4',
        icon: 'headphones' as IconName,
        title: 'Gere seu audiolivro',
        text: 'O Taler gera o audiolivro com as vozes atribuídas e os ajustes escolhidos.',
      },
    ],
    formats: 'PDF, EPUB e TXT',
    privacyNote: 'Arquivos PDF, EPUB e TXT são aceitos.',
  },
  demo: {
    eyebrow: 'TRECHO DEMONSTRATIVO',
    title: 'Três vozes',
    titleEmphasis: 'na mesma cena.',
    lead: 'Trecho fictício com narrador e dois personagens. Cada fala é associada à voz correspondente.',
    preview: 'PRÉVIA DEMONSTRATIVA',
    chapter: 'O JARDIM DEPOIS DA CHUVA',
    fictionLabel: '— TRECHO FICTÍCIO',
    narrator: 'NARRADOR',
    narratorLine: 'A chuva parou. Nas folhas, a água ainda tremia.',
    lena: 'LENA',
    lenaLine: '“Você ouviu?” Lena não tirava os olhos do jardim.',
    marcos: 'MARCOS',
    marcosLine: '“Só o silêncio”, disse Marcos. “Às vezes, basta.”',
    nowNarrating: 'AGORA NARRA',
    narratorVoice: 'Narrador · voz neutra',
    playing: 'Animação demonstrativa',
    waveformLabel: 'Visualização demonstrativa de onda sonora',
    play: 'Iniciar animação demonstrativa',
    pause: 'Pausar animação demonstrativa',
    disclaimer:
      'Prévia visual da alternância de vozes; esta demonstração não inclui áudio.',
  },
  plans: {
    title: 'Três opções',
    titleEmphasis: 'de narração.',
    lead: 'Escolha entre três modalidades: Essencial, Multivozes e Premium. Cada uma reúne recursos de narração diferentes.',
    price: 'Sob medida',
    priceNote: 'orçamento por projeto',
    choose: 'Explorar',
    items: [
      {
        name: 'Essencial',
        description:
          'Uma voz ao longo do livro, com organização por capítulos.',
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
      'O orçamento varia conforme o documento e as configurações escolhidas.',
  },
  soundscape: {
    eyebrow: 'RECURSO PREMIUM',
    title: 'O som também conta',
    titleEmphasis: 'a história.',
    lead: 'No Premium, trilha e efeitos acompanham o contexto de cada cena e as mudanças da narrativa.',
    features: [
      {
        title: 'Música guiada pela cena',
        text: 'A música acompanha o gênero, o cenário e o clima da cena. As transições seguem as mudanças da narrativa, da tensão à calmaria.',
      },
      {
        title: 'Efeitos no momento certo',
        text: 'Chuva, passos, portas, vento e multidões entram conforme os acontecimentos. Use música e efeitos juntos ou separados.',
      },
      {
        title: 'Volumes separados',
        text: 'Ajuste separadamente o volume da narração, da música e dos efeitos, ou desligue cada camada sonora.',
      },
    ],
    visualLabel:
      'Prévia da interface de áudio do Taler, com uma cena, narração, trilha sonora, efeitos e níveis de mixagem separados.',
    scene: 'O JARDIM DEPOIS DA CHUVA',
    chapter: 'CAPÍTULO 04',
    sceneTitle: 'Passos no',
    sceneTitleEmphasis: 'jardim molhado.',
    tracks: [
      ['Narração', 'VOZ · LENA', 'mix-track-voice'],
      ['Trilha sonora', 'SUSPENSE · CORDAS', 'mix-track-music'],
      ['Efeitos', 'CHUVA · PASSOS', 'mix-track-effects'],
    ],
    plannedForPremium: 'INCLUÍDA NO PREMIUM',
    illustrativeControls: 'PRÉVIA DE MIXAGEM',
  },
  pricing: {
    eyebrow: 'ORÇAMENTO POR LIVRO',
    title: 'O valor depende',
    titleEmphasis: 'do que você escolher.',
    description:
      'O orçamento considera a extensão do livro, a qualidade do áudio, o número de vozes e o grau de interpretação. Você recebe o valor antes de iniciar a geração.',
    calculate: 'Ver como o valor é calculado',
    reassurance: 'A geração só começa após sua aprovação.',
    flowLabel: 'Etapas para calcular o orçamento',
    steps: [
      ['1', 'Envio do livro', 'Arquivo PDF, EPUB ou TXT'],
      ['2', 'Análise do documento', 'Estrutura e personagens'],
      ['3', 'Personalização opcional', 'Amostras, vozes e interpretação'],
      ['4', 'Revise o orçamento', 'Antes de gerar o áudio'],
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
          'A plataforma aceita arquivos nos formatos PDF, EPUB e TXT, permitindo importar livros para transformá-los em audiolivros.',
      },
      {
        question: 'A plataforma identifica automaticamente os personagens?',
        answer:
          'Sim. A IA identifica personagens, narradores, diálogos e mudanças de interlocutor, e usa essa análise para distribuir as vozes.',
      },
      {
        question: 'Posso escolher as vozes?',
        answer:
          'O Taler sugere e distribui as vozes automaticamente. Você pode ouvir amostras e substituir as sugestões por outras vozes disponíveis.',
      },
      {
        question: 'Como funciona quando o narrador muda?',
        answer:
          'A IA identifica mudanças de interlocutor e mantém a voz atribuída a cada narrador ou personagem ao longo da história.',
      },
      {
        question: 'Posso ouvir amostras das vozes?',
        answer:
          'Sim. Ouça as opções disponíveis e, se quiser, substitua uma voz sugerida antes de gerar o audiolivro.',
      },
      {
        question: 'Como o preço é calculado?',
        answer:
          'O valor é calculado com base em fatores como a extensão do livro, a qualidade de áudio selecionada, a quantidade de vozes utilizadas e o nível de interpretação da narração.',
      },
      {
        question: 'Posso utilizar livros de minha autoria?',
        answer:
          'Sim. Você pode utilizar obras de sua própria autoria, desde que possua os direitos necessários para reproduzir e transformar o conteúdo em áudio.',
      },
    ],
  },
  closing: {
    title: 'Livros em áudio',
    titleEmphasis: 'com vozes distintas.',
    description:
      'Envie seu livro e deixe o Taler distribuir as vozes. Revise e ajuste as sugestões se quiser.',
    cta: 'Começar agora',
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
    signoff: 'Vozes distintas, narração guiada pelo contexto.',
  },
}

const english: typeof portuguese = {
  metadata: {
    title: 'Taler — stories, tailored to you.',
    description:
      'Audiobooks with distinct narrator and character voices, synchronized text, and context-aware narration.',
  },
  brand: {
    pronunciationHint: "As in 'tailor'",
    homeLabel: 'Taler, back to top',
    tagline: 'Stories, tailored to you.',
  },
  header: {
    navLabel: 'Main navigation',
    howItWorks: 'How it works',
    features: 'Features',
    plans: 'Plans',
    start: 'Get started',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageAction: 'Switch language to Portuguese',
  },
  hero: {
    eyebrow: 'BOOKS, NARRATED IN CONTEXT',
    title: 'Every story deserves',
    titleEmphasis: 'a voice of its own.',
    description:
      'Turn books into audiobooks with distinct voices for narrators and characters. Taler also syncs text with narration and adapts each performance to the scene.',
    createAudiobook: 'See how pricing works',
    explore: 'How it works',
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
    lead: 'Taler organizes chapters and dialogue so narration changes with the story.',
    cards: [
      {
        number: '01',
        title: 'Structure and synchronized reading',
        text: 'Chapters and on-page text stay in sync with the narration.',
      },
      {
        number: '02',
        title: 'A voice for each character',
        text: 'Taler assigns voices automatically and keeps each character’s vocal identity consistent across chapters. Review suggestions if you like.',
      },
      {
        number: '03',
        title: 'Contextual interpretation',
        text: 'Premium uses each scene’s context and emotion to shape narration pace and tone.',
      },
    ],
  },
  process: {
    eyebrow: 'HOW IT WORKS',
    title: 'How a book becomes',
    titleEmphasis: 'an audiobook.',
    lead: 'AI identifies the characters and assigns their voices. Listen to samples and adjust the suggestions before generating, if you like.',
    steps: [
      {
        number: '1',
        icon: 'upload' as IconName,
        title: 'Import your book',
        text: 'Upload a PDF, EPUB, or TXT file.',
      },
      {
        number: '2',
        icon: 'layers' as IconName,
        title: 'Automatic voice assignment',
        text: 'AI identifies chapters, narrators, characters, and dialogue, assigns the voices, and keeps each identity consistent.',
      },
      {
        number: '3',
        icon: 'mic' as IconName,
        title: 'Customize if you like',
        text: 'Listen to samples and, if you prefer, replace suggested voices with other available options.',
      },
      {
        number: '4',
        icon: 'headphones' as IconName,
        title: 'Generate your audiobook',
        text: 'Taler generates the audiobook with assigned voices and any adjustments you made.',
      },
    ],
    formats: 'PDF, EPUB, and TXT',
    privacyNote: 'PDF, EPUB, and TXT files are supported.',
  },
  demo: {
    eyebrow: 'VOICE DEMONSTRATION',
    title: 'Three voices',
    titleEmphasis: 'in one scene.',
    lead: 'A fictional excerpt with a narrator and two characters. Each line is matched to its speaker’s voice.',
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
      'Visual preview of the voice changes; this demo does not include audio.',
  },
  plans: {
    title: 'Three options',
    titleEmphasis: 'for narration.',
    lead: 'Choose from three plans: Essential, Multivoice, and Premium, each with a different set of narration features.',
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
        description:
          'Narration, performance, and sound shaped around each scene.',
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
      'Your quote reflects the book and the narration settings you choose.',
  },
  soundscape: {
    eyebrow: 'PREMIUM FEATURE',
    title: 'Sound is part',
    titleEmphasis: 'of the story.',
    lead: 'Premium soundtracks and effects follow the context of each scene and the shifts in the story.',
    features: [
      {
        title: 'Music shaped by the scene',
        text: 'Music follows each scene’s genre, setting, and mood. Transitions move with the story, from tension to calm.',
      },
      {
        title: 'Effects at the right moment',
        text: 'Rain, footsteps, doors, wind, and crowds come in as events unfold. Use music and effects together or separately.',
      },
      {
        title: 'Separate volume controls',
        text: 'Adjust narration, music, and effects independently, or turn off any sound layer.',
      },
    ],
    visualLabel:
      'Preview of Taler’s audio interface, showing a scene, narration, soundtrack, effects, and separate mix levels.',
    scene: 'THE GARDEN AFTER THE RAIN',
    chapter: 'CHAPTER 04',
    sceneTitle: 'Footsteps in',
    sceneTitleEmphasis: 'the rain-soaked garden.',
    tracks: [
      ['Narration', 'VOICE · LENA', 'mix-track-voice'],
      ['Soundtrack', 'SUSPENSE · STRINGS', 'mix-track-music'],
      ['Effects', 'RAIN · FOOTSTEPS', 'mix-track-effects'],
    ],
    plannedForPremium: 'INCLUDED WITH PREMIUM',
    illustrativeControls: 'MIX PREVIEW',
  },
  pricing: {
    eyebrow: 'A QUOTE FOR EACH BOOK',
    title: 'The cost depends',
    titleEmphasis: 'on your choices.',
    description:
      'Your quote reflects book length, audio quality, number of voices, and interpretation style. You see the price before generation begins.',
    calculate: 'See how pricing is calculated',
    reassurance: 'Generation begins only after you approve the quote.',
    flowLabel: 'Steps to calculate your quote',
    steps: [
      ['1', 'Upload the book', 'PDF, EPUB, or TXT file'],
      ['2', 'Document analysis', 'Structure and characters'],
      ['3', 'Optional customization', 'Samples, voices, and interpretation'],
      ['4', 'Review your quote', 'Before audio generation'],
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
        question: 'Which file formats can I upload?',
        answer:
          'You can upload books in PDF, EPUB, and TXT formats.',
      },
      {
        question: 'Does Taler identify characters automatically?',
        answer:
          'Yes. AI identifies characters, narrators, dialogue, and changes in who is speaking, then uses that analysis to assign voices.',
      },
      {
        question: 'Can I choose the voices?',
        answer:
          'Taler suggests and assigns voices automatically. Listen to samples and replace a suggestion with another available voice if you like.',
      },
      {
        question: 'What happens when the narrator changes?',
        answer:
          'AI detects changes in speaker and keeps the assigned voice consistent for each narrator or character.',
      },
      {
        question: 'Can I listen to voice samples?',
        answer:
          'Yes. Preview available voices and replace a suggestion before generating the audiobook if you like.',
      },
      {
        question: 'How is pricing calculated?',
        answer:
          'Your quote is based on book length, audio quality, the number of voices, and the level of interpretation.',
      },
      {
        question: 'Can I use books I wrote?',
        answer:
          'Yes, as long as you hold the rights or have permission to use the text.',
      },
    ],
  },
  closing: {
    title: 'Books in audio',
    titleEmphasis: 'with distinct voices.',
    description:
      'Upload a book and let Taler assign the voices. Review and adjust its suggestions if you like.',
    cta: 'Get started',
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
    signoff: 'Distinct voices, guided by context.',
  },
}

export const messages = {
  'pt-BR': portuguese,
  en: english,
}

export type Messages = typeof portuguese
