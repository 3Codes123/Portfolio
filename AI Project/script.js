function signUp() {
    const name = document.getElementById('name').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (localStorage.getItem('username') === username || username === 'admin') {
        alert("Username already exists. Please choose a different username")
        return
    }

    localStorage.setItem('name', name)
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    alert('Sign Up Successful! You can now sign in.')
    window.location.href = 'signin.html'
}

function signIn() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const defaultUsername = 'admin';
    const defaultPassword = 'admin';

    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')

    if (username === defaultUsername && password === defaultPassword) {
        localStorage.setItem('name', 'Admin')
        localStorage.setItem('username', 'admin')
        window.location.href = 'home.html'
    }
    else if (username !== storedUsername){
        alert("The Account with this Username doesn't exist.")
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
    }
    else if (password !== storedPassword) {
        alert("Incorrect Password.")
        document.getElementById('password').value = ''
    }
    else {
        window.location.href = 'home.html'
    }
}