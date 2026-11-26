# Taler

**Pronúncia:** `/ˈteɪ.lɚ/` (como “tailor”)<br />
**Slogan:** Stories, tailored to you.<br />
**Status:** **Concept Project | Work in Progress**

- [Português](#pt-version)
- [English](#en-version)

<a id="pt-version"></a>
## Português (Brasil)

Taler é o conceito de uma plataforma com IA para transformar livros em experiências de audiolivro personalizadas.

> **Status do projeto: Conceito em desenvolvimento**
>
> O Taler é um projeto independente que está atualmente em fase conceitual e de desenvolvimento inicial. Este repositório contém uma landing page de apresentação que demonstra a visão do produto, sua identidade visual e suas funcionalidades planejadas.
>
> A plataforma de geração de audiolivros descrita neste projeto ainda não foi implementada. Recursos como narração por IA, vozes para personagens, leitura sincronizada e trilhas sonoras geradas por IA representam funcionalidades propostas, não recursos atualmente disponíveis.

### Índice

- [Sobre o projeto](#pt-sobre-o-projeto)
- [Visão e proposta](#pt-visao-e-proposta)
- [Funcionalidades planejadas](#pt-funcionalidades-planejadas)
- [Escopo atual](#pt-escopo-atual)
- [Tecnologias](#pt-tecnologias)
- [Como executar localmente](#pt-como-executar-localmente)
- [Status e roadmap](#pt-status-e-roadmap)
- [Contribuição](#pt-contribuicao)
- [Licença](#pt-licenca)

<a id="pt-sobre-o-projeto"></a>
### Sobre o projeto

Taler (pronuncia-se como “tailor”) é a visão de uma plataforma que vai além da conversão convencional de texto em fala. A proposta é combinar:

- Narração natural.
- Interpretação narrativa contextual.
- Vozes distintas e consistentes para personagens.
- Trilhas sonoras e efeitos ambientais gerados por IA.
- Leitura sincronizada com o áudio.

**Stories, tailored to you.** — histórias contadas sob medida.

<a id="pt-visao-e-proposta"></a>
### Visão e proposta

A visão do Taler é transformar livros em experiências de escuta personalizadas, nas quais leitores possam escolher o estilo de narração, as identidades vocais dos personagens e a atmosfera sonora. A combinação de narração, interpretação e ambientação pretende valorizar a narrativa; isso descreve uma direção de produto, não um serviço atualmente disponível.

<a id="pt-funcionalidades-planejadas"></a>
### Funcionalidades planejadas

Todas as capacidades abaixo são propostas conceituais e ainda não estão implementadas.

#### Narração

- Narração natural gerada por IA.
- Detecção e organização automática de capítulos.
- Interpretação narrativa sensível ao contexto.

#### Narração multivozes

- Vozes distintas para narradores e personagens.
- Identidades vocais consistentes para personagens recorrentes.
- Atribuição contextual de falas e diálogos.

#### Experiência sonora Premium

- Trilhas sonoras contextuais geradas por IA.
- Efeitos sonoros ambientais.
- Transições musicais que acompanham mudanças na narrativa.
- Controles independentes de volume para narração, música e efeitos.

#### Leitura sincronizada

- Destaque do texto sincronizado com a reprodução do áudio.
- Sincronização por frase e por palavra.
- Trechos clicáveis para navegar pelo áudio.

<a id="pt-escopo-atual"></a>
### Escopo atual

Este repositório contém a apresentação visual do conceito:

- Uma landing page de apresentação.
- Posicionamento do produto e identidade visual.
- Interface responsiva.
- Apresentações conceituais das funcionalidades planejadas.
- Uma prévia visual de player com controles demonstrativos; ela não reproduz áudio real.

Não estão implementados:

- Autenticação de usuários.
- Envio funcional ou processamento de livros.
- Geração de narração por IA.
- Geração de trilhas sonoras por IA.
- Serviços de backend.
- Banco de dados.
- Pagamentos ou assinaturas.
- Player operacional de audiolivros.
- Leitura sincronizada.

<a id="pt-tecnologias"></a>
### Tecnologias

Tecnologias identificadas nos manifests do projeto:

- [Next.js](https://nextjs.org/) 16.4.6 com App Router.
- [React](https://react.dev/) 19.3.0.
- [TypeScript](https://www.typescriptlang.org/) 5.x.
- [Tailwind CSS](https://tailwindcss.com/) 4.3.3.
- npm e `package-lock.json` para gerenciamento de dependências.

<a id="pt-como-executar-localmente"></a>
### Como executar localmente

**Pré-requisito:** Node.js 20.9.0 ou superior e npm.

Este checkout não tem um endereço remoto Git configurado. Quando houver uma URL oficial publicada, clone o repositório com ela:

```bash
git clone <URL_OFICIAL_DO_REPOSITORIO>
cd taler
```

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Comandos disponíveis para validação:

```bash
npm run lint
npm run build
```

Não são necessárias variáveis de ambiente para executar a landing page.

<a id="pt-status-e-roadmap"></a>
### Status e roadmap

- [x] Landing page de apresentação e identidade visual.
- [x] Protótipo visual interativo do player demonstrativo (sem reprodução real de áudio).
- [ ] Experiência de leitura sincronizada.
- [ ] Protótipo funcional de narração multivozes.
- [ ] Demonstração de trilhas sonoras geradas por IA.
- [ ] Backend e integrações com IA.
- [ ] Biblioteca de usuário e gerenciamento de contas.
- [ ] Infraestrutura de pagamentos e assinaturas.

<a id="pt-contribuicao"></a>
### Contribuição

O projeto está atualmente em desenvolvimento individual. Sugestões e contribuições são bem-vindas; não há, neste momento, um processo formal de contribuição definido.

<a id="pt-licenca"></a>
### Licença

Os termos de licenciamento ainda não foram definidos. Nenhuma licença de código aberto deve ser presumida.

<a id="en-version"></a>

## English

Taler is the concept for an AI-powered platform that transforms books into personalized audiobook experiences.

> **Project status: Concept / Work in Progress**
>
> Taler is an independent project currently in its conceptual and early development stage. This repository contains a presentation landing page showcasing the product vision, visual identity, and planned features.
>
> The audiobook generation platform described in this project has not yet been implemented. Features such as AI-powered narration, character voices, synchronized reading, and AI-generated soundtracks represent proposed functionality, not currently available features.

### Table of contents

- [About the project](#en-about-the-project)
- [Vision and concept](#en-vision-and-concept)
- [Planned features](#en-planned-features)
- [Current scope](#en-current-scope)
- [Tech stack](#en-tech-stack)
- [Getting started](#en-getting-started)
- [Project status and roadmap](#en-project-status-and-roadmap)
- [Contributing](#en-contributing)
- [License](#en-license)

<a id="en-about-the-project"></a>
### About the project

Taler (pronounced like “tailor”) is the vision for a platform that goes beyond conventional text-to-speech conversion. The concept combines:

- Natural narration.
- Context-aware narrative interpretation.
- Distinct and consistent character voices.
- AI-generated soundtracks and environmental sound effects.
- Reading synchronized with audio.

**Stories, tailored to you.**

<a id="en-vision-and-concept"></a>
### Vision and concept

Taler aims to turn books into personalized listening experiences, giving readers control over narration style, character vocal identities, and sound atmosphere. Combining narration, interpretation, and sound design is intended to bring each story to life; this describes a product direction, not an available service.

<a id="en-planned-features"></a>
### Planned features

All capabilities below are conceptual proposals and have not yet been implemented.

#### Narration

- Natural AI-generated narration.
- Automatic chapter detection and organization.
- Context-aware narrative interpretation.

#### Multivoice narration

- Distinct voices for narrators and characters.
- Consistent vocal identities for recurring characters.
- Contextual dialogue attribution.

#### Premium sound experience

- AI-generated contextual soundtracks.
- Environmental sound effects.
- Musical transitions that follow narrative changes.
- Independent volume controls for narration, music, and sound effects.

#### Synchronized reading

- Text highlighting synchronized with audio playback.
- Sentence- and word-level synchronization.
- Clickable text segments for navigating through the audio.

<a id="en-current-scope"></a>
### Current scope

This repository contains the visual presentation of the concept:

- A presentation landing page.
- Product positioning and visual identity.
- A responsive interface.
- Conceptual presentations of planned features.
- A visual player preview with demonstrative controls; it does not play real audio.

The following are not currently implemented:

- User authentication.
- Functional book uploads or processing.
- AI narration generation.
- AI soundtrack generation.
- Backend services.
- A database.
- Payments or subscriptions.
- An operational audiobook player.
- Synchronized reading.

<a id="en-tech-stack"></a>
### Tech stack

Technologies verified in the project manifests:

- [Next.js](https://nextjs.org/) 16.4.6 with the App Router.
- [React](https://react.dev/) 19.3.0.
- [TypeScript](https://www.typescriptlang.org/) 5.x.
- [Tailwind CSS](https://tailwindcss.com/) 4.3.3.
- npm and `package-lock.json` for dependency management.

<a id="en-getting-started"></a>
### Getting started

**Prerequisites:** Node.js 20.9.0 or later and npm.

This checkout has no Git remote URL configured. Once an official repository URL is available, clone the repository with it:

```bash
git clone <OFFICIAL_REPOSITORY_URL>
cd taler
```

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available validation commands:

```bash
npm run lint
npm run build
```

No environment variables are required to run the landing page.

<a id="en-project-status-and-roadmap"></a>
### Project status and roadmap

- [x] Presentation landing page and visual identity.
- [x] Interactive visual prototype of the demonstrative player (no real audio playback).
- [ ] Synchronized reading experience.
- [ ] Functional multivoice narration prototype.
- [ ] AI-generated soundtrack demonstration.
- [ ] Backend and AI integrations.
- [ ] User library and account management.
- [ ] Payment and subscription infrastructure.

<a id="en-contributing"></a>
### Contributing

The project is currently under individual development. Suggestions and contributions are welcome; no formal contribution process has been established yet.

<a id="en-license"></a>
### License

Licensing terms have not yet been defined. No open-source license should be assumed.
