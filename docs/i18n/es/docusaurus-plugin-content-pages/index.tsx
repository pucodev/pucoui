import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import Heading from '@theme/Heading'
import styles from '@site/src/css/index.module.css'
import { Button } from '@site/src/components/pucoui/Button'
import { Image } from '@site/src/components/pucoui/Image'
import {
  Card,
  CardBody,
  CardContent,
  CardTitle,
} from '@site/src/components/pucoui/Card'
import ButtonBase from '@site/src/components/html/button/ButtonBase'
import { Switch } from '@site/src/components/pucoui/Switch'
import {
  Alert,
  AlertBody,
  AlertHeader,
  AlertIcon,
} from '@site/src/components/pucoui/Alert'
import { Icon } from '@site/src/components/pucoui/Icon'
import PreviewElement from '@site/src/components/PreviewElement'

import CardImageStart from '@site/src/components/html/card/CardImageStart'
import CardImageStartCode from '@site/src/components/generated/card/CardImageStart.html?raw'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Documentación
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  const examples = [
    {
      component: (
        <>
          <Button>Primary</Button>
          <Button color="info">Info</Button>
        </>
      ),
      title: 'Button',
      to: '/docs/element/button',
    },
    {
      component: <Switch id="sw-1" checked />,
      title: 'Switch',
      to: '/docs/form/switch',
    },
    {
      component: (
        <Alert className="w-100" color="primary" accentBorder>
          <AlertIcon icon="solar:cloud-check-outline" />
          <AlertBody>
            <AlertHeader>¡Listo!</AlertHeader>
            <AlertBody>Tus datos han sido sincronizados</AlertBody>
          </AlertBody>
        </Alert>
      ),
      title: 'Alert',
      to: '/docs/component/alert',
    },
  ]

  const tokenFeatures = [
    {
      icon: 'solar:box-minimalistic-outline',
      title: 'Space',
      content:
        'variable para definir los espaciados, usados para los margin, padding, etc',
    },
    {
      icon: 'solar:waterdrops-outline',
      title: 'Color',
      content:
        'Variable para definir la paleta de colores, usa los colores primary, info, warning, etc',
    },
    {
      icon: 'solar:text-bold',
      title: 'Font',
      content:
        'Variable para definir las caracteristicas de la fuente, usados para el tamaño, weight, etc',
    },
  ]

  const elementFeatures = [
    {
      icon: 'solar:settings-linear',
      title: 'Helpers',
      content:
        'Utilidades listas para usar que resuelven problemas comunes de maquetado, espaciado, tipografía y más.',
    },
    {
      icon: 'solar:menu-dots-square-outline',
      title: 'Elements',
      content:
        'Elementos visuales básicos, listos para combinar y personalizar con clases CSS.',
    },
    {
      icon: 'solar:widget-5-outline',
      title: 'Components',
      content:
        'Conjunto de bloques visuales más complejos y consistentes, diseñados para acelerar tu desarrollo y mantener la coherencia de diseño.',
    },
  ]

  const features = [
    {
      icon: 'solar:pallete-2-linear',
      title: <>Diseñado para adaptarse a ti</>,
      content: (
        <>
          <div>
            Cambia el diseño sin tocar las clases, personaliza colores, tamaños,
            tipografía y espaciados usando variables CSS.
          </div>
          <ul className="mt-5 pt-2 is-stack">
            {tokenFeatures.map((item) => (
              <li className="is-flex is-gap-4">
                <Icon icon={item.icon} className="mt-2" />
                <div className="h6">
                  <span className="is-font-medium is-color-text">
                    {item.title},{' '}
                  </span>
                  <span>{item.content}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ),
      cta: (
        <Link className="btn is-outlined" to="/docs/customize/color">
          Empezar
        </Link>
      ),
      extra: (
        <PreviewElement>
          <CodeBlock language="css" className="pucoui-feature__code">
            {`:root {
  --pui-space-0: 0rem;
  --pui-space-1: 0.25rem;
  --pui-space-2: 0.5rem;
  --pui-space-3: 0.75rem;
  --pui-space-4: 1rem;
  --pui-space-5: 1.5rem;
  --pui-space-6: 3rem;
  --pui-space-7: 4rem;
  --pui-space-8: 4.5rem;
  --pui-space-9: 5rem;
  --pui-space-10: 5.5rem;
  --pui-color-primary: #8760db;
  --pui-color-info: #66d1ff;
  --pui-color-success: #48c78e;
  --pui-color-warning: #ffb70f;
  --pui-color-error: #ff6685;
  --pui-color-white: #ffffff;
  --pui-ui-color-muted: #c8d7d2;
  --pui-ui-color-text-muted: #4a5565;
  --pui-ui-color-text-muted-2: #babdbf;
  --pui-ui-color-disabled: #f7f7f9;
  --pui-font-size-1: 3rem;
  --pui-font-size-2: 2.5rem;
  --pui-font-size-3: 2rem;
  --pui-font-size-4: 1.5rem;
  --pui-font-size-5: 1.25rem;
  --pui-font-size-6: 1rem;
  --pui-font-size-7: 0.75rem;
  --pui-font-weight-thin: 100;
  --pui-font-weight-extra-light: 200;
  --pui-font-weight-light: 300;
  --pui-font-weight-normal: 400;
  --pui-font-weight-medium: 500;
  --pui-font-weight-semi-bold: 600;
  --pui-font-weight-bold: 700;
  --pui-font-weight-extra-bold: 800;
  --pui-font-weight-black: 900;
}
`}
          </CodeBlock>
        </PreviewElement>
      ),
    },
    {
      icon: 'solar:bolt-outline',
      title: 'Facil de usar',
      content: (
        <>
          <div>
            Accede a una amplia colección de clases para tipografía, layouts,
            formularios, botones, estados interactivos y más. Todo diseñado para
            escalar y adaptarse sin esfuerzo a cualquier proyecto.
          </div>
          <ul className="mt-5 pt-2 is-stack">
            {elementFeatures.map((item) => (
              <li className="is-flex is-gap-4">
                <Icon icon={item.icon} className="mt-2" />
                <div className="h6">
                  <span className="is-font-medium is-color-text">
                    {item.title},{' '}
                  </span>
                  <span>{item.content}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      ),
      cta: (
        <Link className="btn is-outlined" to="/docs/helper/typography">
          Empezar
        </Link>
      ),
      extra: (
        <div className="surface is-info is-tone-1 is-rounded-3 px-5 py-3">
          <Tabs>
            <TabItem value="preview" label="Preview">
              <PreviewElement>
                <CardImageStart />
              </PreviewElement>
            </TabItem>

            <TabItem value="code" label="Code">
              <CodeBlock language="html">{CardImageStartCode}</CodeBlock>
            </TabItem>
          </Tabs>
        </div>
      ),
    },
  ]
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div
        className="pucoui is-pui-initial-vars"
        style={{
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* HERO */}
        <div className="w-100 is-relative is-vstack">
          <div className="container is-grid py-7">
            {/* HERO-CONTENT */}
            <div className="is-col-12 md:is-col-7 px-6 py-8">
              <div className="is-stack">
                <h1>
                  <Translate id="homepage.hero.title">
                    Construye tu web en segundos
                  </Translate>
                </h1>
                <div>
                  <Translate id="homepage.hero.subtitle">
                    Un sistema de clases CSS listo para producción, fácil de
                    adaptar y perfecto para construir tu propio diseño o design
                    system. Personaliza, extiende y mantén tu estilo sin
                    esfuerzo.
                  </Translate>
                </div>
                <div className="is-hstack is-gap-4 mt-3">
                  <Link className="btn is-md" to="/docs/intro">
                    <Translate id="homepage.hero.ctaStart">Empezar</Translate>
                  </Link>
                  <Link
                    className="btn is-md is-outlined"
                    to="/docs/showcase/register"
                  >
                    <Translate id="homepage.hero.ctaExamples">
                      Ejemplos
                    </Translate>
                  </Link>
                </div>
              </div>
            </div>

            {/* HERO-IMAGE */}
            <div className="is-hidden md:is-flex is-col-5 is-justify-content-center is-align-items-center is-relative">
              <Image
                src="/pucoui/img/pucoui-logo-landing.svg"
                style={{ width: '260px', height: '260px' }}
              />
            </div>
          </div>

          <div className="pucoui-dot-bg"></div>
          <div className="pucoui-wave-bg"></div>
        </div>

        {/* COMPONENTS */}
        <div className="container is-grid is-gap-3 px-6 mt-5">
          {examples.map((item) => (
            <Card className="is-col-12 md:is-col-4" outlined>
              <CardBody className="is-vstack">
                <div className="py-5 px-3 is-hstack pucoui-example__item">
                  {item.component}
                </div>
                <Link
                  to={item.to}
                  target="_blank"
                  className="is-color-text icon-text"
                >
                  <span>{item.title}</span>
                  <Icon icon="solar:square-share-line-outline" />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* FEATURES */}
        <div className="container px-6 py-7">
          {/* FEATURE-TITLE */}
          <div
            className="is-vstack is-gap-0 is-text-center mx-auto py-8"
            style={{ maxWidth: '720px' }}
          >
            <div
              className="surface is-primary is-tone-1 is-rounded is-center"
              style={{ width: '64px', height: '64px' }}
            >
              <Icon
                icon="solar:rocket-outline"
                className="pucoui-features__header__icon is-color-primary mt-1"
              />
            </div>
            <h5 className="is-color-primary mt-3">
              <Translate id="homepage.features.hero.intro">
                TODO LO QUE NECESITAS, SIN COMPLICACIONES
              </Translate>
            </h5>
            <h2>
              <Translate id="homepage.feature.hero.title">
                Diseñado para escalar, hecho para personalizar
              </Translate>
            </h2>
            <div className="is-text-muted mt-3">
              <Translate id="homepage.features.hero.subtitle">
                pucoui combina utilidades, elementos y componentes listos para
                usar. Personaliza con variables CSS o aplica clases listas para
                producción sin perder control ni velocidad.
              </Translate>
            </div>
          </div>

          {/* FEATURE-CARDS */}
          <div className="is-stack is-gap-6 py-4">
            {features.map((item) => (
              <Card outlined>
                <CardBody>
                  <CardContent className="is-row is-gap-6">
                    <div className="is-col-12 md:is-col-6">
                      <div className="is-stack is-gap-5">
                        <div className="surface is-primary is-tone-2 is-rounded-3 pucoui-feature__icon-container">
                          <Icon
                            icon={item.icon}
                            className="pucoui-feature__icon is-color-primary"
                          />
                        </div>
                        <div className="mt-2">
                          <h3 className="h4">{item.title}</h3>
                          <div
                            className="mt-2 is-text-muted"
                            style={{ fontSize: '18px' }}
                          >
                            {item.content}
                          </div>
                          <div className="mt-5 pt-2">{item.cta}</div>
                        </div>
                      </div>
                    </div>
                    <div className="is-col-12 md:is-col-6">{item.extra}</div>
                  </CardContent>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
