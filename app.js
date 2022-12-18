const username = document.getElementById('username')

// instantiate a github objet from Github class
 
const github = new Github

// instantiate a ui objet from UI class

const ui = new UI

// add event for input

username.addEventListener('keyup', function(e){
    if (username !== ''){
// assign the input value to a variable

        const name = e.target.value

        //  make http call from api

        github.getUser(name)
            .then (data => {
                // console.log(data.profile)
                if(data.profile.message === 'Not Found'){
                    // show error alert
                    ui.showAlert('User not found...')

                    ui.clearInput()
                }else{
                    // show prfile information

                    // console.log(data)
                    ui.showProfile(data.profile)
                    ui.showRepo(data.repo)
                }
            })
    }else {
        // clear/remove profile

        ui.clearInput()
    }

})