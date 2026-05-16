export default function Contact({ contacto, textos }) {
  return (
    <section id="contacto" className="contacto">
      <h2>{textos.contacto}</h2>
      <p>Email: <a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
      <p>Teléfono: {contacto.telefono}</p>
      <form action={`mailto:${contacto.email}`} method="GET" encType="text/plain">
        <input type="text" name="nombre" placeholder={textos.nombrePlaceholder} required />
        <input type="email" name="email" placeholder={textos.emailPlaceholder} required />
        <textarea name="mensaje" placeholder={textos.mensajePlaceholder} rows="4" required />
        <button type="submit">{textos.enviar}</button>
      </form>
    </section>
  )
}
