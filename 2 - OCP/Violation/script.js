function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1. Sim')
                console.log('2. Não')
                break;
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`)
                })
                break;
            case 'text':
                console.log('Resposta: _____________')
                break;
            case 'range':
                console.log('Mínimo: _____________')
                console.log('Máximo: _____________')
            default:
                break;
        }
        console.log('')
    });
}

const questions = [
    {
        type: 'boolean',
        description: 'Você sabe POO?'
    },
    {
        type: 'multipleChoice',
        description: 'Qual sua linguagem predileta?',
        options: ['JS', 'Java', 'C++', "C"]
    },
    {
        type: 'text',
        description: 'Qual a característica que você mais gosta nessa linguagem?',
    },
    {
        type: 'range',
        description: 'Quantas horas por dia você pretende estudar?'
    }
]

printQuiz(questions);