fetch('https://script.google.com/macros/s/AKfycbz2yyhfcOk-tcP4DKRguAa7CpVbkyiZOXIIpvn89DJWwVKXqFDQdzPzzUge8CXEV-o/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")
    // console.log(tr)
    document.getElementById("fieldDashboardList").innerHTML = tr;
})

