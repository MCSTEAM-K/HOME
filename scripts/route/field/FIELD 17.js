fetch('https://script.google.com/macros/s/AKfycbz9VouAI914mtqGh7mP55wgT2j8NUmmfkXy832vjKQ7HIGU6amkub8zFlqyDzfoFS_-/exec')
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

