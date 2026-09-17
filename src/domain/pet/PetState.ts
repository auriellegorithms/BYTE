export type PetMood =
  | 'happy'
  | 'content'
  | 'hungry'
  | 'tired'
  | 'sleeping'
  | 'focused';

export type PetState = {
  name: string;
  hunger: number;
  happiness: number;
  energy: number;
  mood: PetMood;
};