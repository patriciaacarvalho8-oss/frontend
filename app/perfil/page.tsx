
import { getFuncionarioData } from "./actions";
import styles from "./page.module.css";
import Link from "next/link";

interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    nascimento: string;
}

export default async function Perfil() {
    const funcionario = await getFuncionarioData();

    if (typeof funcionario === "string") {
        return (
            <main className={styles.page}>
                <p>{funcionario}</p>
            </main>
        );
    }

    const dados = funcionario as Funcionario;

    return (
        <main className={styles.page}>

            <header className={styles.profileHeader}>

                <div className={styles.avatarContainer}>

                    <div className={styles.avatar}>
                        <svg
                            viewBox="0 0 24 24"
                            width="105"
                            height="105"
                            fill="#800000"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                        </svg>
                    </div>

                    <button
                        type="button"
                        className={styles.cameraButton}
                        aria-label="Alterar foto de perfil"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="25"
                            height="25"
                            fill="none"
                            stroke="#800000"
                            strokeWidth="2"
                        >
                            <path d="M3 7h4l2-3h6l2 3h4v13H3z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                    </button>

                </div>

                <h1 className={styles.name}>
                    {dados.nome}
                </h1>

            </header>

            <section className={styles.content}>

                <div className={styles.fields}>

                    <div className={styles.field}>
                        <label>CPF:</label>
                        <input
                            type="text"
                            value={dados.cpf || ""}
                            readOnly
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Telefone:</label>
                        <input
                            type="text"
                            value={dados.telefone || ""}
                            readOnly
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={dados.email || ""}
                            readOnly
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Data de nascimento:</label>
                        <input
                            type="text"
                            value={dados.nascimento
                                ? new Date(dados.nascimento).toLocaleDateString("pt-BR", {
                                    timeZone: "UTC"
                                })
                                : ""}
                            readOnly
                        />
                    </div>

                </div>

                <div className={styles.footer}>
                    <Link href="/" className={styles.exitButton}>
                        Sair
                    </Link>
                </div>

            </section>

        </main>
    );
}
