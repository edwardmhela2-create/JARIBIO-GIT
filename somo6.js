"use strict";
const wafanyakazi = [
    { jina: "Asha", umri: 30, anafanyaKazi: true },
    { jina: "Baraka", umri: 45, anafanyaKazi: false },
    { jina: "Neema", umri: 28, anafanyaKazi: true },
    { jina: "Juma", umri: 60, anafanyaKazi: true },
];
for (const m of wafanyakazi) {
    if (m.umri >= 60) {
        console.log(`${m.jina}: mkataba wa kujiuzulu`);
    }
    else if (m.anafanyaKazi) {
        console.log(`${m.jina}: inafanya kazi sasa`);
    }
    else {
        console.log(`${m.jina}: likizo`);
    }
}
let jumlaYaUmri = 0;
for (const m of wafanyakazi) {
    jumlaYaUmri += m.umri;
}
console.log("Wastani wa umri: " + jumlaYaUmri / wafanyakazi.length);
let akaunti = 0;
for (let i = 0; i < 3; i++) {
    akaunti += 1000;
}
console.log("Akaunti: " + akaunti);
