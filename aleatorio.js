const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];
const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda","Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
const nome = aleatorio(nomes);
const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda","Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
import {aleatorio, nome} from './aleatorio.js';caixaPerguntas.textContent = "Em 2049, …";
caixaPerguntas.textContent = `Em 2049, ${nome}`;
function substituiNome(){
    for(const pergunta of perguntas){
        
    }
}function substituiNome(){
for(const pergunta of perguntas){
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];
const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda","Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

