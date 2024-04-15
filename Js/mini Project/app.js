let choices = document.querySelectorAll(".img_con");

choices.forEach((val) => {
    let choice = val.childNodes[1];
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playgame(userChoice);
    })
});

const message = document.querySelector('.msg_container');
let uCount = 0;
let cCount = 0;

const computerGen = () => {
    let index = Math.floor(Math.random() * 3);
    let possible = ['rock', 'paper', 'Scissors'];
    return possible[index];
}

const showWinner = (user, computer) => {
    if (user == computer) {
        message.innerText = 'Draw the game play again !! ';
        message.style.backgroundColor = 'white';
        message.style.color = '#333';
    } else {
        let uwin = true;
        if (user == 'rock') {
            uwin = computer == 'paper' ? false : true;
        } else if (user == 'paper') {
            uwin = computer == 'Scissors' ? false : true;
        } else {
            uwin = computer == 'rock' ? false : true;
        }
        if (uwin) {
            message.innerText = `User won \nUser ${user} computer ${computer}`;
            let set = document.querySelector('#you');
            uCount++;
            set.innerText = uCount;
            message.style.backgroundColor = 'greenyellow';
            message.style.color = '#333';
        }
        else {
            message.style.backgroundColor = 'red';
            message.style.color = 'white';
            let set = document.querySelector('#computer');
            message.innerText = `You Loss\nUser ${user} computer ${computer}`;
            cCount++;
            set.innerText = cCount;
        }
    }
}

const playgame = (userChoice) => {
    let computerChoice = computerGen();
    showWinner(userChoice, computerChoice);
}