class UI{
    constructor(){
        this.profile = document.getElementById('main_profile')
    }
    

    showProfile(owner){
        this.profile.innerHTML = `
        <div class=" sm:min-w-80 ">
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
}
