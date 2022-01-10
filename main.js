// CREATED BY JOSHUA KIMSEY - MIT LICENSE

// Set Ether Network Defaults
const NETWORK = "homestead";
const provider = ethers.getDefaultProvider(NETWORK, {});
let largest_block

// Set Timer Defaults
let secondsSinceLastBlock = 0
setInterval(setTimer, 1000)

// Show Latest Block Data
function startProviderListener() {
    // Get Ether Block Hash Data
    provider.on("block", (blockNumber) => {
        getBlockData(blockNumber)
        largest_block = blockNumber
    })
}
async function getBlockData(blockNumber) {
    let blockData = await provider.getBlock(blockNumber)

    blockData = JSON.stringify(blockData.hash)

    createBarFlag(blockData.substr(3, blockData.length - 4), blockNumber)
    secondsSinceLastBlock = 0
}

// Show Static Block Data From User Input
function getUserBlockNumber() {
    let blockNumber = 0

    if (document.getElementById("blockNum").value != "" && document.getElementById("blockNum").value < largest_block) {
        blockNumber = parseInt(document.getElementById("blockNum").value)
        getStaticBlockData(blockNumber)
    } else {
        console.log("Invalid input: NaN or block size is too large.")
    }
}
async function getStaticBlockData(blockNumber) {
    provider.off("block")

    let blockData = await provider.getBlock(blockNumber)
    blockData = JSON.stringify(blockData.hash)

    createBarFlag(blockData.substr(3, blockData.length - 4), blockNumber)
}

// Create Barcode Pattern From Block Hash
function createBarFlag(blockHash, blockNumber) {
    const CHAR_IDENTIFIER = blockHash.slice(60).toUpperCase()
    const BLOCKHASHARRAY = blockHash.split('')
    const WIDTH = 100, HEIGHT = 1000
    let blockHashArrayCounter = 1
    let colorHex = ''
    let colorHexArray = []
    let colorHexArrayCounter = 0
    let svgRect = ''

    for (let index = 0; index < BLOCKHASHARRAY.length; index++) {
        colorHex = colorHex + BLOCKHASHARRAY[index]
        if (blockHashArrayCounter == 6) {
            colorHexArray[colorHexArrayCounter] = colorHex
            blockHashArrayCounter = 0
            colorHex = ''
            colorHexArrayCounter++
        }
        blockHashArrayCounter++
    }

    document.getElementById("barcode").innerHTML = ''
    
    for (let index = 0; index < colorHexArray.length; index++) {
        svgRect = svgRect + `<rect id="" width="${WIDTH}" height="${HEIGHT}" x="${index*100}" style="fill: #${colorHexArray[index]}" />`
    }
    svgRect = svgRect + `<text id="char" x="2" y="950" fill="white"
    style="position: absolute; color: white; font-size: 165px; font-family: 'Roboto Mono'; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">${CHAR_IDENTIFIER}</text>`

    document.getElementById("barcode").innerHTML = svgRect
    document.getElementById("userName").innerHTML = "Ethereum Block: " + blockNumber
    document.getElementById("label").innerHTML = "Enter Block Number (Max of " + largest_block + ")"
}

function setTimer() {
    document.getElementById("sec").innerHTML = secondsSinceLastBlock

    secondsSinceLastBlock++
}