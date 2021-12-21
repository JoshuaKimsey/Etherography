# Etherography

<p align="center">
    <img width="500px" src="https://joshuakimsey.github.io/Etherography/Resources/Etherography-Logo.png" alt="Etherography Logo">
    <h1>Etherography</h1>
    <h3>A New Way To Look At The Ethereum Blockchain</h3>
</p>

 ## Table of Contents

 - [Description](#description)
 - [Use Cases](#use-cases)
 - [Inspiration](#inspiration)
 - [Implementation](#implementation)
 - [Plans](#plans)
 - [Contributing](#contributing)
 - [Sources](#sources)
 - [License](#license)

## Description

Etherography is a unique was of viewing each block on the Ethereum blockchain. Each Etherograph is generated from an Ethereum block using it's hash value. Because each hash is unique, no two Etherograph images generated from the Ethereum blockchain will ever be the same. The result is that each Etherograph you see will always be different, a unique representation of that block and that block alone.

## Use Cases

Though for most practical matters, representing this for a block on a blockchain, be it Ethereum or another one, is likely not that useful beyond being a novelty. It could have some usefulness in representing the transactions in a block itself, as this same method can be applied to that. It can act as a unique identifier for each transaction, allowing a user to see that their transaction has been received by the blockchain correctly, and giving them a unique visual feedback for it.

For novelty uses, this method of representing blockchain data visually could be easily expanded. It's easily conceivable that such methods could be applied to blockchain data to create truly unique forms of art, with each block generating a new piece of art that will never be replicated again on that blockchain. This is something I intend to do, albeit in a less advanced way, with my application here.

## Inspiration

Orignally, I had envisioned this idea for use on another blockchain network called Steem. I actually had a working prototype working for the Steem blockchain that functioned not unlike this version here. Eventually, however, issues with the network and the increasing difficulty of finding an easy JavaScript API implementation meant I put the idea on hold. However, recently I came to discover that Ethereum had a simple and easy to use JavaScript front-end API. With a bit of adapting, the program you see here was born.

This idea for how to view such data is not novel to myself, however, as it is actually a form of [Steganography](https://en.wikipedia.org/wiki/Steganography). Perhaps one of the most famous ways data has been represented this way was it's usage in the [Free Speech Flag](https://en.wikipedia.org/wiki/Free_Speech_Flag) created by John Marcotte using the encryption keys for HD-DVD's and Blu-Rays. This stirred a wider debate on what represented copyright enfringement and what was free speech. It's an absolutely fascinating story, and I am quite proud to say his creation served as a strong inspiration for this project.

## Implementation

Each Ethereum block has a 64 character hexadecimal hash that identifies it. Because hexadecimal can also be used to represent colors, it means that hash for an Ethereum block can do so as well. The 64 character hash is broken up into 10 groups, which are 6 digits each, that correspond to a certain color. Each color is generated and placed into a barcode like pattern in the image. The remaining 4 characters of the hash are then shown in the bottom-left corner, thereby representing the entire hash of that Ethereum block.

The API itself provides an easy way to listen for new blocks as they are mined on the blockchain, meaning they are automatically received and generate a new Etherograph. This is combined with the ability for users to search for blocks and see what past mined blocks look like as well. In the future, I may add the ability to search for specific transactions as well, given they too have their own unique identifying hashes.

## Plans

- [X] Create Working Version That Generates New Etherographs For Each New Block
- [X] Add Ability For Users To Search For Past Blocks To See Their Etherographs
- [ ] Include Information About Etherographs To The Main Website Itself
- [ ] Add Ability To Download Etherographs As PNG Files From The Current SVG Format
- [ ] Create More Ways Of Generating Images From Ethereum Block Hash Data
- [ ] Potentially Add Ways Of Generating Data From Other Blockchains, Such As BitCoin, As Well (My Become Its Own Project)

## Contributing

If you would like to contribute to this project, by either adding new features, improving on existing features, or fixing bugs that crops up, please feel free to do so. Just open an issue and describe what it is you would like to do or have done. Alternatively, if you would like to directly contribute to the project, just fork it, make the changes you would like to, and then make a merge request back to the project. I may add more branches to the project as it advances, this information will be updated if I do so.

## Sources

- Inspiration: John Marcotte and his Free Speech Flag
- HTML Library: [MaterializeCSS](https://materializecss.github.io/materialize/)
- Ethereum JavaScript API: [Ethers.js](https://github.com/ethers-io/ethers.js/)
- Logo: [Pixabay (CC0)](https://pixabay.com/vectors/ethereum-logo-ethereum-icon-6278328/)
- Background: [Steem (subject to change...)](https://steem.com/brand/)

## License

MIT License

Copyright (c) 2021 Joshua Kimsey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
