const clock = document.getElementById("clock")



setInterval(function() {
    let date = new Date()
   
    // body = date.toLocaleTimeString()
    // clock.innerHTML = body

    clock.innerHTML = date.toLocaleTimeString()
}, 1000)