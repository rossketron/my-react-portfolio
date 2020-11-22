import Link from 'next/link'
import styles from './header.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <p className={styles.title}>Portfo<span>lio.</span></p>
        <ul className={styles.page_links}>
          <li><Link className={styles.link} href="/"><a>Home</a></Link></li>
          <li><Link className={styles.link} href="/aboutme"><a>About</a></Link></li>
          <li><Link className={styles.link} href="/projects"><a>Projects</a></Link></li>
          <li><Link className={styles.link} href="/contactme"><a>Contact</a></Link></li>
        </ul>
      </header>
    )
  }
}

export default Header