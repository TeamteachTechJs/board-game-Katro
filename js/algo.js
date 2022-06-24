const max = 4

function katro(position, player, opponent){
    let poids = player[position];
    player[position++] = 0;

    while ( poids > 0 ) {
        for ( position; position < player.length && poids > 0 ; position++ && poids-- ) 
            player[position]++;
        
        if ( poids > 0 ) {
            position = 0;
            continue;
        }

        position--;

        console.log(position)
        if(player[position] > 1) {
            if ( position < max && (opponent[max - (position + 1)] > 0 || isVoid(opponent) && opponent[max+position] > 0 )) {
                let opPos = max - ( position + 1 );

                if ( isVoid( opponent ) )
                    opPos = max + position;
            
                poids = player[position] + opponent[opPos];
                opponent[opPos] = 0; 
            }
            else poids = player[position]
        
            player[position++] = 0;

            console.log(player)
        }
    }
}

function isVoid(player) {
    for (let i = 0; i < max; i++)
        if(player[i] > 0) return false
    return true
}

let p1 = [2, 2, 2, 2, 2, 2, 2, 2]
let p2 = [2, 2, 2, 2, 2, 2, 2, 2]

console.log(p2)
console.log(p1)

katro(0, p1, p2)