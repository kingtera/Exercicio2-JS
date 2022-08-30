function calculaMedia(objectStudent) {
    const media = (objectStudent.test1 + objectStudent.test2) / 2
    return media
}

const numberOfStudents = Number(prompt("Quantos estudantes você deseja cadastrar?"))

let listOfStudents = []

let cont = 1
while(cont <= numberOfStudents){
    const student = {
        name: "",
        test1: 0,
        test2: 0
    }

    student.name = prompt(`Digite o nome do ${cont}o estudante: `)
    student.test1 = Number(prompt(`Digite a nota da primeira prova de ${student.name}: `))
    student.test2 = Number(prompt(`Digite a nota da segunda prova de ${student.name}: `))

    listOfStudents.push(student)
    cont++
}

for(student of listOfStudents) {
    const mediaOfStudent = calculaMedia(student)

    if(mediaOfStudent < 7) {
        alert(`Média do aluno ${student.name}: ${mediaOfStudent}
        Puxa ${student.name}, não foi dessa vez. Vamos continuar estudando para aprender e passar na próxima!`)
    } else if(mediaOfStudent >= 7) {
        alert(`Média do aluno ${student.name}: ${mediaOfStudent}
        Parabéns ${student.name}! Você foi aprovado(a)!`)
    }
}