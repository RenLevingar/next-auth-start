export const userService = {
    authenticate,
}

function authenticate(username:string, password:string){
    if(username !== "admin" || password !== "admin"){
        // Fot the simplicity of the code we jsut hard coded the username and password to admin 
        return null;
        // if the user does not authenticate we reutn null. We will also allow the UI to show the error and to make the user chck the details wihtout giving them a hint
    }

    const user = {
        id:"1234567",
        name:"Da Murph",
        email:"murph@gmail.com"
        // Pretend the user is authenticated we create the user object
    }
    return user;
}