const links = [
  ['ABOUT', '#about'],
  ['EXPERIENCE', '#experience'],
  ['SYSTEMS', '#systems'],
  ['PROJECTS', '#projects'],
  ['FIELD NOTES', '#writing'],
  ['CONTACT', '#contact'],
]

export function Navigation() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#top"
        aria-label="Derek McDonell home"
      >
        <span
          className="brand-mark"
          aria-hidden="true"
        >
          DM
        </span>

        <span className="brand-copy">
          <strong>Derek McDonell</strong>
          <small>
            Systems / Hardware / Networks
          </small>
        </span>
      </a>

      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <span className="header-location">
        Lorton, VA
      </span>
    </header>
  )
}
