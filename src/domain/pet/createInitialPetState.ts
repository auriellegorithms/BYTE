import type { PetState } from './PetState';

export function createInitialPetState(): PetState {
  return {
    name: 'BYTE',
    hunger: 75,
    happiness: 80,
    energy: 100,
    mood: 'content',
  };
}