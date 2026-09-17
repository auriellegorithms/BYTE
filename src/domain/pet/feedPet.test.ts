import { createInitialPetState } from './createInitialPetState';
import { feedPet } from './feedPet';

describe('feedPet', () => {
    it('increases hunger by the given amount', () => {
        const byte = createInitialPetState();

        const fedByte = feedPet(byte, 20);

        expect(fedByte.hunger).toBe(95);
    });

    it('does not increase hunger above 100', () => {
        const byte = createInitialPetState();

        const fedByte = feedPet(byte, 50);

        expect(fedByte.hunger).toBe(100);
    });

    it('does not modify the original pet state', () => {
        const byte = createInitialPetState();

        const fedByte = feedPet(byte, 20);

        expect(byte.hunger).toBe(75);
        expect(fedByte.hunger).toBe(95);
        expect(fedByte).not.toBe(byte);
    });
});