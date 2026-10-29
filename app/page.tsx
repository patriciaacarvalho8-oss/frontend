import Button from "@/components/Button";
import styles from "./page.module.css";
import { login } from "./actions";

export default function Login() {

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <button
          type="button"
          className={styles.iconButton}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <button
          type="button"
          className={styles.iconButton}
          aria-label="Notificações"
        >
          ♧
        </button>
      </header>

      <section className={styles.main}>
        <form className={styles.form} action={login}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>

            <input
              id="email" name="email"
              type="email"
              placeholder="nome@escola.edu.pr"

              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha">
              Senha <span>*</span>
            </label>

            <input
              id="senha"
              type="password"
              placeholder="********"
              required
              name="senha"
            />
          </div>

            <Button
              type="submit"
              variant="secondary"
            >
              ENTRAR
            </Button>
        </form>
      </section>
    </main>
  );
}