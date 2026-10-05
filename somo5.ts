interface Mfanyakazi {
  jina: string;
  umri: number;
  anafanyaKazi: boolean;
  simu?: string;
}


const a: Mfanyakazi = { jina: "Asha", umri: 30, anafanyaKazi: true, simu: "0712345678" };
const b: Mfanyakazi = { jina: "Baraka", umri: 45, anafanyaKazi: false };
const c: Mfanyakazi = { jina: "Neema", umri: 28, anafanyaKazi: true };


const wafanyakazi: Mfanyakazi[] = [a, b, c];


function salamu(mf: Mfanyakazi): string {
  return `Habari ${mf.jina}, umri wako ni ${mf.umri}`;
}

const majina = wafanyakazi.map(m => m.jina);
const wanaofanyaKazi = wafanyakazi.filter(m => m.anafanyaKazi);


console.log(salamu(a));
console.log("Majina: " + majina.join(", "));
console.log("Wanaofanya kazi: " + wanaofanyaKazi.length);
console.log("Simu ya Asha: " + (a.simu ?? "hakuna"));


