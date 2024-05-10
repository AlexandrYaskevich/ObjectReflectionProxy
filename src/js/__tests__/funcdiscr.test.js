import { character } from "../character";
import  Distr  from "../funcdiscr";

test('test atack', () => {
    const objectAtack = character;
    const result = [
        {
        id: 1,
        name: 'Attack 1',
        description: 'Description 1',
        icon: 'icon1.png'
    },
    {
        id: 2,
        name: 'Attack 2',
        description: 'Описание недоступно',
        icon: 'icon2.png'
    }
];
    expect(Distr(objectAtack)).toMatchObject(result);
  });
  