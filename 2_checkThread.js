const thread = require('./drafts/draft_221352.js');

let limit = 280;

let checkThread = e => {

    if ( e.length > limit ) {
        console.log("Fail: " + e )
    } else {
        console.log("Pass")
    }
}

for ( let node of thread ) {
    checkThread( node )
}