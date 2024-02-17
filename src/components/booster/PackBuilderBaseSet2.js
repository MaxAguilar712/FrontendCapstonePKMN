import { resultCommonBaseSet2, resultEnergyBaseSet2, resultUncommonBaseSet2, CombinedRaresBaseSet2 } from "./CardFinder"

// Each booster pack contained 11 trading cards; one rare, three uncommon, five commons, and two energy cards.

let CRBS2 = CombinedRaresBaseSet2
let UCBS2 = resultUncommonBaseSet2
let CBS2 = resultCommonBaseSet2
let EBS2 = resultEnergyBaseSet2



export function BS2CRPacker() {
    const n = 1; // number of elements we want to get
    const shuffledArray = CRBS2.sort(() => 0.5 - Math.random()); // shuffles array
    const CombinedRaresResultBaseSet2 = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CombinedRaresResult);;
    return CombinedRaresResultBaseSet2
}
BS2CRPacker();

export function BS2UCPacker() {
    const n = 3; // number of elements we want to get
    const shuffledArray = UCBS2.sort(() => 0.5 - Math.random()); // shuffles array
    const UncommonResultBaseSet2 = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(UncommonResult);
    return UncommonResultBaseSet2
}
BS2UCPacker();

export function BS2CPacker() {
    const n = 5; // number of elements we want to get
    const shuffledArray = CBS2.sort(() => 0.5 - Math.random()); // shuffles array
    const CommonResultBaseSet2 = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CommonResult);
    return CommonResultBaseSet2
}
BS2CPacker();


export function BS2EPacker() {
    const n = 2; // number of elements we want to get
    const shuffledArray = EBS2.sort(() => 0.5 - Math.random()); // shuffles array
    const EnergyResultBaseSet2 = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(EnergyResult);
    return EnergyResultBaseSet2
}
BS2EPacker();


const BS2CR = BS2CRPacker()
const BS2UC = BS2UCPacker()
const BS2C = BS2CPacker()
const BS2E = BS2EPacker()


export let BoosterPackBaseSet2 = [BS2CR, BS2UC, BS2C, BS2E]
