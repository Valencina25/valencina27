export default function Contact({ contacto, textos }) {
  return (
    <section id="contacto" className="contacto">
      <h2>{textos.contacto}</h2>
      <p>Email: <a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
      <p>Teléfono: {contacto.telefono}</p>
      <a className="btn-contacto" href={`mailto:${contacto.email}?subject=Contacto%20desde%20el%20blog`}>
        {textos.enviar}
      </a>
    </section>
  )
}
