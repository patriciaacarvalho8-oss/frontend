
import { getAlunoLista } from "./actions";
import styles from "./page.module.css";
import Link from "next/link";

interface Aluno {
    id: number;
    nome: string;
    cpf: string;
    cursos: {
        id: number;
        Nome: string;
    }[];
}

export default async function Alunos() {
    const alunos = await getAlunoLista();

    const listaAlunos: Aluno[] = Array.isArray(alunos) ? alunos : [];

    return (
        <main className={styles.page}>

            <header className={styles.header}>
                <Link href="/menu" className={styles.backButton}>
                    ← Voltar ao menu
                </Link>

                <div className={styles.profile}>
                    PA
                </div>
            </header>

            <section className={styles.main}>

                <h1 className={styles.title}>
                    Alunos
                </h1>

                <div className={styles.actions}>

                    <div className={styles.search}>
                        <span>⌕</span>

                        <input
                            type="text"
                            placeholder="Buscar aluno..."
                        />
                    </div>

                    <Link href="/alunos/novo" className={styles.newButton}>
                        + Novo aluno
                    </Link>

                </div>

                {typeof alunos === "string" && (
                    <p>{alunos}</p>
                )}

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
                            {listaAlunos.length > 0 ? (
                                listaAlunos.map((aluno) => (
                                    <tr key={aluno.id}>
                                        <td>{aluno.nome}</td>

                                        <td>{aluno.cpf}</td>

                                        <td>
                                            {aluno.cursos?.length > 0
                                                ? aluno.cursos.map(
                                                    (curso) => curso.Nome
                                                ).join(", ")
                                                : "Sem cursos"}
                                        </td>

                                        <td>
                                            <div className={styles.buttons}>

                                                <Link
                                                    href={`/alunos/${aluno.id}`}
                                                    className={styles.editButton}
                                                    title="Editar aluno"
                                                >
                                                    ✎
                                                </Link>

                                                <button
                                                    className={styles.deleteButton}
                                                    title="Excluir aluno"
                                                >
                                                    ×
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>
                                        Nenhum aluno encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>

            </section>

        </main>
    );
}
