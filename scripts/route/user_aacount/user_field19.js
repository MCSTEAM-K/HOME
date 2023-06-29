fetch('https://script.google.com/macros/s/AKfycbx0XSoWs2jZ_4_QcPiBFepWoPdw6d3TwBw57hDuI_jpI9ZsvcusKzclHOW5ygzVUh4bjQ/exec')
.then(res => res.json())
.then(data => {

    const user_name = document.getElementById("user_name");
    const user = document.getElementById("user");

    user_name.innerText = data.content[19][1];
    user.value = data.content[19][1];
})
