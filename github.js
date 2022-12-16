class Github{
    constructor(){}

   async getUser(user){

        const response = await fetch(`https://api.github.com/users/${user}`);

        const profile = await response.json();

        return{

            profile
        }
    }
}