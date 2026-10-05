"use strict";
class Mfanyakazi {
    jina;
    umri;
    salio = 0;
    constructor(jina, umri) {
        this.jina = jina;
        this.umri = umri;
    }
    salamu() {
        return `Habari ${this.jina} (umri ${this.umri})`;
    }
    ongezaSalio(kiasi) {
        if (kiasi > 0) {
            this.salio += kiasi;
        }
    }
    onyeshaSalio() {
        return `Salio la ${this.jina}: ${this.salio}`;
    }
}
class Meneja extends Mfanyakazi {
    onyeshaCheo() {
        return "Meneja";
    }
}
const a = new Mfanyakazi("Asha", 30);
console.log(a.salamu());
a.ongezaSalio(50000);
a.ongezaSalio(-999);
console.log(a.onyeshaSalio());
const m = new Meneja("Juma", 45);
console.log(m.salamu());
console.log(m.onyeshaCheo());
