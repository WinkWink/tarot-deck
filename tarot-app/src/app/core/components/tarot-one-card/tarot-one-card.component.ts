import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TAROT_DECK, TarotCard } from '../../data/tarot-deck';

@Component({
  selector: 'app-tarot-one-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarot-one-card.component.html',
  styleUrls: ['./tarot-one-card.component.scss'],
})
export class TarotOneCardComponent implements OnInit {
  deck: TarotCard[] = TAROT_DECK;
  drawn: { card: TarotCard; reversed: boolean; timestamp: number } | null = null;
  history: Array<{ card: TarotCard; reversed: boolean; timestamp: number }> = [];
  isShuffling = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadHistory();
  }

  drawCard() {
    if (this.isShuffling) return;
    this.isShuffling = true;

    setTimeout(() => {
      const index = Math.floor(Math.random() * this.deck.length);
      const reversed = Math.random() < 0.5;
      const card = this.deck[index];
      const entry = { card, reversed, timestamp: Date.now() };

      this.drawn = entry;
      this.history = [entry, ...this.history].slice(0, 20);

      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('tarot-history', JSON.stringify(this.history));
      }

      this.isShuffling = false;

      // ✅ force Angular to check for updates
      this.cdr.detectChanges();
    }, 500);
  }

  reset() {
    this.drawn = null;
    this.cdr.detectChanges();
  }

  loadHistory() {
    if (typeof window === 'undefined' || !window.localStorage) {
      this.history = [];
      return;
    }

    try {
      const raw = localStorage.getItem('tarot-history');
      if (raw) {
        this.history = JSON.parse(raw) as Array<{
          card: TarotCard;
          reversed: boolean;
          timestamp: number;
        }>;
      } else {
        this.history = [];
      }
    } catch (e) {
      console.error('Failed to load history', e);
      this.history = [];
    }
  }

  formatTimestamp(ts: number) {
    return new Date(ts).toLocaleString();
  }
}
