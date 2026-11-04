
import Button from "@/components/Button";
import editFuncionarioData, { getFuncionarioData } from "./actions";
import Input from "@/components/Input/Input";

export default async function Perfil() {
  const funcionario = await getFuncionarioData();

  const editAction = editFuncionarioData.brid(null, funcionario.id)
  return (<div>
    <h1>Meu Perfil</h1>

    <form action={editFuncionarioData}>
      <Input
        label="Nome Completo"
        required
        defaultValue={funcionario.nome}
        name="nome"
      />

      <Input
        label="Email"
        type="email"
        required
        defaultValue={funcionario.email}
        name="email"
      />

      <Input
        label="Telefone"
        required
        defaultValue={funcionario.telefone}
        name="telefone"
      />

      <Input
        label="Data de nascimento"
        required
        defaultValue={funcionario.nascimento}
        name="nascimento"
      />

      <Input
        label="CPF"
        required
        defaultValue={funcionario.cpf}
        name="cpf"
      />

      <Input
        label="Endereço"
        required
        defaultValue={funcionario.endereço}
        name="endereco"
      />

      <Input
        label="Cargo"
        required
        defaultValue={funcionario.cargo}
        name="cargo"
      />

      <Input
        label="Nova Senha"
        name="senha" />

      <Button type="submit">Salvar Alterações</Button>
    </form>
  </div>);
}
