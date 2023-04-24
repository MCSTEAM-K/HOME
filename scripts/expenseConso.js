fetch('https://script.google.com/macros/s/AKfycbznNwEju0P58aTDrdXtBMzF-D1ZnMKWvHpn99Hx3JS9unPdZJHUxqnroh-TAPqQobBmbQ/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")

    const formatter = new Intl.NumberFormat('en',{
        style: 'currency',
        currency: 'PHP',
        useGrouping: 'true',
        notation: 'compact'

    });

    document.getElementById("tableExpenseConsoData").innerHTML = tr;
    // console.log(tr)
})

