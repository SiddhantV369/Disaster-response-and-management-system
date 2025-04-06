fetch("http://localhost:3000/api/vouleteer").then(res=>res.json()).then((data)=>{
    let cont=document.querySelector('.container');
    for(grp of data){
        let card=document.createElement("div")
        card.className='volunteer-card';
        card.innerHTML=`<div class="volunteer-header">
                <h2>Volunteer with Us!</h2>
            </div>
            <div class="volunteer-body">
                <h3 class="volunteer-title">${grp.title}</h3>
                <p class="volunteer-description">${grp.description}</p>
                <p class="volunteer-details"><strong>Location:</strong> ${grp.location}<br><strong>members:</strong> ${grp.members}<br><strong>Contact:</strong> ${grp.contact}</p>
                <a href="register.html" class="join-btn">Join Now</a>
            </div>`
        cont.append(card);
    }

})
