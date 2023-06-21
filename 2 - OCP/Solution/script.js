class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. Sim')
        console.log('2. Não')
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Resposta: _____________')
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Mínimo: _____________')
        console.log('Máximo: _____________')
    }
}

function printQuiz(questions)
{
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoices()
        console.log('')
    })
}

const questions = [
    new BooleanQuestion('Você sabe POO?'),
    new MultipleChoiceQuestion('Qual sua linguagem predileta?', ['JS', 'Java', 'C++', "C"]),
    new TextQuestion('Qual a característica que você mais gosta nessa linguagem?'),
    new RangeQuestion('Quantas horas por dia você pretende estudar?')
]

printQuiz(questions)