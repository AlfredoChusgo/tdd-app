
let authUsers = [{username:'admin',password:'password'},{username:'teammate',password:'teammate'}];

export function authenticate({username,password}){
    let filter = authUsers.filter(e=>e.username == username && e.password == password);
    return filter.length > 0;    
}