const utils = require('./utils');


// Sample of a post
const post = `I start a thread on Loopring $LRC. Why I think they are building something much bigger than an exchange:

First highlight is Loopring's Support Desk. As a comparison, Terra offers "support" only via Discord and provided "by the community" - whatever that means 👀

Unlike Terra, Loopring has an official Support Desk. This is pretty cool and might be understimated by us cryptonatives, but a support system is required for mass adoption.

Loopring already has a direct on-ramp onto their L2 exchange. This is great for newjoiners, it's easier than ever to enjoy a low-fees trading experience.

Now my favorite part: the NFTs developments :) Have you seen Loopring's the dynamic NFTs? Their Loopheads NFTs will change their image acoording to changes in $LRC prices

Next Loopring can launch NFTs that change their image according to another event - like a football match or a battle game 🤔

Also you'll be able to mint your own NFTs into your own contract. If you build an avatar accesory, you'll be able to mint it and sell it on Loopring

Since Loopring just moved into Decentraland, it hints their interest on this Metaverse. The NFTs you mint on Loopring might be wearables on your Decentraland avatar.

Loopring is also building a solution to deploy out-of-the-box NFTs for "partners" - this could resemble to Steam model, where devs can publish their own games

As a recap, if Loopring is building an NFT-based game, it could be one that let devs build their own games & accesories and deploy them directly onto L2 with low fees 🤯

And on top of that, the upcoming LoopringDAO might be the body that curates/vote for games or NFT artists to be funded.

Overall, it looks like Loopring is building something big on the NFT space and we are witnessing how they build the pieces of the entire puzzle.

A word of caution, Grayscale announced in June 2021 that they were researching $LRC together with other tokens. All the other tokens, already have a Trust registered in Delaware except for $LRC 👀`;

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
