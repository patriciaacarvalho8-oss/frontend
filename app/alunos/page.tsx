import { getAlunoLista } from "./actions";

export default async function Alunos() {
    const alunos = await getAlunoLista();
    console.log(alunos);
    
    return(
        <div>
            <h1>Lista de Alunos</h1>
        </div>
    );
}