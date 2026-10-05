class Mfanyakazi {
  private jina: string;
  private umri: number;
  private salio: number = 0;

  constructor(jina: string, umri: number) {
    this.jina = jina;
    this.umri = umri;
  }

  salamu(): string {
    return `Habari ${this.jina} (umri ${this.umri})`;
  }

  ongezaSalio(kiasi: number): void {
    if (kiasi > 0) {
      this.salio += kiasi;
    }
  }

  onyeshaSalio(): string {
    return `Salio la ${this.jina}: ${this.salio}`;
  }
}

class Meneja extends Mfanyakazi {
  onyeshaCheo(): string {
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