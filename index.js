// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({"name": userName, "email": userEmail})
    })    
    .then(resp => resp.json())
    .then(data => {
        const newId = data.id;
        const p = document.createElement('p');
        p.textContent = newId;
        const body = document.querySelector('body');
        body.append(p)
    })
    .catch(someError => {
        const p = document.createElement('p');
        p.textContent = someError.message;
        const body = document.querySelector('body');
        body.append(p)
    })
}
