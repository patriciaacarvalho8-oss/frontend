"use client";

import { useState } from "react";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !senha) {
      return;
    }

    console.log("Login:", email);

    // Depois conectaremos ao backend.
  }

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>

            <input
              id="email"
              type="email"
              placeholder="nome@escola.edu.pr"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />
          </div>

          <div className={styles.buttonContainer}>
            <Button
              type="submit"
              variant="secondary"
              className={styles.loginButton}
            >
              ENTRAR
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}