import BaseSet from '../../baseset.json'


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
