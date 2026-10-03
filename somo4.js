"use strict";
const wanafunzi = ["Asha", "Baraka", "Neema"];
wanafunzi.push("Juma");
console.log("Idadi: " + wanafunzi.length);
console.log("Wa kwanza (index 0): " + wanafunzi[0]);
console.log("Wa mwisho: " + wanafunzi[wanafunzi.length - 1]);
const mfanyakazi = { jina: "Asha", umri: 30, anafanyaKazi: true };
console.log("Mfanyakazi: " + mfanyakazi.jina + " — umri " + mfanyakazi.umri);
function jumla(a, b) {
    return a + b;
}
const zidisha = (a, b) => a * b;
console.log("Jumla: " + jumla(5, 3));
console.log("Zidisha: " + zidisha(4, 6));
