// This file handles image imports and optimizations
import type { ImageMetadata } from 'astro';

// Import project images
import tomatetutiempo from '../assets/img/trabajos/tomatetutiempo.webp';
import best_coffee from '../assets/img/trabajos/best_coffee.webp';
import busticket from '../assets/img/trabajos/busticket.webp';
import offitec from '../assets/img/trabajos/offitec.webp';
import comite_ganaderos from '../assets/img/trabajos/comite_ganaderos.webp';
import portfolio from '../assets/img/trabajos/portfolio.webp';
import juego_memoria from '../assets/img/trabajos/juego_memoria.webp';
import tetris_game from '../assets/img/trabajos/tetris_game.webp';

// Define the valid project image keys
export type ProjectImageKey = 'tomatetutiempo' | 'best_coffee' | 'busticket' | 'offitec' | 
  'comite_ganaderos' | 'portfolio' | 'juego_memoria' | 'tetris_game';

// Export project images with type safety
export const projectImages: Record<ProjectImageKey, ImageMetadata> = {
  tomatetutiempo,
  best_coffee,
  busticket,
  offitec,
  comite_ganaderos,
  portfolio,
  juego_memoria,
  tetris_game
};