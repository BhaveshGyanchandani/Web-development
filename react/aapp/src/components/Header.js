export const des = ['Know','Learn' , ' Develop'];
export function getRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}
export const descriptor = des[getRandomInt(2)];