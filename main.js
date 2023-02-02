function showCbs(){
    document.getElementById('cbsheader').style.color ='aqua'
    document.getElementById('rbankheader').style.color ='white'
    document.getElementById('bmiheader').style.color ='white'
    document.getElementById('unistarheader').style.color ='white'
    document.getElementById('cbs').style.display = 'block'
    document.getElementById('rbank').style.display = 'none'
    document.getElementById('bmi').style.display = 'none'
    document.getElementById('unistar').style.display = 'none'
}
function showRbank(){
    document.getElementById('cbsheader').style.color ='white'
    document.getElementById('rbankheader').style.color ='aqua'
    document.getElementById('bmiheader').style.color ='white'
    document.getElementById('unistarheader').style.color ='white'
    document.getElementById('cbs').style.display = 'none'
    document.getElementById('rbank').style.display = 'block'
    document.getElementById('bmi').style.display = 'none'
    document.getElementById('unistar').style.display = 'none'
}
function showBmi(){
    document.getElementById('cbsheader').style.color ='white'
    document.getElementById('rbankheader').style.color ='white'
    document.getElementById('bmiheader').style.color ='aqua'
    document.getElementById('unistarheader').style.color ='white'
    document.getElementById('cbs').style.display = 'none'
    document.getElementById('rbank').style.display = 'none'
    document.getElementById('bmi').style.display = 'block'
    document.getElementById('unistar').style.display = 'none'
}
function showUnistar(){
    document.getElementById('cbsheader').style.color ='white'
    document.getElementById('rbankheader').style.color ='white'
    document.getElementById('bmiheader').style.color ='white'
    document.getElementById('unistarheader').style.color ='aqua'
    document.getElementById('cbs').style.display = 'none'
    document.getElementById('rbank').style.display = 'none'
    document.getElementById('bmi').style.display = 'none'
    document.getElementById('unistar').style.display = 'block'
}
function showForField(){
    if(document.getElementById('forfieldtable').style.display == 'none'){
        document.getElementById('forfieldtable').style.display = 'block'
        document.getElementById('forfieldlabel').style.color = 'yellow'
        document.getElementById('releasedtabele').style.display = 'none'
        document.getElementById('releasedlabel').style.color = 'white'
        document.getElementById('remainingtable').style.display = 'none'
        document.getElementById('remaininglabel').style.color = 'white'
    }
    else{
        document.getElementById('forfieldtable').style.display = 'none'
        document.getElementById('forfieldlabel').style.color = 'white'
    }
}   
function showReleased(){
    if(document.getElementById('releasedtabele').style.display == 'none'){
        document.getElementById('releasedtabele').style.display = 'block'
        document.getElementById('releasedlabel').style.color = 'yellow'
        document.getElementById('forfieldtable').style.display = 'none'
        document.getElementById('forfieldlabel').style.color = 'white'
        document.getElementById('remainingtable').style.display = 'none'
        document.getElementById('remaininglabel').style.color = 'white'
    }
    else{
        document.getElementById('releasedtabele').style.display = 'none'
        document.getElementById('releasedlabel').style.color = 'white'
    }
}  
function showRemaining(){
    if(document.getElementById('remainingtable').style.display == 'none'){
        document.getElementById('remainingtable').style.display = 'block'
        document.getElementById('remaininglabel').style.color = 'yellow'
        document.getElementById('forfieldtable').style.display = 'none'
        document.getElementById('forfieldlabel').style.color = 'white'
        document.getElementById('releasedtabele').style.display = 'none'
        document.getElementById('releasedlabel').style.color = 'white'
    }
    else{
        document.getElementById('remainingtable').style.display = 'none'
        document.getElementById('remaininglabel').style.color = 'white'
    }
}   

function tableSearchForField(){
    let input, filter, table, tr, td, textvalue;

    input = document.getElementById('search1');
    filter = input.value.toUpperCase();
    table = document.getElementById('forfieldata');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[4];
        if (td) {
            textvalue = td.textContent || td.innerText;
            if (textvalue.toLocaleUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else{
                tr[i].style.display = "none";
            }
        }
    }
}

function tableSearchForResultCampaign(){
    let input, filter, table, tr, td, textvalue;

    input = document.getElementById('search2');
    filter = input.value.toUpperCase();
    table = document.getElementById('releaseddata');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            textvalue = td.textContent || td.innerText;
            if (textvalue.toLocaleUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else{
                tr[i].style.display = "none";
            }
        }
    }
}

function tableSearchForResultName(){
    let input, filter, table, tr, td, textvalue;

    input = document.getElementById('search4');
    filter = input.value.toUpperCase();
    table = document.getElementById('releaseddata');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[6];
        if (td) {
            textvalue = td.textContent || td.innerText;
            if (textvalue.toLocaleUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else{
                tr[i].style.display = "none";
            }
        }
    }
}

function tableSearchForRemaining(){
    let input, filter, table, tr, td, textvalue;

    input = document.getElementById('search3');
    filter = input.value.toUpperCase();
    table = document.getElementById('remainingdata');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName('td')[4];
        if (td) {
            textvalue = td.textContent || td.innerText;
            if (textvalue.toLocaleUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else{
                tr[i].style.display = "none";
            }
        }
    }
}