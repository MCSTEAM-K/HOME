fetch('https://script.google.com/macros/s/AKfycbw-BgBj9c8Sz2CDUTVPZvUYRntnrZ5ZL7pXa9Zl0QunIj-MqVTGyoWBUn7Khi9kxdSO/exec')
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

