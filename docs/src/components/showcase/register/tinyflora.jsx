import ShowcaseLayout from '../../docs/showcase/ShowcaseLayout'
import { tinyfloraClasses } from '../../html/showcase/register/tinyflora/TinyfloraClass'
import { tinyfloraFontStyles } from '../../html/showcase/register/tinyflora/TinyfloraFont'
import { tinyfloraThemeStyle } from '../../html/showcase/register/tinyflora/TinyfloraTheme'
import { Button } from '../../pucoui/Button'
import { Field, FieldLabel } from '../../pucoui/Field'
import { Image } from '../../pucoui/Image'
import { Input } from '../../pucoui/Input'
import ReactComment from '../../ReactComment'

export default function () {
  const Metadata = (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        ${tinyfloraThemeStyle}
        ${tinyfloraFontStyles}
        ${tinyfloraClasses}
      `}</style>
    </>
  )
  return (
    <ShowcaseLayout title="PucoUI | Tinyflora Signup" head={Metadata}>
      <div className="w-100 is-grid" style={{ height: '100vh' }}>
        {'\n\n'}
        <ReactComment text="CONTENT" />
        <div className="is-col-12 md:is-col-5 px-6">
          <div className="is-flex is-flex-column h-100">
            {'\n\n'}
            <ReactComment text="HEADER" />
            <div className="py-5 is-vstack">
              <Image
                src="/pucoui/showcase/register/tinyflora/tinyflora-logo.svg"
                alt="Tinyflora logo"
                className="w-100"
                style={{ maxWidth: '160px' }}
              />
            </div>

            {'\n\n'}
            <ReactComment text="CONTENT" />
            <div className="is-flex-1 is-stack is-justify-content-center is-gap-6">
              {'\n\n'}
              <ReactComment text="CONTENT HEADER" />
              <div className="is-text-center is-vstack is-gap-2">
                <h1>Bienvenido</h1>
                <h6 className="is-font-normal is-text-muted">
                  Para iniciar sesión en tu cuenta, ingresa tu dirección de
                  correo electrónico y contraseña
                </h6>
              </div>

              {'\n\n'}
              <ReactComment text="CONTENT FORM" />
              <section className="is-stack is-gap-4">
                <Field>
                  <FieldLabel>Correo electrónico</FieldLabel>
                  <Input
                    type="password"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </Field>

                <Field>
                  <FieldLabel>Contraseña</FieldLabel>
                  <Input type="password" placeholder="Ingresa tu contraseña" />
                </Field>

                <Button className="w-100 mt-4" size="md">
                  Ingresar
                </Button>
              </section>

              {'\n\n'}
              <ReactComment text="CONTENT FOOTER" />
              <div className="is-vstack is-gap-1 is-text-center">
                <div>No dudes en ponerte en contacto con nosotros</div>
                <a href="#">support@pucoui.com</a>
              </div>
            </div>

            {'\n\n'}
            <ReactComment text="FOOTER" />
            <div className="is-text-center py-5 is-text-muted-2 is-font-size-7">
              Todos los derechos reservados
            </div>
          </div>
        </div>

        {'\n\n'}
        <ReactComment text="IMAGE" />
        <div
          className="is-col-7 is-vstack is-justify-content-center px-5 is-hidden md:is-flex"
          style={{
            backgroundImage:
              'url(/pucoui/showcase/register/tinyflora/tinyflora-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="px-5 py-6 w-100 is-rounded-4 blur-card elevation-5 is-color-white is-stack is-gap-4"
            style={{ maxWidth: '400px' }}
          >
            <img
              src="/pucoui/showcase/register/tinyflora/tinyflora-icon-negative.svg"
              alt="Tinyflora"
              className="w-100"
              style={{ maxWidth: '60px' }}
            />
            <div className="is-stack">
              <h3 className="is-font-semi-bold">Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis harum aut nesciunt ea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseLayout>
  )
}
