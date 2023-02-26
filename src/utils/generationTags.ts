// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

export interface ITagItemProps {
  uuid: string;
  name: string;
  type: 'music' | 'any';
  url: string;
}
export function generationTag(): ITagItemProps {
  const { datatype, lorem } = faker;
  const { boolean, uuid } = datatype;

  const name = lorem.slug(1);
  const type = boolean() ? 'music' : 'any';
  const url = `/tag/${name}`;

  return {
    uuid: uuid(),
    name,
    type,
    url,
  };
}
