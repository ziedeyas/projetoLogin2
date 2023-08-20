export class Users{

    //atributos
    id ?: string;
    name ?: string;
    status ?: string;
    token ?: string;
    email ?: string;
    password ?: string;

    constructor(id?:string,name?:string,status?:string,token?:string,email?:string,password?:string){
        this.id = id;
        this.name = name; 
        this.status = status;
        this.token = token;
        this.email = email;
        this.password = password;

    }
}