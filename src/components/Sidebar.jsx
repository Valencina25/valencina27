export default function Sidebar({ sobreMi, categorias, textos }) {
  return (
    <aside>
      <div className="widget" id="sobre-mi">
        <h3>{textos.sobreMi}</h3>
        <p>{sobreMi.descripcion}</p>
      </div>

      <div className="widget">
        <h3>{textos.documentos}</h3>
        <ul>
          <li><a href={textos.pdf.archivo}>{textos.pdf.titulo}</a></li>
        </ul>
      </div>

      <div className="widget">
        <h3>{textos.categorias}</h3>
        <ul>
          {categorias.map((cat, i) => (
            <li key={i}><a href="#">{cat}</a></li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
