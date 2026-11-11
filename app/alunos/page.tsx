
import { getAlunoLista } from "./actions";
import styles from "./page.module.css";

export default async function Alunos() {
    const alunos = await getAlunoLista();
    console.log(alunos);

    return (
        <main className={styles.page}>

            <header className={styles.header}>
                <button className={styles.backButton}>
                    ← Voltar ao menu
                </button>

                <div className={styles.profile}>
                    PA
                </div>
            </header>

            <section className={styles.main}>

                <h1 className={styles.title}>Alunos</h1>

                <div className={styles.actions}>
                    <div className={styles.search}>
                        <input
                            type="text"
                            placeholder="Buscar aluno..."
                        />
                    </div>

                    <button className={styles.newButton}>
                        + Novo aluno
                    </button>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Cursos</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Array.isArray(alunos) && alunos.map((aluno) => (
                                <tr key={alunos.id}>
                                    <td>{alunos.nome}</td>
                                    <td>{alunos.cpf}</td>
                                    <td>{alunos.cursos.length}</td>
                                    <td>
                                        <div className={styles.buttons}>
                                            <button className={styles.editButton}>
                                                ✎
                                            </button>

                                            <button className={styles.deleteButton}>
                                                ♧
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section>
        </main>
    );
}
