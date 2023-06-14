fetch('https://script.google.com/macros/s/AKfycbx6n7fvk9pRFftvxkFqH3qR3qKAtXyMWf4umJoplLONVjzwGu1u7797y3hHlcQHz8KpZg/exec')
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

