import BaseSet from '../../baseset.json'
import JungleSet from '../../jungleset.json'
import FossilSet from '../../fossilset.json'
import RocketSet from '../../rocketset.json'
import BaseSet2 from '../../baseset2.json'



// BASE SET ------------------------------------------


 const resultRareHolo = BaseSet.filter(t=>t.rarity ==='Rare Holo');
// console.log(resultRareHolo);

 const resultRare = BaseSet.filter(t=>t.rarity ==='Rare');
// console.log(resultRare);

export const resultUncommon = BaseSet.filter(t=>t.rarity ==='Uncommon');
// console.log(resultUncommon);

export const resultCommon = BaseSet.filter(t=>t.rarity ==='Common');
// console.log(resultCommon);

export const resultEnergy = BaseSet.filter(t=>t.supertype ==='Energy');
// console.log(resultEnergy);


export const CombinedRares = [...resultRareHolo, ...resultRare];
// console.log(CombinedRares);

//JUNGLE SET ----------------------------------

const resultRareHoloJungle = JungleSet.filter(t=>t.rarity ==='Rare Holo');
// console.log(resultRareHolo);

 const resultRareJungle = JungleSet.filter(t=>t.rarity ==='Rare');
// console.log(resultRare);

export const resultUncommonJungle = JungleSet.filter(t=>t.rarity ==='Uncommon');
// console.log(resultUncommon);

export const resultCommonJungle = JungleSet.filter(t=>t.rarity ==='Common');
// console.log(resultCommon);

export const resultEnergyJungle = JungleSet.filter(t=>t.supertype ==='Energy');
// console.log(resultEnergy);


export const CombinedRaresJungle = [...resultRareHoloJungle, ...resultRareJungle];
// console.log(CombinedRares);

// FOSSIL SET ----------------------------


const resultRareHoloFossil = FossilSet.filter(t=>t.rarity ==='Rare Holo');
// console.log(resultRareHolo);

 const resultRareFossil = FossilSet.filter(t=>t.rarity ==='Rare');
// console.log(resultRare);

export const resultUncommonFossil = FossilSet.filter(t=>t.rarity ==='Uncommon');
// console.log(resultUncommon);

export const resultCommonFossil = FossilSet.filter(t=>t.rarity ==='Common');
// console.log(resultCommon);

export const resultEnergyFossil = FossilSet.filter(t=>t.supertype ==='Energy');
// console.log(resultEnergy);


export const CombinedRaresFossil = [...resultRareHoloFossil, ...resultRareFossil];
// console.log(CombinedRares);


// BASE SET 2 ------------------------------

const resultRareHoloBaseSet2 = BaseSet2.filter(t=>t.rarity ==='Rare Holo');
// console.log(resultRareHolo);

 const resultRareBaseSet2 = BaseSet2.filter(t=>t.rarity ==='Rare');
// console.log(resultRare);

export const resultUncommonBaseSet2 = BaseSet2.filter(t=>t.rarity ==='Uncommon');
// console.log(resultUncommon);

export const resultCommonBaseSet2 = BaseSet2.filter(t=>t.rarity ==='Common');
// console.log(resultCommon);

export const resultEnergyBaseSet2 = BaseSet2.filter(t=>t.supertype ==='Energy');
// console.log(resultEnergy);


export const CombinedRaresBaseSet2 = [...resultRareHoloBaseSet2, ...resultRareBaseSet2];
// console.log(CombinedRares);






// ROCKET SET -----------------------

const resultRareHoloRocket = RocketSet.filter(t=>t.rarity ==='Rare Holo');
// console.log(resultRareHolo);

 const resultRareRocket = RocketSet.filter(t=>t.rarity ==='Rare');
// console.log(resultRare);

export const resultUncommonRocket = RocketSet.filter(t=>t.rarity ==='Uncommon');
// console.log(resultUncommon);

export const resultCommonRocket = RocketSet.filter(t=>t.rarity ==='Common');
// console.log(resultCommon);

export const resultEnergyRocket = RocketSet.filter(t=>t.supertype ==='Energy');
// console.log(resultEnergy);


export const CombinedRaresRocket = [...resultRareHoloRocket, ...resultRareRocket];
// console.log(CombinedRares);