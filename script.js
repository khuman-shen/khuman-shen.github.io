
    const greetSpan = document.getElementById("greeting-text");
    const speed = 150;
    const text = "Welcome, Fellow Traveller"
    let i=0;
    function typewriter(){
        if (i < text.length){
            greetSpan.innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriter,speed);
        }
    }
    window.onload = typewriter;
    