import Layout from '../layout/layout'
import Link from 'next/link'
import styles from './header.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <ul className={styles.page_links}>
          <li><Link className={styles.link} href="/"><a>Home</a></Link></li>
          <li><Link className={styles.link} href="/aboutme"><a>About Me</a></Link></li>
          <li><Link className={styles.link} href="/projects"><a>Projects</a></Link></li>
          <li><Link className={styles.link} href="/resume"><a>Resume</a></Link></li>
          <li><Link className={styles.link} href="/contactme"><a>Contact Me</a></Link></li>
        </ul>
      </header>
    )
  }
}

export default Header