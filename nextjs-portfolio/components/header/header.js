import React from 'react'
import ActiveLink from '../ActiveLink/ActiveLink';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <p className={styles.title}>Portfo<span>lio.</span></p>
      <ul className={styles.page_links}>
        <li>
          <ActiveLink href="/">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/aboutme">
            <a>About</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/projects">
            <a>Projects</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contactme">
            <a>Contact</a>
          </ActiveLink>
        </li>
      </ul>
    </header>
  )
}