class UI{
    constructor(){
        this.profile = document.getElementById('main_profile')
        this.latestRepo = document.getElementById('latest_repos')
    }
    

    // muteProfile(){
    //     this.profile.innerHTML = ''
    // }
    showProfile(owner){
        this.profile.innerHTML = `
        <div class=" sm:min-w-80 " >
        <img src="${owner.avatar_url}" alt="" class="origin-center">
        <a href="${owner.html_url}" class="flex justify-center py-1 mt-8 text-white align-middle bg-blue-500 rounded-md ">View Profile</a>
    </div>
    <div  class="my-4 leading-10 sm:ml-3 sm:col-start-2 sm:col-end-4">
        <div>
            <span class="px-3 py-2 text-white bg-blue-600 rounded-md">Public Repo:${owner.public_repos}</span>
            <span class="px-3 py-2 text-white bg-gray-600 rounded-md">Public Gist:${owner.public_gists}</span>
            <span class="px-3 py-2 text-white bg-green-600 rounded-md">Followers:${owner.followers}</span>
            <span class="px-3 py-2 text-white rounded-md bg-violet-600">Following:${owner.following}</span>
        </div>
        <div class="mt-4">
            <ul class="border rounded-md ">
                <li class="px-3 py-1 border">Company:${owner.company}</li>
                <li class="px-3 py-1 border">Website/Blog:${owner.blog}</li>
                <li class="px-3 py-1 border">Location:${owner.location}</li>
                <li class="px-3 py-1 border">Member since:${owner.created_at}</li>
            </ul>
        </div>
    </div>
        `
    }



    showRepo(repos){
        let details = ''; 

        repos.forEach(repo => {
            details += `
            <div class="flex justify-between my-2 align-middle border-2" id="normal" >
            <div class="px-2 py-2"><a href="${repo.html_url}" target="_blank" >${repo.name}</a></div>
            <div class="leading-loose ">
                <span  class="px-1 py-1 text-white bg-blue-600 rounded-md" id="repo_span">Stars:${repo.stargazers_count}</span>
                <span  class="px-1 py-1 text-white bg-gray-600 rounded-md" id="repo_span">Watchers:${repo.watchers_count}</span>
                <span  class="px-1 py-1 text-white bg-green-600 rounded-md" id="repo_span">Forks:${repo.forms_count}</span>
            </div>
          </div>           
            `
        });

        this.latestRepo.innerHTML = details
    }

    showAlert(message){
        this.clearAlert()

        const alertDiv = document.createElement('div')

        alertDiv.classList = 'p-3 mx-8 mt-4 sm:mx-28 sm:p-5 sm:mt-8 text-red-500 text-xl font-medium'

        alertDiv.id = 'error'

        alertDiv.appendChild(document.createTextNode(message))

        const main = document.getElementById('main_profile')

        const body = document.querySelector('body')

        body.insertBefore(alertDiv, main)

        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }


    clearInput(){
        this.profile.innerHTML = ''
        this.latestRepo.innerHTML = ''

    }

    clearAlert(){
        const alert = document.getElementById('error');

        if(alert){
            alert.remove();
        }
    }
}
