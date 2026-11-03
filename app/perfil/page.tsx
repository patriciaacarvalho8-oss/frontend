
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Perfil() {
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

        <div className={styles.perfil}>

          <div className={styles.perfilHeader}>
            <div className={styles.fotoContainer}>
              <div className={styles.fotoPerfil}>
                <svg viewBox="0 0 160 160" width="160" height="160">
                  <circle cx="80" cy="80" r="80" fill="white" />
                  <circle cx="80" cy="47" r="20" fill="#800000" />
                  <path
                    d="M33 117C42 94 61 84 80 84C99 84 118 94 127 117C115 131 98 139 80 139C62 139 45 131 33 117Z"
                    fill="#800000"
                  />
                </svg>

                <button
                  type="button"
                  className={styles.cameraButton}
                  aria-label="Alterar foto"
                >
                  📷
                </button>
              </div>
            </div>

            <p className={styles.nomeUsuario}>
              Nome do usuario
            </p>
          </div>

          <div className={styles.perfilBody}>

            <div className={styles.campos}>

              <div className={styles.inputGroup}>
                <label htmlFor="cpf">CPF:</label>
                <input
                  id="cpf"
                  type="text"
                  value="837.462.926-48"
                  readOnly
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="telefone">Telefone:</label>
                <input
                  id="telefone"
                  type="text"
                  value="(00) 00000-0000"
                  readOnly
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  value="usuario@escola.edu.pr"
                  readOnly
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="nascimento">
                  Data de nascimento:
                </label>
                <input
                  id="nascimento"
                  type="text"
                  value="00/00/0000"
                  readOnly
                />
              </div>

            </div>

            <div className={styles.acoes}>
              <Button
                type="button"
                variant="secondary"
              >
                SAIR
              </Button>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
