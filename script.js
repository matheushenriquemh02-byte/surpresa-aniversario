document.addEventListener('DOMContentLoaded', () => {
    // Lógica para os corações de fundo que flutuam
    const heartContainer = document.querySelector('.background-hearts');
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 30 + 'vh'; // Inicia em algum lugar entre 0 e 30% da altura da tela
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = Math.random() * 6 + 8 + 's';
        heart.style.width = Math.random() * 10 + 10 + 'px';
        heart.style.height = heart.style.width;
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000);
    }
    setInterval(createFloatingHeart, 700);

    // Lógica para os corações que caem
    function createFallingHeart() {
        const fallingHeart = document.createElement('div');
        fallingHeart.classList.add('falling-heart');
        fallingHeart.style.left = Math.random() * 100 + 'vw';
        fallingHeart.style.animationDuration = Math.random() * 8 + 10 + 's';
        fallingHeart.style.animationDelay = Math.random() * 10 + 's';
        document.body.appendChild(fallingHeart);

        setTimeout(() => {
            fallingHeart.remove();
        }, 20000);
    }
    setInterval(createFallingHeart, 1200);
});

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