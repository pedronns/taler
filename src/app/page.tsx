'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { messages, type IconName, type Locale, type Messages } from './i18n'

const LANGUAGE_STORAGE_KEY = 'taler-language'

function subscribeToLanguage(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange)
  window.addEventListener('taler-language-change', onStoreChange)

  return () => {
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener('taler-language-change', onStoreChange)
  }
}

function getLanguageSnapshot(): Locale {
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en'
    ? 'en'
    : 'pt-BR'
}

function getServerLanguageSnapshot(): Locale {
  return 'pt-BR'
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d='M7 17 17 7M7 7h10v10' />
      </>
    ),
    book: (
      <>
        <path d='M12 7v14' />
        <path d='M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4a3 3 0 0 0-3 3 3 3 0 0 0-3-3H5a2 2 0 0 1-2-2Z' />
      </>
    ),
    check: (
      <>
        <path d='m5 12 4 4L19 6' />
      </>
    ),
    chevron: (
      <>
        <path d='m6 9 6 6 6-6' />
      </>
    ),
    circle: (
      <>
        <circle
          cx='12'
          cy='12'
          r='9'
        />
        <path d='M12 8v8m-4-4h8' />
      </>
    ),
    headphones: (
      <>
        <path d='M3 14v-3a9 9 0 0 1 18 0v3' />
        <path d='M5 14h2a2 2 0 0 1 2 2v3H7a4 4 0 0 1-4-4v-1Zm14 0h-2a2 2 0 0 0-2 2v3h2a4 4 0 0 0 4-4v-1Z' />
      </>
    ),
    layers: (
      <>
        <path d='m12 3 9 5-9 5-9-5 9-5Z' />
        <path d='m3 12 9 5 9-5M3 16l9 5 9-5' />
      </>
    ),
    menu: (
      <>
        <path d='M4 7h16M4 12h16M4 17h16' />
      </>
    ),
    mic: (
      <>
        <rect
          x='9'
          y='2'
          width='6'
          height='12'
          rx='3'
        />
        <path d='M5 10v2a7 7 0 0 0 14 0v-2m-7 9v3m-4 0h8' />
      </>
    ),
    pause: (
      <>
        <path d='M9 5v14m6-14v14' />
      </>
    ),
    play: (
      <>
        <path d='m8 5 12 7-12 7V5Z' />
      </>
    ),
    spark: (
      <>
        <path d='m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z' />
        <path d='m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z' />
      </>
    ),
    upload: (
      <>
        <path d='M12 16V4m-5 5 5-5 5 5' />
        <path d='M20 16.5v2A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-2' />
      </>
    ),
    volume: (
      <>
        <path d='M11 5 6 9H3v6h3l5 4V5Z' />
        <path d='M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13' />
      </>
    ),
  }

  return (
    <svg
      aria-hidden='true'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {paths[name]}
    </svg>
  )
}

function Brand({
  footer = false,
  t,
}: {
  footer?: boolean
  t: Messages
}) {
  return (
    <a
      className={`brand${footer ? ' brand-footer' : ''}`}
      href='#top'
      aria-label={t.brand.homeLabel}
    >
      <span className='brand-word'>
        taler<span className='brand-dot'>.</span>
      </span>
      {footer ? (
        <span className='brand-tagline'>{t.brand.tagline}</span>
      ) : (
        <span
          className='brand-phonetic'
          title={t.brand.pronunciationHint}
        >
          /ˈteɪ.lɚ/
        </span>
      )}
    </a>
  )
}

function HeroArtwork({ t }: { t: Messages }) {
  return (
    <div
      className='hero-art'
      aria-label={t.hero.artworkLabel}
    >
      <svg
        className='book-art'
        viewBox='0 0 520 390'
        role='img'
        aria-labelledby='book-art-title'
      >
        <title id='book-art-title'>{t.hero.artworkTitle}</title>
        <defs>
          <linearGradient
            id='pageLeft'
            x1='0'
            x2='1'
            y1='0'
            y2='1'
          >
            <stop
              offset='0'
              stopColor='#e9ddca'
            />
            <stop
              offset='1'
              stopColor='#a697aa'
            />
          </linearGradient>
          <linearGradient
            id='pageRight'
            x1='0'
            x2='1'
            y1='0'
            y2='1'
          >
            <stop
              offset='0'
              stopColor='#c3a9d8'
            />
            <stop
              offset='1'
              stopColor='#75607f'
            />
          </linearGradient>
          <linearGradient
            id='sound'
            x1='0'
            x2='1'
          >
            <stop
              offset='0'
              stopColor='#b9a2c9'
              stopOpacity='.3'
            />
            <stop
              offset='1'
              stopColor='#c6a9dc'
            />
          </linearGradient>
          <filter id='softGlow'>
            <feGaussianBlur
              stdDeviation='9'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <ellipse
          cx='267'
          cy='327'
          rx='164'
          ry='22'
          fill='#050406'
          opacity='.55'
        />
        <path
          d='M88 128c54-21 110-12 168 20v156c-58-32-114-41-168-20V128Z'
          fill='#251e26'
          stroke='#dac8c9'
          strokeOpacity='.47'
          strokeWidth='1.5'
        />
        <path
          d='M95 134c49-15 101-5 154 23v137c-53-27-105-37-154-21V134Z'
          fill='url(#pageLeft)'
        />
        <path
          d='M256 157c59-34 119-44 177-29v156c-58-14-118-5-177 29V157Z'
          fill='#211b24'
          stroke='#d6bfd9'
          strokeOpacity='.55'
          strokeWidth='1.5'
        />
        <path
          d='M263 160c55-30 111-40 163-28v137c-52-12-108-2-163 28V160Z'
          fill='url(#pageRight)'
        />
        <path
          d='M256 149v161'
          stroke='#443342'
          strokeWidth='5'
        />
        <path
          d='M111 161c34-7 73 0 117 18M111 176c31-6 69 1 105 15M111 191c26-3 55 2 84 11M111 222c31-6 64 1 96 13M278 182c39-19 79-28 119-26M278 198c36-17 73-25 108-25M278 229c35-14 70-21 104-21'
          fill='none'
          stroke='#6c5968'
          strokeWidth='2'
          strokeLinecap='round'
          opacity='.55'
        />
        <path
          d='M300 139c16-34 31-37 45-2 15 38 29 32 43-2 14-34 30-29 44 6M322 126c15-30 27-29 39 5 11 31 22 27 33-1 12-29 22-27 34 1M343 116c11-22 20-21 29 4 9 23 16 22 25-1 8-20 16-21 25-5'
          fill='none'
          stroke='url(#sound)'
          strokeWidth='2.3'
          strokeLinecap='round'
          filter='url(#softGlow)'
        />
        <circle
          cx='425'
          cy='102'
          r='3'
          fill='#e1c4ef'
        />
        <circle
          cx='298'
          cy='103'
          r='2'
          fill='#e1c4ef'
        />
        <path
          d='M214 105c-11-18-8-31 6-38 15-7 27 1 24 14-3 12-18 17-30 24Z'
          fill='#d2b8a0'
          opacity='.9'
        />
        <path
          d='M216 102c-2-13 3-23 13-29'
          fill='none'
          stroke='#f4e3d3'
          strokeWidth='1.5'
        />
      </svg>
      <div className='art-voice voice-one'>
        <span className='voice-avatar'>N</span>
        <span>
          <b>{t.hero.artVoiceNarrator}</b>
          <small>{t.hero.artVoiceNarratorTone}</small>
        </span>
      </div>
      <div className='art-voice voice-two'>
        <span className='voice-avatar avatar-lilac'>L</span>
        <span>
          <b>{t.hero.artVoiceLena}</b>
          <small>{t.hero.artVoiceLenaTone}</small>
        </span>
      </div>
      <div className='art-voice voice-three'>
        <span className='voice-avatar avatar-copper'>M</span>
        <span>
          <b>{t.hero.artVoiceMarcos}</b>
          <small>{t.hero.artVoiceMarcosTone}</small>
        </span>
      </div>
    </div>
  )
}

export default function Home() {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const t = messages[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.metadata.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (description) description.content = t.metadata.description
  }, [language, t])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 680px)')
    let isMobile = mobileQuery.matches
    let lastScrollY = window.scrollY
    let scrollDirection = 0
    let directionDistance = 0
    let animationFrame = 0

    function handleScroll() {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0
        const currentScrollY = window.scrollY
        const delta = currentScrollY - lastScrollY
        lastScrollY = currentScrollY

        if (isMobile) return
        if (currentScrollY <= 100) {
          scrollDirection = 0
          directionDistance = 0
          setHeaderHidden(false)
          return
        }
        if (delta === 0) return

        const nextDirection = delta > 0 ? 1 : -1
        if (nextDirection !== scrollDirection) {
          scrollDirection = nextDirection
          directionDistance = delta
        } else {
          directionDistance += delta
        }

        if (directionDistance >= 10) {
          setHeaderHidden(true)
          directionDistance = 0
        } else if (directionDistance <= -10) {
          setHeaderHidden(false)
          directionDistance = 0
        }
      })
    }

    function handleResize() {
      isMobile = mobileQuery.matches
      lastScrollY = window.scrollY
      scrollDirection = 0
      directionDistance = 0
      setHeaderHidden(false)
      setMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleLanguage() {
    const nextLanguage = language === 'pt-BR' ? 'en' : 'pt-BR'
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    window.dispatchEvent(new Event('taler-language-change'))
    setMenuOpen(false)
  }

  return (
    <main id='top'>
      <header className={`site-header${headerHidden ? ' header-hidden' : ''}`}>
        <div className='header-inner'>
          <Brand t={t} />
          <nav
            id='primary-navigation'
            className={`primary-nav${menuOpen ? ' nav-open' : ''}`}
            aria-label={t.header.navLabel}
          >
            <a
              href='#como-funciona'
              onClick={closeMenu}
            >
              {t.header.howItWorks}
            </a>
            <a
              href='#recursos'
              onClick={closeMenu}
            >
              {t.header.features}
            </a>
            <a
              href='#planos'
              onClick={closeMenu}
            >
              {t.header.plans}
            </a>
            <a
              className='button button-small button-light nav-cta'
              href='#orcamento'
              onClick={closeMenu}
            >
              {t.header.start}{' '}
              <Icon
                name='arrow'
                size={15}
              />
            </a>
          </nav>
          <div className='header-actions'>
            <button
              className='language-toggle'
              type='button'
              aria-label={t.header.languageAction}
              onClick={toggleLanguage}
            >
              <span
                key={language}
                className='language-code'
              >
                {language === 'pt-BR' ? 'PT' : 'EN'}
              </span>
            </button>
            <button
              className='menu-toggle'
              type='button'
              aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
              aria-expanded={menuOpen}
              aria-controls='primary-navigation'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon
                name='menu'
                size={22}
              />
            </button>
          </div>
        </div>
      </header>

      <section className='hero section-shell'>
        <div className='hero-copy'>
          <div className='eyebrow'>
            <span className='eyebrow-line' /> {t.hero.eyebrow}
          </div>
          <h1>
            {t.hero.title} <em>{t.hero.titleEmphasis}</em>
          </h1>
          <p className='hero-description'>{t.hero.description}</p>
          <div className='hero-actions'>
            <a
              className='button button-primary'
              href='#orcamento'
            >
              {t.hero.createAudiobook}{' '}
              <Icon
                name='arrow'
                size={17}
              />
            </a>
            <a
              className='text-link'
              href='#como-funciona'
            >
              {t.hero.explore} <span>↓</span>
            </a>
          </div>
        </div>
        <HeroArtwork t={t} />
      </section>

      <section
        className='intro-strip'
        aria-label={t.intro.ariaLabel}
      >
        <div className='section-shell intro-inner'>
          <p>
            {t.intro.firstLine}
            <br />
            <strong>{t.intro.emphasis}</strong>
          </p>
        </div>
      </section>

      <section
        className='section-shell section-block'
        id='recursos'
      >
        <div className='section-heading'>
          <h2>
            {t.features.title} {t.features.titleEmphasis}
          </h2>
          <p className='section-lead'>{t.features.lead}</p>
        </div>
        <div className='feature-list'>
          {t.features.cards.map((feature) => (
            <article
              className='feature-row'
              key={feature.number}
            >
              <span className='feature-number'>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className='how-section'
        id='como-funciona'
      >
        <div className='section-shell section-block'>
          <div className='section-heading'>
            <div className='process-title'>
              <div className='eyebrow'>
                <span className='eyebrow-line' /> {t.process.eyebrow}
              </div>
              <h2>
                {t.process.title} {t.process.titleEmphasis}
              </h2>
            </div>
            <p className='section-lead'>{t.process.lead}</p>
          </div>
          <div className='steps-grid'>
            {t.process.steps.map((step, index) => (
              <article
                className='step-card'
                key={step.number}
              >
                <div className='step-icon'>
                  <Icon
                    name={step.icon}
                    size={22}
                  />
                  <span>{step.number}</span>
                </div>
                {index < t.process.steps.length - 1 && (
                  <div
                    className='step-connector'
                    aria-hidden='true'
                  />
                )}
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className='format-note'>
            <Icon
              name='book'
              size={17}
            />
            <span>{t.process.formats}</span>
            <i /> {t.process.privacyNote}
          </div>
        </div>
      </section>

      <section className='section-shell section-block demo-section'>
        <div className='section-heading demo-heading'>
          <div>
            <div className='eyebrow'>
              <span className='eyebrow-line' /> {t.demo.eyebrow}
            </div>
            <h2>
              {t.demo.title} {t.demo.titleEmphasis}
            </h2>
          </div>
          <p className='section-lead'>{t.demo.lead}</p>
        </div>
        <div className='demo-card'>
          <div className='demo-story'>
            <div className='demo-story-meta'>
              <span>{t.demo.preview}</span>
              <span>00:18</span>
            </div>
            <div className='demo-chapter'>
              {t.demo.chapter} <span>{t.demo.fictionLabel}</span>
            </div>
            <div className='dialogue dialogue-narrator'>
              <span className='speaker'>
                {t.demo.narrator} <i />
              </span>
              <p>{t.demo.narratorLine}</p>
            </div>
            <div className='dialogue dialogue-lena'>
              <span className='speaker'>
                {t.demo.lena} <i />
              </span>
              <p>{t.demo.lenaLine}</p>
            </div>
            <div className='dialogue dialogue-marcos'>
              <span className='speaker'>
                {t.demo.marcos} <i />
              </span>
              <p>{t.demo.marcosLine}</p>
            </div>
          </div>
          <div className='demo-player'>
            <div className='player-person'>
              <span className='person-initial'>N</span>
              <span>
                <small>{t.demo.nowNarrating}</small>
                <strong>
                  {isPlaying
                    ? t.demo.playing
                    : t.demo.narratorVoice}
                </strong>
              </span>
            </div>
            <div
              className={`waveform${isPlaying ? ' waveform-playing' : ''}`}
              aria-label={t.demo.waveformLabel}
            >
              {Array.from({ length: 48 }, (_, index) => (
                <i
                  key={index}
                  style={
                    {
                      '--bar-height': `${18 + ((index * 17 + 11) % 34)}px`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            <div className='player-controls'>
              <span>00:07</span>
              <button
                type='button'
                className='play-button'
                aria-label={
                  isPlaying ? t.demo.pause : t.demo.play
                }
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Icon
                  name={isPlaying ? 'pause' : 'play'}
                  size={19}
                />
              </button>
              <span>00:18</span>
              <Icon
                name='volume'
                size={19}
              />
            </div>
          </div>
        </div>
        <p className='demo-disclaimer'>
          <span /> {t.demo.disclaimer}
        </p>
      </section>

      <section
        className='plans-section'
        id='planos'
      >
        <div className='section-shell section-block'>
          <div className='section-heading'>
            <h2>
              {t.plans.title} {t.plans.titleEmphasis}
            </h2>
            <p className='section-lead'>{t.plans.lead}</p>
          </div>
          <div className='plans-grid'>
            {t.plans.items.map((plan) => (
              <article
                className='plan-card'
                key={plan.name}
              >
                <h3>{plan.name}</h3>
                <p className='plan-description'>{plan.description}</p>
                <div className='plan-price'>
                  {t.plans.price}
                  <span> {t.plans.priceNote}</span>
                </div>
                <div className='plan-divider' />
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon
                        name='check'
                        size={15}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className='button button-outline'
                  href='#orcamento'
                >
                  {t.plans.choose} {plan.name}{' '}
                  <Icon
                    name='arrow'
                    size={16}
                  />
                </a>
              </article>
            ))}
          </div>
          <div className='plan-footnote'>
            <span>
              {t.plans.priceDisclaimer}
            </span>
          </div>
        </div>
      </section>

      <section
        className='soundscape-section'
        aria-labelledby='soundscape-title'
      >
        <div className='section-shell section-block'>
          <div className='soundscape-heading'>
            <div>
              <div className='eyebrow'>
                <span className='eyebrow-line' /> {t.soundscape.eyebrow}
              </div>
              <h2 id='soundscape-title'>
                {t.soundscape.title}
                <br />
                <em>{t.soundscape.titleEmphasis}</em>
              </h2>
            </div>
            <p className='section-lead'>{t.soundscape.lead}</p>
          </div>

          <div className='soundscape-layout'>
            <div className='soundscape-feature-list'>
              {t.soundscape.features.map((feature) => (
                <article
                  className='soundscape-feature'
                  key={feature.title}
                >
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>

            <div
              className='soundscape-console'
              role='img'
              aria-label={t.soundscape.visualLabel}
            >
              <div className='soundscape-console-main'>
                <div className='soundscape-scene'>
                  <span className='scene-overline'>
                    {t.soundscape.scene} <i /> {t.soundscape.chapter}
                  </span>
                  <h3>
                    {t.soundscape.sceneTitle}
                    <br />
                    <em>{t.soundscape.sceneTitleEmphasis}</em>
                  </h3>
                </div>
                <div className='soundscape-mix'>
                  <div
                    className='soundscape-wave'
                    aria-hidden='true'
                  >
                    {Array.from({ length: 40 }, (_, index) => (
                      <i
                        key={index}
                        style={
                          {
                            '--wave-height': `${8 + ((index * 23 + 13) % 40)}px`,
                          } as CSSProperties
                        }
                      />
                    ))}
                  </div>
                  <div
                    className='mix-tracks'
                    aria-hidden='true'
                  >
                    {t.soundscape.tracks.map(([label, detail, trackClass]) => (
                      <div
                        className='mix-track'
                        key={label}
                      >
                        <span className={`mix-track-icon ${trackClass}`} />
                        <span className='mix-track-info'>
                          <strong>{label}</strong>
                          <small>{detail}</small>
                        </span>
                        <span className='mix-track-level'>
                          <i />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='soundscape-console-foot'>
                <span>
                  <i /> {t.soundscape.plannedForPremium}
                </span>
                <span>{t.soundscape.illustrativeControls}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='section-shell section-block pricing-section'
        id='orcamento'
      >
        <div className='pricing-copy'>
          <div className='eyebrow'>
            <span className='eyebrow-line' /> {t.pricing.eyebrow}
          </div>
          <h2>
            {t.pricing.title} {t.pricing.titleEmphasis}
          </h2>
          <p>{t.pricing.description}</p>
          <a
            className='button button-primary'
            href='#'
          >
            {t.pricing.calculate}{' '}
            <Icon
              name='arrow'
              size={17}
            />
          </a>
          <div className='pricing-reassurance'>
            <Icon
              name='check'
              size={16}
            />{' '}
            {t.pricing.reassurance}
          </div>
        </div>
        <div
          className='quote-flow'
          aria-label={t.pricing.flowLabel}
        >
          {t.pricing.steps.map(([number, title, caption], index) => (
            <div
              className='quote-step'
              key={number}
            >
              <div className='quote-number'>{number}</div>
              <div className='quote-step-copy'>
                <strong>{title}</strong>
                <span>{caption}</span>
              </div>
              {index < t.pricing.steps.length - 1 && (
                <div
                  className='quote-line'
                  aria-hidden='true'
                />
              )}
            </div>
          ))}
          <div className='quote-review'>
            <span>
              <strong>{t.pricing.reviewTitle}</strong>
              <small>{t.pricing.reviewText}</small>
            </span>
          </div>
        </div>
      </section>

      <section className='faq-section'>
        <div className='section-shell section-block faq-layout'>
          <div className='faq-intro'>
            <h2>
              {t.faq.title} {t.faq.titleLine2} {t.faq.titleEmphasis}
            </h2>
            <a
              className='text-link'
              href='#'
            >
              {t.faq.contact}{' '}
              <Icon
                name='arrow'
                size={15}
              />
            </a>
          </div>
          <div className='faq-list'>
            {t.faq.items.map((faq) => (
              <details
                className='faq-item'
                key={faq.question}
              >
                <summary>
                  {faq.question}
                  <Icon
                    name='chevron'
                    size={18}
                  />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className='closing-cta'>
        <div className='section-shell closing-inner'>
          <h2>
            {t.closing.title} {t.closing.titleEmphasis}
          </h2>
          <p>{t.closing.description}</p>
          <a
            className='button button-light'
            href='#orcamento'
          >
            {t.closing.cta}{' '}
            <Icon
              name='arrow'
              size={17}
            />
          </a>
          <span className='closing-note'>{t.closing.tagline}</span>
        </div>
      </section>

      <footer className='site-footer'>
        <div className='section-shell footer-inner'>
          <Brand
            footer
            t={t}
          />
          <nav
            className='footer-links'
            aria-label={t.footer.linksLabel}
          >
            <a href='#como-funciona'>{t.footer.howItWorks}</a>
            <a href='#recursos'>{t.footer.features}</a>
            <a href='#planos'>{t.footer.plans}</a>
            <a href='mailto:oi@taler.audio'>{t.footer.contact}</a>
          </nav>
          <nav
            className='footer-legal'
            aria-label={t.footer.legalLabel}
          >
            <a
              href={`mailto:oi@taler.audio?subject=${encodeURIComponent(t.footer.termsSubject)}`}
            >
              {t.footer.terms}
            </a>
            <a
              href={`mailto:oi@taler.audio?subject=${encodeURIComponent(t.footer.privacySubject)}`}
            >
              {t.footer.privacy}
            </a>
          </nav>
          <div className='footer-bottom'>
            <span>{t.footer.copyright}</span>
            <span>{t.footer.signoff}</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
