import { resultCommonJungle, resultEnergyJungle, resultUncommonJungle, CombinedRaresJungle } from "./CardFinder"

// Each booster pack contained 11 trading cards; one rare, three uncommon, five commons, and two energy cards.

let CRJ = CombinedRaresJungle
let UCJ = resultUncommonJungle
let CJ = resultCommonJungle
let EJ = resultEnergyJungle



export function JSCRPacker() {
    const n = 1; // number of elements we want to get
    const shuffledArray = CRJ.sort(() => 0.5 - Math.random()); // shuffles array
    const CombinedRaresResultJungle = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CombinedRaresResult);;
    return CombinedRaresResultJungle
}
JSCRPacker();

export function JSUCPacker() {
    const n = 3; // number of elements we want to get
    const shuffledArray = UCJ.sort(() => 0.5 - Math.random()); // shuffles array
    const UncommonResultJungle = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(UncommonResult);
    return UncommonResultJungle
}
JSUCPacker();

export function JSCPacker() {
    const n = 5; // number of elements we want to get
    const shuffledArray = CJ.sort(() => 0.5 - Math.random()); // shuffles array
    const CommonResultJungle = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(CommonResult);
    return CommonResultJungle
}
JSCPacker();


export function JSEPacker() {
    const n = 2; // number of elements we want to get
    const shuffledArray = EJ.sort(() => 0.5 - Math.random()); // shuffles array
    const EnergyResultJungle = shuffledArray.slice(0, n); // gets first n elements after shuffle
    
    // console.log(EnergyResult);
    return EnergyResultJungle
}
JSEPacker();


const JSCR = JSCRPacker()
const JSUC = JSUCPacker()
const JSC = JSCPacker()
const JSE = JSEPacker()


export let BoosterPackJungle = [JSCR, JSUC, JSC, JSE]
