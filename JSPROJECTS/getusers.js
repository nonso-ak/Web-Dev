/*
Part 1: Create a simple web page
-Create 'index.html, with a button labeled "Get Users" and a `<div>` for output.

part2: write asynchronous code
-create 'fetchUsers()' in 'scrip.js';
1. use 'fetch()' with 'await' to get data from 'https://jsonplaceholder.typicode.com/users'.
2. Handle errors with 'try...catch'.
3. display user names and emails on the page.

part3: Add error handling
-show an error message if the API fails.

part 4: add a loading indicator (optional challenge)
-show "loading..." before displaying users.

Also:
-Add a 2-second delay using 'seTimeout()' wrapped in a 'promise'.
*/
// 


const usersDiv = document.getElementById('users');
const getUsers = document.getElementById('getUsers');
const loadUsers = document.getElementById('loading')

async function fetchUsers() {
    try {
       usersDiv.innerHTML = 'loading...'
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("")
            }, 2000)
        })
        
        const users = await response.json();

        const usersDetails = users.map(user => `
            <div>
                <h3>${user.name}</h3>
                <small>Email: ${user.email}</small>
            </div>
        `).join('');
        
        usersDiv.innerHTML = usersDetails;
        
    } catch (error) {
        alert('Failed to fetch, check network')
    }
}

getUsers.addEventListener('click', fetchUsers);
