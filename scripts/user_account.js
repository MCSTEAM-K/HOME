fetch('https://script.google.com/macros/s/AKfycbx0XSoWs2jZ_4_QcPiBFepWoPdw6d3TwBw57hDuI_jpI9ZsvcusKzclHOW5ygzVUh4bjQ/exec')
.then(res => res.json())
.then(data => {

    const submit_button = document.getElementById("submit_button");
        const form = document.forms.login;
        form.addEventListener('submit', function(event){
        event.preventDefault();
        })

    submit_button.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        for(x=1; x<data.content.length; x++){
            if(username === data.content[x][2] && password === data.content[x][3]){
                if(data.content[x][0] === "FIELD 1"){
                    window.location.assign("users/field1.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 2"){
                    window.location.assign("users/field2.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 3"){
                    window.location.assign("users/field3.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 4"){
                    window.location.assign("users/field4.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 5"){
                    window.location.assign("users/field5.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 6"){
                    window.location.assign("users/field6.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 7"){
                    window.location.assign("users/field7.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 8"){
                    window.location.assign("users/field8.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 9"){
                    window.location.assign("users/field9.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 10"){
                    window.location.assign("users/field10.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 11"){
                    window.location.assign("users/field11.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 12"){
                    window.location.assign("users/field12.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 13"){
                    window.location.assign("users/field13.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 14"){
                    window.location.assign("users/field14.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 15"){
                    window.location.assign("users/field15.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 16"){
                    window.location.assign("users/field16.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 17"){
                    window.location.assign("users/field17.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 18"){
                    window.location.assign("users/field18.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 19"){
                    window.location.assign("users/field19.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "FIELD 20"){
                    window.location.assign("users/field120.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "ADMIN"){
                    window.location.assign("users/admin.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
                else if(data.content[x][0] === "ACCOUNTING"){
                    window.location.assign("users/accounting.html")
                    console.log("authenticated")
                    document.getElementById('error-message').innerText = ''
                }
            else{
                document.getElementById('error-message').innerText = 'Username and Password did not match'
                document.getElementById('error-message').style.color = 'red'
            }
        }}
    })
})