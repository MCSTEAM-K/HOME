fetch('https://script.google.com/macros/s/AKfycbw4azDwgfMyheUsxIdDRf9-vr7ax3SFAtOhvPivnMKidDctcZHK8jRVDjJJNYNqNw8/exec')
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

