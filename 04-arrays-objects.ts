let hobbies = ["Eating", "Watching"]

// hobbies.push(3)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Eunice", "Eunice0603", 67890]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Eunice",
    age: 20,
    hobbies: ["Reading", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

// console.log(user)

// Must not null or undefined
let val: {} = "Eunice Lugtu"

// console.log(val)

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 3,
    name: 'Eunice'
    // isPartTimeInstructor: true
}

console.log(data)