const username = document.getElementById('username')

username.addEventListener('keyup', function(e){
    if (username !== ''){

        const name = e.target.value
        console.log(name)
    }

})