
let sendButton=document.getElementById('send-btn');
let msgContainer=document.querySelector('#msg-cont');
sendButton.addEventListener("click",()=>{
    let messegeArea=document.querySelector('.messege-area');
    let messege=messegeArea.value;
    if (messege !== ''){
        let msgBubble=document.createElement('div');
         msgBubble.className="message sender";
        msgBubble.innerText=messege;
        msgContainer.append(msgBubble);
    }
    fetch(`http://localhost:3000/api/chatbot/${messege}`).then(res=>res.json()).then((data)=>{
        let resObj=JSON.parse(data);
        let msgBubble=document.createElement('div');
        msgBubble.className="message receiver";
        msgBubble.innerText=resObj["obj"]; 
        msgContainer.append(msgBubble);
    })     
    messegeArea.value=''; 
    })



