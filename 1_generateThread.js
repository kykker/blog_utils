const utils = require('./utils');


// Sample of a post
const post = `Loopring looks great and the pace they are developing is impressing.
Here I outline what I find the most interesting in this project.
Above all, what can we expect from Loopring's Devs in the near future:

First, they already have an on-ramp straight to L2. Your normies friends can now enjoy DeFi benefits without worrying about gas fees.

Second, they are working on mutable NFTs. NFTs that are dynamic based on external factors, not just a static picture.

Third, they are working on in-game generated items. This gets closer ties with the hyped GameStop partnership`;

// Twitter's characters limit - some characters that will be added as prefix
let limit = 273;
let threadLength = Math.ceil( (post.length)/limit );
let threadArray = [];

for ( let i = 1; i < threadLength + 1; i++ ) {
    let subStr = post.substring( ( i - 1 ) * limit , ( i * limit ) );
    let tweet =  i + "/" + threadLength + " " + subStr;
    threadArray.push( tweet );
}



let threadString = JSON.stringify( threadArray );
// console.log(threadString)

let output = "module.exports = " + threadString ;

const time = utils.time;

let filePath = `./drafts/draft_${time}.js`;

utils.saveFile( filePath, output );



// post.forEach(e => console.log(e.length))
