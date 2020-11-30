document.addEventListener('DOMContentLoaded', () => {
    //creamos un array con todas las cartas
    const cardArray     = [ 
        {
            name: 'cloud',
            img: 'images/cloud.png'
        },
        {
            name: 'cloud',
            img: 'images/cloud.png'
        },
        {
            name: 'kairi',
            img: 'images/kairi.png'
        },
        {
            name: 'kairi',
            img: 'images/kairi.png'
        },
        {
            name: 'roxas',
            img: 'images/roxas.png'
        },
        {
            name: 'roxas',
            img: 'images/roxas.png'
        },
        {
            name: 'riku',
            img: 'images/riku.png'
        },
        {
            name: 'riku',
            img: 'images/riku.png'
        },
        {
            name: 'sora',
            img: 'images/sora.png'
        },
        {
            name: 'sora',
            img: 'images/sora.png'
        },
        {
            name: 'axel',
            img: 'images/axel.png'
        },
        {
            name: 'axel',
            img: 'images/axel.png'
        }
    ];

    cardArray.sort(()   => 0.5 - Math.random());
    const grid          = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    var cardsChosen =   [];
    var cardsCoshenId = [];
    var cardsWon =      [];

    //createboard
    function createboard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    };

    //check matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsCoshenId[0];
        const optionTwoId = cardsCoshenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white1.png');
            cards[optionTwoId].setAttribute('src', 'images/white1.png');
            cardsWon.push(cardsChosen);
        } else{
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Try again');
        }
        
        cardsChosen = [];
        cardsCoshenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations you won';
        };
    };


    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsCoshenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        };
    };

    createboard();

})