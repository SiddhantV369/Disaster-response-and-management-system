fetch("http://localhost:3000/api/fundraisers").then(res=>res.json()).then((data)=>{
    let cont=document.querySelector('.container');
    for(fund of data){
        let card=document.createElement("div")
        card.className='fundraiser-card';
        card.innerHTML=`<h2>Name:${fund.name}</h2>
            <p>Description: ${fund["description"]}</p>
            <p class="amounts">Target Amount: ₹${fund.target}</p>
            <p class="amounts">Current Amount: ₹${fund.current}</p>
            <p class="date">Date:${fund.date}</p>
            <p class="status">Status:${fund.status}</p>
            <a href="#" class="donate-button">Donate</a>`
        cont.append(card);
    }

})