function createGame(player1, hour, player2){
    return `
        <li>
            <img src="assets/icon-${player1}.svg" alt="${player2}">
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `
}

let delay = -0.3
function createCard(date, day, games){
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay:${delay}s">
            <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 

        createCard('24/11', 'quinta', createGame('brasil', '16:00', 'serbia') + createGame('suica', '16:00', 'camaroes')) + 
        createCard('28/11', 'segunda', createGame('brasil', '13:00', 'suica')) + 
        createCard('02/12', 'sexta', createGame('brasil', '16:00', 'camaroes'))
    
