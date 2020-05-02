$(document).ready(function(){

  //create function to run json objects
  function getCard(identity) {
    let Card = `
      <article class="flex-container main">
        <div>
           <img class="headshot" id="surprise" class="Card_image" src="${identity.image}">
           <h1 class="Card_name">${identity.name}</h1>
           <h2 class="Card_jobTitle">${identity.jobTitle}</h2>
        </div>
        <div class="details" id="water">
           <p class="Card_company"><b>Company: </b>${identity.company}</p>
           <p class="Card_experience"><b>Experience: </b>${identity.experience}</p>
           <p class="Card_school"><b>School: </b>${identity.school}</p>
           <p class="Card_major"><b>Major: </b>${identity.major}</p>
           <p class="Card_email"><b>Email: </b>${identity.email}</p>
           <p><img src="img/linkedin.svg" alt="linkedin logo" class="Card_linkedInUrl"> ${identity.linkedInUrl}</p>
        </div>
      </article>
    `;
    return Card;
  }

  //run loop over all objects
  const demo = employees.map(function(getCard){
    let Card = `<article class="flex-container main">
        <div>
           <img class="headshot" id="surprise" class="Card_image" src="${getCard.image}">
           <h1 class="Card_name">${getCard.name}</h1>
           <h2 class="Card_jobTitle">${getCard.jobTitle}</h2>
        </div>
        <div class="details" id="water">
           <p class="Card_company"><b>Company: </b>${getCard.company}</p>
           <p class="Card_experience"><b>Experience: </b>${getCard.experience}</p>
           <p class="Card_school"><b>School: </b>${getCard.school}</p>
           <p class="Card_major"><b>Major: </b>${getCard.major}</p>
           <p class="Card_email"><b>Email: </b>${getCard.email}</p>
           <p><img src="img/linkedin.svg" alt="linkedin logo" class="Card_linkedInUrl"> ${getCard.linkedInUrl}</p>
        </div>
      </article>
      `;
      return Card;
    });

  //append objects to HTML
  $(".test").append(demo);
});
