export var nameList = [
'Time','Past','Future','Dev','Fly','Flying','Soar','Soaring','Power','Falling',
'Fall','Jump','Cliff','Mountain','Rend','Red','Blue','Green','Yellow','Gold',
'Demon','Demonic','Panda','Cat','Kitty','Kitten','Zero','Memory','Trooper','XX'
];

export function generateRandomNames() {
   return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(makeid(5));