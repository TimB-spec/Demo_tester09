interface User{
    id: number
    name?: string
    email?:string
    age?: number
}
//  them dau ? cac thanh phan o tren de ko can truyen o duoi cung duoc

let user: User = {
    id: 1,
    name: "Phuong",
    email: "phuong@gmail.com",
    age: 30
}

console.log(user);
console.log(user.name)

let listUser: User[] = [
    {
        id: 1,
        name: "Duy"
    },
    {
        id: 2, name : "Nam"
    }

]
for (let user of listUser){
    console.log(user)
}