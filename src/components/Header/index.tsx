import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.css';
import Link from 'next/link';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <button type="button" className={styles.buttons}>
          <img src="/logo.svg" alt="Podcastr" />
        </button>
      </Link>
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}