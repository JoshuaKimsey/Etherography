// CREATED BY JOSHUA KIMSEY - MIT LICENSE

// Set Ether Network Defaults
const NETWORK = "homestead";
const provider = ethers.getDefaultProvider(NETWORK, {});
let largest_block

// Show Latest Block Data
function startProviderListener() {
    // Get Ether Block Hash Data
    provider.on("block", (blockNumber) => {
        //console.log(blockNumber)
        getBlockData(blockNumber)
        largest_block = blockNumber
    })
}
async function getBlockData(blockNumber) {
    let blockData = await provider.getBlock(blockNumber)
    blockData = JSON.stringify(blockData.hash)
    //console.log(blockData.substr(3, blockData.length-4))

    createBarFlag(blockData.substr(3, blockData.length - 4), blockNumber)
}

// Show Static Block Data From User Input
function getUserBlockNumber() {
    let blockNumber = 0
    if (document.getElementById("blockNum").value != "" && document.getElementById("blockNum").value < largest_block) {
        blockNumber = parseInt(document.getElementById("blockNum").value)
        //console.log(blockNumber)
        getStaticBlockData(blockNumber)
    } else {
        console.log("Invalid input: NaN or block size is too large.")
    }
}
async function getStaticBlockData(blockNumber) {
    provider.off("block")
    
    //console.log(blockNumber)
    let blockData = await provider.getBlock(blockNumber)
    blockData = JSON.stringify(blockData.hash)
    //console.log(blockData.substr(3, blockData.length-4))

    createBarFlag(blockData.substr(3, blockData.length - 4), blockNumber)
}

// Create Barcode Pattern From Block Hash
function createBarFlag(blockHash, blockNumber) {
    let transaction_id = blockHash

    let background_color = [transaction_id.slice(0, 6), transaction_id.slice(6, 12), transaction_id.slice(12, 18), transaction_id.slice(18, 24), transaction_id.slice(24, 30), transaction_id.slice(30, 36), transaction_id.slice(36, 42), transaction_id.slice(42, 48), transaction_id.slice(48, 54), transaction_id.slice(54, 60)]
    let char_identifier = transaction_id.slice(60).toUpperCase()
    document.getElementById("one").style = "fill: #" + background_color[0] + ""
    document.getElementById("two").style = "fill: #" + background_color[1] + ""
    document.getElementById("three").style = "fill: #" + background_color[2] + ""
    document.getElementById("four").style = "fill: #" + background_color[3] + ""
    document.getElementById("five").style = "fill: #" + background_color[4] + ""
    document.getElementById("six").style = "fill: #" + background_color[5] + ""
    document.getElementById("seven").style = "fill: #" + background_color[6] + ""
    document.getElementById("eight").style = "fill: #" + background_color[7] + ""
    document.getElementById("nine").style = "fill: #" + background_color[8] + ""
    document.getElementById("ten").style = "fill: #" + background_color[9] + ""
    document.getElementById("char").innerHTML = char_identifier
    
    document.getElementById("userName").innerHTML = "Ethereum Block: " + blockNumber

    document.getElementById("label").innerHTML = "Enter Block Number (Max of " + largest_block + ")"

}