function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1. Verdadeiro')
                console.log('2. Falso')
                break;
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`)
                })
                break;
            case 'text':
                console.log('Respnoda: _____________')
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
        description: 'Escreva a característica que você mais gosta nessa linguagem.',
    },
    {
        type: 'range',
        description: 'Quanto tempo para estudo você tem?'
    }
]

printQuiz(questions);