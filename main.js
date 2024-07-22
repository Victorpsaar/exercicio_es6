const alunos = ['Victor', 'Rafael', 'Paulo', 'Miguel', 'João', 'Kevin', 'Diego', 'Lucas', 'Igor']
const notas = [7, 8, 3, 0, 10, 6, 5, 8, 2]

//Pelo que eu entendi, o primeiro parametro que é passado na função é o item do array, enquanto o segundo a sua posição.
const alunosNotas = alunos.map((name,position) => {
    return {
        nome: name,
        nota: notas[position]
    }
})

const media = alunosNotas.reduce((res, quantidade) => {
    return (res + quantidade.nota)
}, 0) / alunosNotas.length 

const aprovados = alunosNotas.filter((alunosNotas) => (alunosNotas.nota >= 6))

console.log(`Os seguintes alunos foram aprovados:`)
for (let i = 0; i < aprovados.length; i++) {
    console.log(`Nome: ${aprovados[i].nome} com a nota: ${aprovados[i].nota}`)
}
console.log(`A média da nota dos alunos foi: ${media.toFixed(1)}`)