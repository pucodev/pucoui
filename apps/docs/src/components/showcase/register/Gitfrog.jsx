import ShowcaseLayout from '../../docs/showcase/ShowcaseLayout'
import { Button } from '../../pucoui/Button'
import { Checkbox, CheckboxField, CheckboxLabel } from '../../pucoui/Checkbox'
import { Field, FieldHelpText, FieldLabel } from '../../pucoui/Field'
import { Icon } from '../../pucoui/Icon'
import { Image } from '../../pucoui/Image'
import { Input } from '../../pucoui/Input'
import { SelectNative } from '../../pucoui/SelectNative'

export default function Gitfrog() {
  const frogSize = 96
  const Metadata = (
    <>
      <script src="https://cdn.jsdelivr.net/npm/iconify-icon@3.0.0/dist/iconify-icon.min.js"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        html {
          font-family: 'Inter', 'Roboto', sans-serif;
          font-style: normal;
          background-color: #fff;
          line-height: 1.25;
        }

        .gitfrog-pet {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -${frogSize / 2}px;
        }

        @media (min-width: 48rem) {
          .gitfrog-pet {
            bottom: ${frogSize + 60}px;
            opacity: 0.8;
            z-index: 0;
          }
        }

        .container {
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </>
  )
  const features = [
    {
      title: 'Asistente de código con IA',
      value:
        'Impulsa tu productividad con un copiloto inteligente que sugiere código mientras escribes.',
    },
    {
      title: 'Repos ilimitados',
      value:
        'Crea y colabora en proyectos públicos o privados sin restricciones, con seguridad desde el primer commit.',
    },
    {
      title: 'Revisiones de código integradas',
      value:
        'Mejora la calidad de tu software con herramientas de revisión colaborativas y fáciles de usar.',
    },
    {
      title: 'Comunidad global',
      value:
        'Comparte, aprende y colabora con devs de todo el mundo. Porque el código no se escribe solo (todavía).',
    },
  ]

  return (
    <ShowcaseLayout title="PucoUI | Gitfrog Signup" head={Metadata}>
      <div
        className="w-100 is-grid is-auto-rows-min md:is-auto-rows-fr"
        style={{ minHeight: '100vh', height: '100%' }}
      >
        {/*  */}
        <div
          className="p-6 md:py-9 md:px-7 is-vstack is-col-12 md:is-col-6 is-color-white is-relative"
          style={{
            backgroundImage:
              'url(/pucoui/showcase/register/gitfrog/pucoui-gitfrog-bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            backgroundSize: 'cover',
          }}
        >
          <div className="is-stack is-gap-4 pb-6 container">
            <div className="is-block md:is-hidden">
              ¿Ya tienes una cuenta? <a href="#">Signin →</a>
            </div>
            <h1 className="h4">Crea una cuenta completamente gratis</h1>
            <div>
              Explora las funcionalidades que Gitfrog tiene para ti y las
              empresas
            </div>
            <details className="details">
              <summary>Mira nuestras funcionalidades</summary>
              <ul className="is-stack is-gap-4 mt-5">
                {features.map((item, index) => (
                  <li className="is-flex is-gap-2" key={index}>
                    <Icon icon="mdi:checkbox-marked-circle-auto-outline" />
                    <div className="is-stack is-gap-1">
                      <div className="is-font-medium">{item.title}</div>
                      <div>{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <Image
            src="/pucoui/showcase/register/gitfrog/pucoui-gitfrog-pet.png"
            size={frogSize}
            className="gitfrog-pet elevation-4 is-rounded"
          />
        </div>

        {/* FORM */}
        <div className="is-vstack is-col-12 md:is-col-6 p-6 md:py-3 md:px-7">
          <div className="container is-stack is-gap-4">
            <div className="is-hstack is-gap-2 is-justify-content-flex-end is-hidden md:is-flex">
              <span>¿Ya tienes una cuenta?</span> <a href="#">Signin →</a>
            </div>
            <h2 className="h3 mb-3 mt-4 md:mt-6">Registrate en Gitfrog</h2>
            <Field>
              <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
              />
              <FieldHelpText>
                La contraseña debe tener al menos 8 caracteres
              </FieldHelpText>
            </Field>

            <Field>
              <FieldLabel htmlFor="country">País</FieldLabel>
              <SelectNative id="country">
                <option>Perú</option>
                <option>Argentina</option>
                <option>Bolivia</option>
                <option>Brasil</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Ecuador</option>
                <option>Estados Unidos</option>
                <option>Mexico</option>
                <option>Paraguay</option>
                <option>Venezuela</option>
              </SelectNative>
            </Field>

            <Field>
              <FieldLabel>Preferencias de correo</FieldLabel>
              <CheckboxField>
                <Checkbox id="input2" />
                <CheckboxLabel htmlFor="input2">
                  Recibe ocacionalmente correos con nuevas funcionalidades de la
                  aplicación, no te preocupes no te enviaremos SPAM
                </CheckboxLabel>
              </CheckboxField>
            </Field>

            <Button className="w-100 mt-4" size="md">
              Crea una cuenta
            </Button>

            <div className="is-text-muted">
              Al crear una cuenta tu aceptas nuestros{' '}
              <a href="#">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseLayout>
  )
}
