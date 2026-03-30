(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'student'

    let user: User = {
        name: "Eunice",
        age: 20,
        role: userRole,
        permission: ["read", "write"]
    }

    function access(role: Role) {
        if (role === 'admin') {
            console.log('full access')
        } else if (role === 'teacher') {
            console.log('could edit content')
        } else if (role === 'student') {
            console.log('could view content')
        } else {
            console.log('no access')
        }
    }

    console.log(userRole)
    console.log(user)
    access(userRole)
})()