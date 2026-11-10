"use server"

import { cookies, headers } from "next/headers"

export async function getAlunoLista() {
    const cookieStore = await cookies();
    const token = cookieStore.get("@gestao-escolar/token")?.value;

    if (!token) {
        return "Erro: Token não econtrado";
    }

    let response: Response;
    try {
        response = await fetch(`${process.env.API_URL}/alunos`, {
            method: "GET",
        headers: {
                Authorization: `Bearer ${token}`
            },
            next:{tags: ["pegarListaAlunos"]}
        })
    } catch (e) { 
        console.error(e);
        return "falha na requisição";
    }

    const data = await response.json();
    return data;
}