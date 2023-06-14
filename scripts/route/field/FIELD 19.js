fetch('https://script.google.com/macros/s/AKfycbwsB8mtiQuypMhELjhpdZDXnBSFuTr3NskDYAzA7LgpEArCSkXVBwPqEAKgEAd1gSnR7g/exec')
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

