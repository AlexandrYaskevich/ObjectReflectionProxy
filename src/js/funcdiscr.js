import { character } from "../character";

export default function Distr (character) {
    const arrayAtack = [];

    for (const atack in character.special) {
       const {
        id,
        name,
        description,
        icon
       } = atack;
       arrayAtack.push({        
        id,
        name,
        description: description !== undefined ? description : 'Описание недоступно',
        icon
    })

        return arrayAtack;
    }
}


