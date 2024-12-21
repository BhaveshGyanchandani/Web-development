export function Log({turns }){

    // And the idea behind this log component here is in the end that it's simply outputs an ordered listwith an ID of log for styling reasons where we output information about the different turns we had in our game thus far so that we can simply see which turns were taken by the different players whilst playing that game.

    return <ol id="log">
        {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`} >
            {/* `` with $ inside can be used to dynamically construct a string  `${}` */}
            {turn.player} selected {turn.square.row}, {turn.square.col}
            </li>)}

    </ol>
}