import type { PetState } from './PetState';

export function feedPet(pet: PetState, amount: number): PetState {
  return {
    ...pet,
    hunger: Math.min(100, pet.hunger + amount),
  };
}