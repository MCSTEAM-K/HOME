fetch('https://script.google.com/macros/s/AKfycbzcdmI-xPfqLv_AcOCWzj1j0D7soiC20TSx2MIY84oejv4e2Rj9KMQeahAnPth7XyshvA/exec')
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

