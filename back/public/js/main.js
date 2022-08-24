

function addData(formData, link){
    fetch(`/${link}`,{
        headers:{
            'Content-type':'application/json',
        },
        method: 'post',
        body: JSON.stringify(formData)
    }).then(res => res.json())
    .then(newData => {
        if(newData == 'ok'){
            location.reload()
        }
        else{
            alert(newData)
        }
    })
}

function upData(formData, link){
    fetch(`/${link}/save`,{
        headers:{
            'Content-type':'application/json',
        },
        method: 'put',
        body: JSON.stringify(formData)
    }).then(res => res.json())
    .then(newData => {
        if(upData == 'ok'){
            location.reload()
        }
        else{
            alert(upData)
        }
    })
}

function getData(link, id){
    fetch(`/${link}/${id}`)
    .then(res => res.json())
    .then(upData => {
       if(upData !== 'error'){
           let formName = `up${link}`
           let form = document.forms[formName]
           for(key in upData){
                if(key == 'status'){
                    form[key].checked = upData[key] == 1 ? true : false
                    continue 
                }
                if(form[key]){
                    form[key].value = upData[key]
                }
           }
       }
    })
}

