//main variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    getRepos();
};

//Get Repos function 

function getRepos() {

    if (theInput.value == "") { // if value is empty 

        reposData.innerHTML = "<span>Please Write Github Username</span>"

    }

    else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

            .then((response) => response.json())

            .then((repositories) => {

                // Empty The Container 
                reposData.innerHTML = '';

                // Loop On Repositories
                repositories.forEach(repo => {

                    // create the main div element
                    let mainDiv = document.createElement("div");

                    //create repo nae text 
                    let repoName = document.createTextNode(repo.name);

                    //Append teh text to main div 
                    mainDiv.appendChild(repoName);

                    //Create repo URL
                    let theUrl = document.createElement('a');

                    //Create repo url text 
                    let theUrlText = document.createTextNode("Visit");

                    //Append The Repo Url Text To Anchor Tag
                    theUrl.appendChild(theUrlText);

                    //Add The Hypertext Reference "href"
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                    //Set Attribute Blanck 
                    theUrl.setAttribute('target', '_blanck');

                    //Append Url Anchor To Main Div
                    mainDiv.appendChild(theUrl);

                    //Create stars count span 
                    let StarsSpan = document.createElement("span");

                    //Create stars count text 
                    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                    //Add stars  Count Text To Stars Span
                    StarsSpan.appendChild(starsText);

                    //Append Stars Count Span To Main Div 
                    mainDiv.appendChild(StarsSpan);

                    //Add Class On Main Div 
                    mainDiv.className = 'repo-box';

                    //Append the name div to container 
                    reposData.appendChild(mainDiv);
                });
            });

    }


};
