import { obj } from "./swrodsman";
const newObj = obj;

export default function orderByProps (newObj) {
    let orderList = [];
    let listOfAz = [];
    let orederListOfAz = [];
    for (const prop in newObj) {
        if(prop == "name") {
             orderList.push({ key: prop, value: newObj[prop] });
            }
        if(prop == "level") {
            orderList.push({ key: prop, value: newObj[prop] });
            }
        else {
            listOfAz.push(prop);
            listOfAz.sort();
            orederListOfAz = listOfAz.map((prop) => ({ key: prop, value: newObj[prop] }));
        }
        return [...orderList, ...orederListOfAz];
    }
}