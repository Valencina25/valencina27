export default function Header({ titulo, nav }) {
  return (
    <header>
      <h1>{titulo}</h1>
      <nav>
        {nav.map(item => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}
