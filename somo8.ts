class Hali<T> {
  private thamani: T;
  private wasikilizaji: (() => void)[] = [];

  constructor(awali: T) {
    this.thamani = awali;
  }

  pata(): T {
    return this.thamani;
  }

  weka(mpya: T): void {
    this.thamani = mpya;
    for (const w of this.wasikilizaji) {
      w();
    }
  }

  wasikiliza(f: () => void): void {
    this.wasikilizaji.push(f);
  }
}

const jina = new Hali<string>("Hakuna");
let onyesho = "";
let herufiNdogo = "";

jina.wasikiliza(() => {
  onyesho = `Jina: ${jina.pata()}`;
});

jina.wasikiliza(() => {
  herufiNdogo = jina.pata().toLowerCase();
});

console.log("Kabla: [" + onyesho + "]");       // bado tupu — hakuna mabadiliko yajayo
jina.weka("MWANAFUNZI");                        <!-- MOJA tu ya kugusa -->
console.log("Baada:  " + onyesho);              // imejisasisha YENYEWE
console.log("Ndogo:  " + herufiNdogo);          // msikilizaji wa pili pia amepata

const idadi = new Hali<number>(0);
let kanuni = "";
idadi.wasikiliza(() => {
  kanuni = `Idadi mara mbili: ${idadi.pata() * 2}`;
});
idadi.weka(5);
console.log(kanuni);