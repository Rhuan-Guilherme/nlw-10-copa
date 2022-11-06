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

        createCard('24/11', 'quinta', createGame('brasil', '16:00', 'serbia') + createGame('suica', '07:00', 'camaroes') + createGame('portugal', '13:00', 'gana') + createGame('uruguai', '10:00', 'coreia')) + 
        createCard('28/11', 'segunda', createGame('brasil', '13:00', 'suica') + createGame('camaroes', '07:00', 'serbia') + createGame('coreia', '10:00', 'gana') + createGame('portugal', '16:00', 'uruguai')) + 
        createCard('02/12', 'Sexta', createGame('brasil', '16:00', 'camaroes') + createGame('coreia', '12:00', 'portugal') + createGame('serbia', '16:00', 'suica') + createGame('gana', '12:00', 'uruguai')) 
        
    
