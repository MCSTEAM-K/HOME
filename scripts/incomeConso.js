fetch('https://script.google.com/macros/s/AKfycbx8A4Ij1bEGcmNkp1g6ufPq3OyR7_X7NrreKflKXqjlzuOHCN_zxlt819rH1bOA55i7pw/exec')
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
    document.getElementById("tableIncomeConsoData").innerHTML = tr;

})
