"use strict";
class Hali {
    thamani;
    wasikilizaji = [];
    constructor(awali) {
        this.thamani = awali;
    }
    pata() {
        return this.thamani;
    }
    weka(mpya) {
        this.thamani = mpya;
        for (const w of this.wasikilizaji) {
            w();
        }
    }
    wasikiliza(f) {
        this.wasikilizaji.push(f);
    }
}
const jina = new Hali("Hakuna");
let onyesho = "";
let herufiNdogo = "";
jina.wasikiliza(() => {
    onyesho = `Jina: ${jina.pata()}`;
});
jina.wasikiliza(() => {
    herufiNdogo = jina.pata().toLowerCase();
});
console.log("Kabla: [" + onyesho + "]"); // bado tupu — hakuna mabadiliko yajayo
jina.weka("MWANAFUNZI");
console.log("Baada:  " + onyesho); // imejisasisha YENYEWE
console.log("Ndogo:  " + herufiNdogo); // msikilizaji wa pili pia amepata
const idadi = new Hali(0);
let kanuni = "";
idadi.wasikiliza(() => {
    kanuni = `Idadi mara mbili: ${idadi.pata() * 2}`;
});
idadi.weka(5);
console.log(kanuni);
