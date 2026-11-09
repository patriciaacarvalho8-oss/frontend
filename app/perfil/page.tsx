
import Button from "@/components/Button";
import editFuncionarioData, { getFuncionarioData } from "./actions";
import Input from "@/components/Input/Input";
import styles from "./page.module.css";

export default async function Perfil() {
  const funcionario = await getFuncionarioData();

  const editAction = editFuncionarioData.bind(null, funcionario.id);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.photo}> 
        </div>

        <h1>{funcionario.nome}</h1>
      </header>

      <section className={styles.content}>
        <form action={editAction} className={styles.form}>

          <div className={styles.field}>
            <Input
              label="CPF"
              required
              defaultValue={funcionario.cpf}
              name="cpf"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Telefone"
              required
              defaultValue={funcionario.telefone}
              name="telefone"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Email"
              type="email"
              required
              defaultValue={funcionario.email}
              name="email"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Data de nascimento"
              required
              defaultValue={funcionario.nascimento}
              name="nascimento"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Nome Completo"
              required
              defaultValue={funcionario.nome}
              name="nome"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Endereço"
              required
              defaultValue={funcionario.endereço}
              name="endereco"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Cargo"
              required
              defaultValue={funcionario.cargo}
              name="cargo"
            />
          </div>

          <div className={styles.field}>
            <Input
              label="Nova Senha"
              name="senha"
            />
          </div>

          <div className={styles.buttonContainer}>
            <Button type="submit">Salvar Alterações</Button>
          </div>

        </form>
      </section>
    </main>
  );
}
