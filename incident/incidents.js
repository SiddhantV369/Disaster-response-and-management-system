fetch("http://localhost:3000/api/incidents").then(res=>res.json()).then((data)=>{
    let cont=document.querySelector('.container');
    for(incident of data){
        let card=document.createElement("div")
        card.className='incident';
        card.innerHTML=`<h3>${incident["incident"]}</h3>
            <p>${incident["description"]}</p>
            <p>Place: ${incident["location"]}</p>
            <p>${incident["date"].slice(0,10)}</p>`
        cont.append(card);
    }

})