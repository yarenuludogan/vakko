import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
  // styleUrls: ['./navbar.component.css'] // Eğer CSS dosyası varsa
})
export class NavbarComponent {
  dropdownOpen = false;
  hoveredCategory: any = null;

  categories = [
    {
      name: 'KADIN',
      image: 'https://cdn.vakko.com/banners/d68f3d04-6b29-4b6e-bcef-b2ba527f7625.jpeg',
      subCategories: [
        'GİYİM', 'Elbise & Tulum', 'Ceket', 'Gömlek & Bluz', 'T-Shirt & Sweatshirt', 'Triko',
        'Pantolon', 'Etek', 'Bermuda & Şort', 'Dış Giyim', 'AKSESUAR', 'Takı', 'Şapka', 'Kemer',
        'Şal', 'EŞARP & ŞAL KOLEKSİYONU', 'Eşarp', 'Şal', 'Fular & Gavroş & Bandana', 
        'Çağdaş Türk Sanatçıları Koleksiyonu', 'İsme Özel Eşarp', 'AW ’25 URBAN GLAM',
        'AW ’25 GLAMOUR', 'AW ’25 SILENT CHIC', 'AW ’25 COOL CASUAL'
      ]
    },
    {
      name: 'ERKEK',
      image: 'https://cdn.vakko.com/banners/0f25a0c2-a83f-4f2c-bdfc-b220808d59b2.jpeg',
      subCategories: [
        'GİYİM', 'Ceket', 'Takım Elbise', 'Smokin', 'Gömlek', 'T-Shirt & Sweatshirt',
        'Triko', 'Pantolon', 'Bermuda & Şort', 'Dış Giyim', 'Plaj Giyim', 'İç Giyim',
        'AKSESUAR', 'Kravat', 'Mendil', 'Papyon', 'Kemer', 'Çorap', 'Bileklik', 
        'Kol Düğmesi', 'AW 24/25', 'VAKKO ERKEK SS 24'
      ]
    },
    {
      name: 'SHOES & BAGS',
      image: 'https://cdn.vakko.com/banners/31b29330-ef68-4b93-87ee-4427e86d914e.jpeg',
      subCategories: [
        'KADIN', 'Ayakkabı', 'Çanta', 'Cüzdan', 'V2K Designers Ayakkabı & Çanta', 
        'Monogram', 'Monogram Initials Koleksiyonu', 'Monogram Exclusive', 
        'ERKEK', 'Ayakkabı', 'Çanta', 'Monogram'
      ]
    },
    {
      name: 'V2k DESIGNERS',
      image: 'https://cdn.vakko.com/banners/27e87a84-ba8e-4e52-b250-ec4fd3c2fe84.jpeg',
      subCategories: [
        'Giyim', 'Elbise', 'Tulum', 'Total Look', 'Ceket', 'Gömlek', 'Bluz', 
        'T-Shirt', 'Sweatshirt', 'Triko', 'Pantolon', 'Jean Pantolon', 
        'Etek', 'Bermuda & Sort', 'Dış Giyim', 'İç Giyim', 'Plaj', 'Ayakkabı & Çanta', 
        'Aksesuar', 'V2K SS 24'
      ]
    },
    {
      name: 'MARE',
      image: 'https://cdn.vakko.com/banners/39f19dc4-f39f-432d-94ef-2c40f73fac32.jpeg',
      subCategories: ['Plaj Giyim', 'Mayo & Bikini', 'Sandalet & Terlik', 'Aksesuar']
    },
    {
      name: 'COUTURE',
      image: 'https://cdn.vakko.com/banners/ef97e31b-5718-4eff-890b-9cb286545d2b.jpeg',
      subCategories: ['Elbise', 'Kokteyl Elbise', 'Aksesuar']
    },
    {
      name: 'WEDDING',
      image: 'https://cdn.vakko.com/banners/74591de0-8d8f-49df-ba34-4435bf4ef716.jpeg',
      subCategories: [] // Sadece resim gösterecek
    },
    {
      name: 'HOME',
      image: 'https://cdn.vakko.com/banners/ec450ea9-84f8-4f8e-8f7b-d220e028a0aa.jpeg',
      subCategories: [
        'EV DEKORASYONU', 'Mobilya', 'Ofis Aksesuarları', 'Dekoratif Ev Aksesuarları', 
        'Hobi Aksesuarları', 'Sofra', 'Mum & Oda Kokusu', 'Banyo Aksesuarları', 
        'EV TEKSTİLİ', 'Exclusive Line', 'Yatak Tekstili', 'Masa Tekstili', 
        'Banyo Tekstili', 'CRUISE', 'Tekne Aksesuarları', 'Dış Mekan Yastıkları', 
        'DEKORATİF YASTIKLAR', 'Klasik Dekor Yastıkları', 'Sezon Yastıkları', 
        'EL VE VÜCUT BAKIMI', 'CHRISTOFLE', 'Mum & Şamdan', 'Dekoratif Obje', 
        'Çatal & Bıçak Seti', 'Sofra Aksesuarları', 'Temizleme Ürünleri', 
        'EVLİLİK LİSTESİ KATALOĞU'
      ]
    },
    {
      name: 'KOZMETİK',
      image: 'https://cdn.vakko.com/banners/30a54f6c-44d8-4188-be2a-483e5fbcc9c5.jpeg',
      subCategories: [
        'ERKEK PARFÜM', 'Infiniti For Him', 'Infiniti For Him Silver', 'Adonis For Him', 
        'KADIN PARFÜM', 'Sorriso', 'Adonis', 'Allure', 'Decouverte', 'Desirable', 
        'Desirable Rose', 'Infiniti', 'Per Lei', 'Secret Dream', 'VAKKO BEAUTY'
      ]
    },
    {
      name: 'VAKKO L\'ATELIER',
      image: 'https://cdn.vakko.com/banners/29026034-7a99-4cb7-bf9f-9772d7e1981f.jpeg',
      subCategories: [
        'MIXOLOGY KOLEKSİYONU', 'Çikolata', 'Macaron', 'Madlen', 'Tart Trüf', 
        'Karamelize Çekirdek Koleksiyonu', 'Madlen Karamelize Koleksiyonu', 
        'Karışık Paketler', 'Özel Gün Koleksiyonları', 'Lokum', 'Şekerleme'
      ]
    }
  ];
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.hoveredCategory = null; // Kapatma sırasında alt kategori görünümünü sıfırla
  }
  showSearchBar = false;

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
  

  onCategoryMouseEnter(category: any) {
    this.hoveredCategory = category;
  }

  onCategoryMouseLeave() {
    this.hoveredCategory = null;
  }
}
