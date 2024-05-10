import { obj } from "../swrodsman";

test('test object', () => {
    const objectNew = obj;
    const result = {
        name: 'мечник', 
        health: 10, 
        level: 2, 
        attack: 80, 
        defence: 40
    };
    expect(objectNew).toMatchObject(result);
  });