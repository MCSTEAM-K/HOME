fetch('https://script.google.com/macros/s/AKfycbw418rTZaBJIJmVWXWmQAF4tjtgs7mpQDrLA4sbBG76zr6CGoH-jTiS5AbT1BOQa9Zy/exec')
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

