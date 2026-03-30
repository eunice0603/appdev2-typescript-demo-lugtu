(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'student'

    // userRole = 'guest'
    
    // let anotherUserRole: UserRole = 'superadmin'

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        if (role === 'admin') {
            return ['read', 'write', 'delete']
        } else if (role === 'teacher') {
            return ['read', 'write']
        } else {
            return ['read']
        }
    }

    console.log(userRole)
    // console.log(anotherUserRole)

    access('guest')
})()