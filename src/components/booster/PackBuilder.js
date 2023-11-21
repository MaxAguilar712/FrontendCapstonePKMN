import { resultCommon, resultEnergy, resultUncommon, CombinedRares } from "./CardFinder"

// Each booster pack contained 11 trading cards; one rare, three uncommon, five commons, and two energy cards.

let CR = CombinedRares
let UC = resultUncommon
let C = resultCommon
let E = resultEnergy



// export function BSRHPacker() {
//         console.log(RHR[(Math.floor(Math.random() * RHR.length))]);
//     }
//     BSRHPacker();


// export function BSRPacker() {
//     console.log(RR[(Math.floor(Math.random() * RR.length))]);
// }
// BSRPacker();

export function BSCRPacker() {
    const n = 1; // number of elements we want to get
    const shuffledArray = CR.sort(() => 0.5 - Math.random()); // shuffles array
    const CombinedRaresResult = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CombinedRaresResult);;
    return CombinedRaresResult
}
BSCRPacker();

export function BSUCPacker() {
    const n = 3; // number of elements we want to get
    const shuffledArray = UC.sort(() => 0.5 - Math.random()); // shuffles array
    const UncommonResult = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(UncommonResult);
    return UncommonResult
}
BSUCPacker();

export function BSCPacker() {
    const n = 5; // number of elements we want to get
    const shuffledArray = C.sort(() => 0.5 - Math.random()); // shuffles array
    const CommonResult = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CommonResult);
    return CommonResult
}
BSCPacker();


export function BSEPacker() {
    const n = 2; // number of elements we want to get
    const shuffledArray = E.sort(() => 0.5 - Math.random()); // shuffles array
    const EnergyResult = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(EnergyResult);
    return EnergyResult
}
BSEPacker();


const BSCR = BSCRPacker()
const BSUC = BSUCPacker()
const BSC = BSCPacker()
const BSE = BSEPacker()

// console.log(BSCR)
// console.log(BSUC)
// console.log(BSC)
// console.log(BSE)

export let BoosterPack = [BSCR, BSUC, BSC, BSE]

console.log(BoosterPack)