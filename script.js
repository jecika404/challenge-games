function game() {
    let p = 0;
    let c = 0;
    let gameover = document.querySelector('.game__gameover');

    const startGame = () => {
        const playBtn = document.querySelector('.game__intro-btn');
        const introScreen = document.querySelector('.game__intro');
        const match = document.querySelector('.game__match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });      
    }

    const play = () => {
        const options = document.querySelectorAll('.game__match-options .btn');
        const playerHand = document.querySelector('.game__match-hands--player');
        const computerHand = document.querySelector('.game__match-hands--computer');

        const computerOptions = ['rock', 'paper', 'scissors'];
        

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                compareHands(this.textContent, computerChoice);
                playerHand.src = `assets/images/${this.textContent}.png`;
                computerHand.src = `assets/images/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.score__player-result');
        const computerScore = document.querySelector('.score__computer-result');
        playerScore.textContent = p;
        computerScore.textContent = c;
        console.log(playerScore);
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.game__match-heading');
        
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }

        if(p === 5) {
            gameover.innerHTML = '<h1>Player Wins!!!</h1>';
            gameover.classList.add('fadeIn');
            return;
        }
 
        if(c === 5) {
            gameover.innerHTML = '<h1>Computer Wins!!!</h1>';
            gameover.classList.add('fadeIn');
            return;
        }

        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                p++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                c++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                c++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                p++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                c++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                p++;
                updateScore();
                return;
            }
        }
    };


    // Functions
    startGame();
    play();
};

game();