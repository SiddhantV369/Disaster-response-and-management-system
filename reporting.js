

function formData(){
    let inci=document.getElementById('incident');
    let desc=document.getElementById('description');
    let place=document.getElementById('place');
    let date=document.getElementById('date');
    let incidentobj={incident:inci.value,description:desc.value,location:place.value,date:date.value};
    if(inci.value!==''&&desc.value!==''&&place.value!==''&&date.value!==''){
        return incidentobj;
    }
    alert("please fill out all the feilds before submitting")
    return null;   
    
}

document.querySelector('.submit').addEventListener('click',()=>{
    let data=formData()
    if (data!=null){
        fetch("http://localhost:3000/api/incidentrep", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then((res)=>{if(res.status===200){
            window.location.href="index.html";
            alert("Report Submitted Sucessfully")
        }})
    }
})
