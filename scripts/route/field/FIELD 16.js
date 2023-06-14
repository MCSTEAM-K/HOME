fetch('https://script.google.com/macros/s/AKfycbxWq9ktMghOen-bO7T0b4RMEdlnMvo5dSGlSL7N0GbjjJhp3RPgANd8WG28sHG5qCKz/exec')
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

