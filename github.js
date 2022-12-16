class Github{
    constructor(){
        this.repos_count = 5
        this.repo_sort = 'created: asc';
    }

   async getUser(user){

        const response = await fetch(`https://api.github.com/users/${user}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}`);

        const profile = await response.json();

        const repo = await repoResponse.json();

        return{

            profile,
            repo
        }
    }
}