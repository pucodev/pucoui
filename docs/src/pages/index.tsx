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
            Documentation
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
            <AlertHeader>Ready!</AlertHeader>
            <AlertBody>Your data has been synchronized</AlertBody>
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
        'variable to define spacings, used for margins, padding, etc',
    },
    {
      icon: 'solar:waterdrops-outline',
      title: 'Color',
      content:
        'Variable to define the color palette, uses primary, info, warning, etc',
    },
    {
      icon: 'solar:text-bold',
      title: 'Font',
      content:
        'Variable to define font characteristics, used for size, weight, etc',
    },
  ]

  const elementFeatures = [
    {
      icon: 'solar:settings-linear',
      title: 'Helpers',
      content:
        'Ready-to-use utilities that solve common layout, spacing, typography, and more.',
    },
    {
      icon: 'solar:menu-dots-square-outline',
      title: 'Elements',
      content:
        'Basic visual elements, ready to combine and customize with CSS classes.',
    },
    {
      icon: 'solar:widget-5-outline',
      title: 'Components',
      content:
        'Set of more complex and consistent visual blocks, designed to speed up your development and maintain design consistency.',
    },
  ]

  const features = [
    {
      icon: 'solar:pallete-2-linear',
      title: <>Designed to adapt to you</>,
      content: (
        <>
          <div>
            Change the design without touching the classes, customize colors, sizes,
            typography, and spacing using CSS variables.
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
          Get Started
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
      title: 'Easy to use',
      content: (
        <>
          <div>
            Access a wide collection of classes for typography, layouts,
            forms, buttons, interactive states, and more. Everything is designed to
            scale and adapt effortlessly to any project.
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
          Get Started
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
                  Build your website in seconds
                </h1>
                <div>
                  A production-ready CSS class system, easy to adapt and perfect for building your own design or design system. Customize, extend, and maintain your style effortlessly.
                </div>
                <div className="is-hstack is-gap-4 mt-3">
                  <Link className="btn is-md" to="/docs/intro">
                    Get Started
                  </Link>
                  <Link
                    className="btn is-md is-outlined"
                    to="/docs/showcase/register"
                  >
                    Examples
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
              EVERYTHING YOU NEED, WITHOUT COMPLICATIONS
            </h5>
            <h2>
              Designed to scale, made to customize
            </h2>
            <div className="is-text-muted mt-3">
              pucoui combines ready-to-use utilities, elements, and components. Customize with CSS variables or apply production-ready classes without losing control or speed.
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
