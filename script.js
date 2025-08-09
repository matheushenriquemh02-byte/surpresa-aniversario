document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.background-hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.width = Math.random() * 20 + 10 + 'px';
        heart.style.height = heart.style.width;
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 500);
});

let currentPage = 1;

function startGame() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('home').style.opacity = '0';
    document.getElementById('game-question-1').style.display = 'flex';
    document.getElementById('game-question-1').style.opacity = '1';
}

function checkAnswer(questionNum, answerType) {
    if (answerType === 'correct') {
        const currentQuestion = document.getElementById(`game-question-${questionNum}`);
        currentQuestion.style.display = 'none';
        currentQuestion.style.opacity = '0';

        if (questionNum < 3) {
            const nextQuestion = document.getElementById(`game-question-${questionNum + 1}`);
            nextQuestion.style.display = 'flex';
            nextQuestion.style.opacity = '1';
        } else {
            const finalPage = document.getElementById('final-surprise');
            finalPage.style.display = 'flex';
            finalPage.style.opacity = '1';
        }
    } else {
        alert('Resposta incorreta! Tente novamente.');
    }
}

function selectOption(option) {
    const optionsContainer = document.querySelector('#final-surprise .options');
    const messageContainer = document.getElementById('choice-message');
    optionsContainer.style.display = 'none';

    if (option === 'praia') {
        messageContainer.innerHTML = 'É uma ótima escolha, meu amor! Prepare a roupa de banho, pois o nosso destino é a praia amanhã cedo!';
    } else if (option === 'restaurante') {
        messageContainer.innerHTML = 'É uma ótima escolha, meu amor! Prepare-se para uma noite especial no Oliva Gourmet! Nosso jantar será às 20h.';
    }

    messageContainer.classList.remove('hidden');
}