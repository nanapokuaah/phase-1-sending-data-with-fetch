const { expect } = require("chai");

// Add your code here
function submitData(firstName, email){
    const confgObj = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            "name": firstName,
            "email": email
        })
        };
        return fetch("http://localhost:3000/users", confgObj)
        .then(res => res.json())
        .then(body => addNewContact(body.id))
        .catch(error => document.body.innerHTML = error.message)
          setTimeout(() => expect(document.innerHTML).to.include(message),500)
        
    }
    function addNewContact(newID){
        document.getElementsByTagName("body")[0].innerHTML = newID;
        document.append(message)
    }
submitData("Name","name@name.com")
let message = "Unauthorized Access"
