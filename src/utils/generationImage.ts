// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

export function generationImage(): { src: string; alt: string } {
  return {
    src: faker.image.imageUrl(100, 100, undefined, true),
    alt: faker.random.words(4),
  };
}
