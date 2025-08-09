document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.background-hearts');

    function createFloatingHeart() {
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

    setInterval(createFloatingHeart, 500);
});

let currentPage = 1;

function createRisingHeart(button) {
    const risingHeart = document.createElement('div');
    risingHeart.classList.add('rising-heart');
    button.appendChild(risingHeart);

    const buttonRect = button.getBoundingClientRect();
    risingHeart.style.left = `${buttonRect.width / 2}px`;
    risingHeart.style.top = `${buttonRect.height / 2}px`;

    setTimeout(() => {
        risingHeart.remove();
    }, 2000);
}

function startGame(button) {
    createRisingHeart(button);
    
    document.getElementById('home').classList.add('hidden');
    
    setTimeout(() => {
        document.getElementById('game-question-1').classList.remove('hidden');
    }, 1000);
}

function checkAnswer(questionNum, answerType, button) {
    createRisingHeart(button);

    if (answerType === 'correct') {
        const currentQuestion = document.getElementById(`game-question-${questionNum}`);
        currentQuestion.classList.add('hidden');
        
        setTimeout(() => {
            if (questionNum < 3) {
                const nextQuestion = document.getElementById(`game-question-${questionNum + 1}`);
                nextQuestion.classList.remove('hidden');
            } else {
                const choicePage = document.getElementById('choice-page');
                choicePage.classList.remove('hidden');
            }
        }, 1000);
    } else {
        alert('Resposta incorreta! Tente novamente.');
    }
}

function revealSurprise(choice, button) {
    createRisingHeart(button);

    document.getElementById('choice-page').classList.add('hidden');

    setTimeout(() => {
        if (choice === 'restaurant') {
            document.getElementById('final-restaurant').classList.remove('hidden');
        } else if (choice === 'beach') {
            document.getElementById('final-beach').classList.remove('hidden');
        }
    }, 1000);
}