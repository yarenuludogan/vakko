import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Eğer gerekli Angular modülleri varsa ekleyin

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Eğer ihtiyaç varsa ekleyin
  templateUrl: './footer.component.html',
  //styleUrls: ['./footer.component.css'] //// Doğru kullanım
})
export class FooterComponent {}
