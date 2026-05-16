import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import ArticleList from './components/ArticleList.jsx'
import Sidebar from './components/Sidebar.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error al cargar datos:', err))
  }, [])

  if (!data) return null

  return (
    <>
      <Header titulo={data.titulo} nav={data.nav} />
      <div className="container">
        <ArticleList articulos={data.articulos} textos={data.textos} />
        <Sidebar
          sobreMi={data.sobreMi}
          categorias={data.categorias}
          textos={data.textos}
        />
      </div>
      <Contact contacto={data.contacto} textos={data.textos} />
      <Footer textos={data.textos} />
    </>
  )
}
