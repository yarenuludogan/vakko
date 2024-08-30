import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  media = [
    { url: 'https://cdn.vakko.com/banners/989917fc-275c-42d2-a1f1-606e81b4a83d.jpeg', text: '' },
    { url: 'https://vakko-video.mncdn.com/f3/vakko-ss24-sezon-video-web_f3.mp4', text: '' },
    { url: 'https://cdn.vakko.com/banners/cf19d781-0034-4a73-b3ec-d6758ed49b20.jpeg', text: "İLBAHAR/YAZ '24 " },
    { url: 'https://cdn.vakko.com/banners/feb5c0fd-56b6-438f-9653-5f06d0214b9f.jpeg', text: '' },
    { url: 'https://cdn.vakko.com/banners/db7e3b34-dd41-48cd-a293-4fbf72245599.jpeg', text: 'VAKKO KADIN' },
    { url: 'https://cdn.vakko.com/banners/f69751c4-c85b-414d-849b-8d19cd3ca752.jpeg', text: 'VAKKO ERKEK' },
    { url: 'https://cdn.vakko.com/banners/d108061e-def9-4584-9157-c9310abde1f5.jpeg', text: 'SHOES & BAGS' },
    { url: 'https://cdn.vakko.com/banners/45c70e4f-28d0-4a97-a147-51dcf7bc3659.jpeg', text: 'VAKKO EŞARP' },
    { url: 'https://cdn.vakko.com/banners/378acb16-681e-49fd-95e1-18392e3eeb86.jpeg', text: 'V2K DESIGNERS' },
    { url: 'https://cdn.vakko.com/banners/6c7ba0fc-2180-4111-a29b-9c806e61ff01.jpeg', text: 'VAKKO MARE' },
    { url: 'https://cdn.vakko.com/banners/b2e95e5a-5adc-4ee9-a441-e6db5700c59d.jpeg', text: 'COUTURE' },
    { url: 'https://cdn.vakko.com/banners/4653bd0a-a9c3-48aa-9916-d4007d24120c.jpeg', text: 'WEDDING' },
    { url: 'https://cdn.vakko.com/banners/89892842-e771-4ad3-8adf-5a6c193884ce.jpeg', text: 'VAKKO HOME' },
    { url: 'https://cdn.vakko.com/banners/82d6899d-aec5-4aaf-a31f-eff3bef3e776.jpeg', text: 'KOZMETİK' },
    { url: 'https://cdn.vakko.com/banners/518bd97c-2821-4828-b28f-5baea160ca8e.jpeg', text: "VAKKO L'ATELIER" },
    { url: 'https://cdn.vakko.com/banners/651c091d-2b3c-4aa9-8c4b-08977378536b.jpeg', text: 'VAKKO HOTEL & RESIDENCE' },
    { url: 'https://cdn.vakko.com/banners/79e81153-3a4e-496f-8d65-4980ddfec456.jpeg', text: '' },
    { url: 'https://cdn.vakko.com/banners/5fbc182e-b7fe-4209-a9d8-54372351ff49.jpeg', text: '' },
    { url: 'https://cdn.vakko.com/banners/55b6d56c-1c39-41d3-874a-fd1797bc3a80.jpeg', text: 'WORLD OF VAKKO' }
  ];

  overlayTexts = this.media.map(item => item.text);
  currentIndex = 0;

  ngAfterViewInit() {
    this.updateCurrentIndex();
  }

  scrollToIndex(index: number) {
    const container = document.querySelector('.snap-mandatory') as HTMLElement;
    container.scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth'
    });
    this.currentIndex = index;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateCurrentIndex();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateCurrentIndex();
  }

  updateCurrentIndex() {
    const container = document.querySelector('.snap-mandatory') as HTMLElement;
    const scrollPosition = container.scrollTop;
    this.currentIndex = Math.round(scrollPosition / window.innerHeight);
  }

 scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
