//      Destructure For Object
const person = {Name : 'Jack William', age : 22, job : 'Freelancer', gfName : 'Ema watson', phone : 01722664488, village : 'South Lengapara'}
const {village, phone, gfName, salary} = person;
// const gfName = person.gfName;
// const phone  = person.phone;

console.log(gfName, phone, salary, village);
console.log(gfName, phone, salary, village);
console.log(gfName, phone, salary, village);
// console.log(gfName, phone);


const complexObject = {
    Name : 'ami Junaed',
    info : {
        address : 'Shayestagnaj',
        leader  : 'Ragnar Lothbrok'
    } 
}
const {leader} = complexObject.info;
console.log(leader);






//     Destructure For Array
const friends = ['sakib khan','Arman Khan', 'Amir Khan', 'Salman Khan', 'Sohel Khan'];
const [chotoFriend, nextFriend,...BakiFriends] = friends;
console.log(chotoFriend, nextFriend);
console.log(BakiFriends);