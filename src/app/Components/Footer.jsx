import styles from './Footer.module.css';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footertext}>&copy; {new Date().getFullYear()} Checklist de Viagem Inteligente. Todos os direitos reservados.</p>
          <div className={styles.footerlinks}>
            <a href="https://github.com/RoberthVieira">GitHub</a>
            <a href="https://www.linkedin.com/feed/">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }