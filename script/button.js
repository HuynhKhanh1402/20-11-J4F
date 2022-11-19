var button = document.getElementById('playBut')
button.onclick = function() {
    var audio = new Audio("./resource/sound.mp3")
    audio.loop = true
    audio.play()
    document.getElementById("button").remove()
    document.body.innerHTML = `
                <div class="pop-up" id=a>
                    <div id="wrapper">
                        <div class="envelope open">
                            <div class="flap front"></div>
                            <div class="flap top"></div>
                            <div class="letter"></div>
                        </div>
                    </div>
                    <h1 style="text-align:center ;color:brown;">From 12A4 NH with LOVE</h1>
                </div>
                <div class="book" id="book">
                    <div class="book-first"></div>
                </div>    
                `
    var s = document.createElement('script');
    s.setAttribute('src', "./script/letter.js")
    document.body.appendChild(s)
}

