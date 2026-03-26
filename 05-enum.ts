(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'Me',
        // Teacher,
        Teacher = 'Ako',
        // Student,
        Student = 'Eunice',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.Teacher;

    console.log(userRole)
})()