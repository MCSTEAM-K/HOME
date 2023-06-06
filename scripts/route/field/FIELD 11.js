fetch('https://script.google.com/macros/s/AKfycbxYf92jUdeJLAaXTUpG9_hdqhPdSUwC0O3B9ihVXO-vtyKdkU7qZ8YnooHcu7sCIMeZ4w/exec')
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

