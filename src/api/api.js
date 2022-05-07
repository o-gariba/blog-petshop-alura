// Vamos usar axios para nos conectar com o json-server
/*
    exportamos uma const chamada api que chama o axios.create({baseURL: 'http://localhost:5000'})

    exportamos a função busca (async), que possui a função resposta que é o api.get(url), setDado(resposta.data)

    Criamos um novo componente, ListaPost que vai usar a função busca da api.

    Apago o post exemplo na página principal da app
 */

import Axios from "axios";

export const api = Axios.create(
    {
        baseURL: 'http://localhost:5000'
    }
)

export default async function busca(url, setDado) {
    const resposta = await api.get(url)
    setDado(resposta.data)
}