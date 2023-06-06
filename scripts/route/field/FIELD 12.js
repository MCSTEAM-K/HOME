fetch('https://script.google.com/macros/s/AKfycbx0Q3bUZ7S15wT5CgVmmOHgzk1G41O0ri4fDAckNT2VvZcTF35tOr_cUqWhyHHUp2RLXQ/exec')
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

