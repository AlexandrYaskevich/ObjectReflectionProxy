import { character } from "../character";

export default function Distr (character) {
    const arrayAtack = [];
    const objec = {};
    for (const atack in character.special) {
        if(atack == "id") {
            objec["id"] = character.special[atack]
        }
        if(atack == "name") {
            objec["name"] = character.special[atack];  
        }
        if(atack == "description") {
            objec["description"] = character.special[atack];  
        }
        if(!character.special.hasOwnProperty('description')) {
            objec["description"] = 'Описание недоступно';
        }
        if(atack == "icon") {
            objec["icon"] = character.special[atack];
        }

        return arrayAtack.push(objec);
    }
}