// CREATED BY JOSHUA KIMSEY - MIT LICENSE

// Set Ether Network Defaults
const NETWORK = "homestead";
const provider = ethers.getDefaultProvider(NETWORK, {});
let largest_block
let showStaticData = false

// Set Timer Defaults
let secondsSinceLastBlock = 0
setInterval(setTimer, 1000)

function setTimer() {
    document.getElementById("sec").innerHTML = secondsSinceLastBlock

    secondsSinceLastBlock++
}

// Show Latest Block Data
async function startProviderListener() {
    // Get Ether Block Hash Data
    provider.on("block", (blockNumber) => {
        getBlockData(blockNumber)
        largest_block = blockNumber
        secondsSinceLastBlock = 0
        document.getElementById("label").innerHTML = "Enter Block Number (Max of " + largest_block + ")"
    })
}
async function getBlockData(blockNumber) {
    if (!showStaticData) {
        let blockData = await provider.getBlock(blockNumber)
        blockData = JSON.stringify(blockData.hash)
        createBarFlag(blockData.substr(3, blockData.length - 4), blockNumber)
    }
}

function showLiveData() {
    showStaticData = false
    getBlockData(largest_block)
}

// Show Static Block Data From User Input
function getUserBlockNumber() {
    showStaticData = true

    let blockNumber = 0

    if (document.getElementById("blockNum").value != "" && document.getElementById("blockNum").value < largest_block) {
        blockNumber = parseInt(document.getElementById("blockNum").value)
        getStaticBlockData(blockNumber)
    } else {
        console.log("Invalid input: NaN or block size is too large.")
    }
}
async function getStaticBlockData(blockNumber) {
    let blockData = await provider.getBlock(blockNumber)
    blockData = JSON.stringify(blockData.hash)

    createBarFlag(blockData.substr(3, blockData.length - 4), blockNumber)
}

// Create Barcode Pattern From Block Hash
function createBarFlag(blockHash, blockNumber) {
    const CHAR_IDENTIFIER = blockHash.slice(60).toUpperCase()
    const BLOCKHASHARRAY = blockHash.split('')
    const WIDTH = 100,
          HEIGHT = 1000
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
        svgRect = svgRect + `<rect width="${WIDTH}" height="${HEIGHT}" x="${index*100}" style="fill: #${colorHexArray[index]}" />`
    }
    svgRect = svgRect + `<text id="barcode-char" x="2" y="950" fill="white">${CHAR_IDENTIFIER}</text>`

    document.getElementById("barcode").innerHTML = svgRect
    document.getElementById("userName").innerHTML = "Ethereum Block: " + blockNumber
}