import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-app');
  protected jina = signal('Edward Mhela');
  protected umri = signal(23);
  protected mwalimu = signal('Angela');
  protected bonyezaMara = signal(0);

  ongezaUmri(): void {
    this.umri.update(v => v + 1);
  }

  punguzaUmri(): void {
    this.umri.update(v => (v > 0 ? v - 1 : 0));
  }

  andikaMara(): void {
    this.bonyezaMara.update(v => v + 1);
  }

  protected kaziZangu = signal<string[]>([
    'Kusoma somo la Angular',
    'Kurekebisha HTML',
    'Kupush` kwenye GitHub',
  ]);

  ongezaKazi(): void {
    const mpya = `Kazi namba ${this.kaziZangu().length + 1}`;
    this.kaziZangu.update(list => [...list, mpya]);
  }
}
