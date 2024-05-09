class User{
    constructor(){
        this.userFollowing= [];

    }
    follow(userDetails={}){
    const id= this.userFollowing.length +1;
     userDetails = {name:username,following:following};
     return this.userFollowing.push(userDetails);

    }
    
}
// console.log('tina',"tina@kenya");
 const user = new User ({name:"tina",following:"tina@kenya"})
 console.log(user);
// console.log(this.userFollowing);


