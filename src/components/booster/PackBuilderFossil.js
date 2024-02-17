import { resultCommonFossil, resultEnergyFossil, resultUncommonFossil, CombinedRaresFossil } from "./CardFinder"

// Each booster pack contained 11 trading cards; one rare, three uncommon, five commons, and two energy cards.

let CRF = CombinedRaresFossil
let UCF = resultUncommonFossil
let CF = resultCommonFossil
let EF = resultEnergyFossil



export function FSCRPacker() {
    const n = 1; // number of elements we want to get
    const shuffledArray = CRF.sort(() => 0.5 - Math.random()); // shuffles array
    const CombinedRaresResultFossil = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CombinedRaresResult);;
    return CombinedRaresResultFossil
}
FSCRPacker();

export function FSUCPacker() {
    const n = 3; // number of elements we want to get
    const shuffledArray = UCF.sort(() => 0.5 - Math.random()); // shuffles array
    const UncommonResultFossil = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(UncommonResult);
    return UncommonResultFossil
}
FSUCPacker();

export function FSCPacker() {
    const n = 5; // number of elements we want to get
    const shuffledArray = CF.sort(() => 0.5 - Math.random()); // shuffles array
    const CommonResultFossil = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CommonResult);
    return CommonResultFossil
}
FSCPacker();


export function FSEPacker() {
    const n = 2; // number of elements we want to get
    const shuffledArray = EF.sort(() => 0.5 - Math.random()); // shuffles array
    const EnergyResultFossil = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(EnergyResult);
    return EnergyResultFossil
}
FSEPacker();


const FSCR = FSCRPacker()
const FSUC = FSUCPacker()
const FSC = FSCPacker()
const FSE = FSEPacker()


export let BoosterPackFossil = [FSCR, FSUC, FSC, FSE]

// console.log(BoosterPack)