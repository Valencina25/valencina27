export default function ArticleList({ articulos, textos }) {
  return (
    <section id="articulos">
      <h2>{textos.tituloArticulos}</h2>
      {articulos.map(articulo => (
        <article className="post" key={articulo.id}>
          {articulo.imagen && (
            <img src={articulo.imagen} alt={articulo.titulo} />
          )}
          <h3>{articulo.titulo}</h3>
          <p className="fecha">{articulo.fecha}</p>
          {articulo.contenido.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
          <a href="#">{textos.leerMas}</a>
        </article>
      ))}
    </section>
  )
}
