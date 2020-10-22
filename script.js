// TODO: add code here
window.addEventListener("load", function(){
    let json = [];


    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {

            const astronaut = document.getElementById("container");
            for(let i=0; i< json.length; i++){
                astronaut.innerHTML += `
                <div class="astronaut">
                <div>
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li class="text">Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(", ")}</li>
                </ul>
                    </div>
                <img class="avatar" src=${json[i].picture}>
                </div>
            `;


                
                i = (i + 1) % json.length;
                }

            






        });


    });






});
