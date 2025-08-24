// Without running this code, what will it print?

console.log(false ?? null);
console.log(true ?? 1 + 2);
console.log(1 + 2 ?? true);
console.log(null ?? false);
console.log(undefined ?? 1 + 2);
console.log(1 + 2 ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);

/*
false
true 
3 
false 
3 
3 
undefined 
null
*/
