import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.applyTypingEffect();
  }

  private applyTypingEffect(): void {
    const typingElement = document.getElementById('typing-text') as HTMLElement | null;

    if (typingElement) {
      const text = typingElement.textContent || '';
      typingElement.textContent = '';

      let index = 0;
      const typingSpeed = 100; // Velocidade de digitação

      const type = () => {
        if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, typingSpeed);
        }
      };

      type();
    } else {
      console.error('Elemento com ID "typing-text" não encontrado.');
    }
  }
}
