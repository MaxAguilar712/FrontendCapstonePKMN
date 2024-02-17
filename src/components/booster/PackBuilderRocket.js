import { resultCommonRocket, resultEnergyRocket, resultUncommonRocket, CombinedRaresRocket } from "./CardFinder"

// Each booster pack contained 11 trading cards; one rare, three uncommon, five commons, and two energy cards.

let CRR = CombinedRaresRocket
let UCR = resultUncommonRocket
let CR = resultCommonRocket
let ER = resultEnergyRocket



export function RSCRPacker() {
    const n = 1; // number of elements we want to get
    const shuffledArray = CRR.sort(() => 0.5 - Math.random()); // shuffles array
    const CombinedRaresResultRocket = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CombinedRaresResult);;
    return CombinedRaresResultRocket
}
RSCRPacker();

export function RSUCPacker() {
    const n = 3; // number of elements we want to get
    const shuffledArray = UCR.sort(() => 0.5 - Math.random()); // shuffles array
    const UncommonResultRocket = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(UncommonResult);
    return UncommonResultRocket
}
RSUCPacker();

export function RSCPacker() {
    const n = 5; // number of elements we want to get
    const shuffledArray = CR.sort(() => 0.5 - Math.random()); // shuffles array
    const CommonResultRocket = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CommonResult);
    return CommonResultRocket
}
RSCPacker();


export function RSEPacker() {
    const n = 2; // number of elements we want to get
    const shuffledArray = ER.sort(() => 0.5 - Math.random()); // shuffles array
    const EnergyResultRocket = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(EnergyResult);
    return EnergyResultRocket
}
RSEPacker();


const RSCR = RSCRPacker()
const RSUC = RSUCPacker()
const RSC = RSCPacker()
const RSE = RSEPacker()


export let BoosterPackRocket = [RSCR, RSUC, RSC, RSE]
