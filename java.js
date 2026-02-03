alert("Click F11 for better experience :>");
    document.getElementById("form").style.animationName = "popup";

    const form = document.getElementById("form");
    const pass = document.getElementById("pass");
    const cont = document.getElementById("pass");
    const text = document.getElementById("text");
    const bg = document.getElementById("bg");
    const login = document.getElementById("login");
    const bg2 = document.getElementById("bg2");
    const main2 = document.getElementById("main2");
    const cake = document.getElementById("cake");
    const mc = document.getElementById("mc");
    
    function checkPass(){

        if(pass.value === '051625'){
            form.style.animationDelay = "0s"; 
            form.style.animationName = "vanish"; 
                     
            setTimeout (() => {
                bg2.style.animationName = "slide";
                login.style.display = "none";
                    setTimeout (() => {

                        main2.style.visibility = "visible";
                        cake.style.animationName = "popup";
                        
                        document.getElementById("guide").style.animationName = "popup";
                        document.getElementById("mess").style.animationName = "fadein";
                        document.getElementById("her").style.animationName = "fadein";
                        document.getElementById("img5").style.animationName = "popup";
                        document.getElementById("greet").style.animationName = "popup";
                    },500);
            },500);
        }else{        
            cont.style.color = "red";
            cont.style.borderColor = "red"
            cont.style.animationName = "wrong";

            setTimeout (() => {
                cont.style.color = "white";
                cont.style.borderColor = "white"
                cont.style.animationName = "w";
            }, 600);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
    const cake = document.querySelector(".cake");
    const candleCountDisplay = document.getElementById("candleCount");
    let candles = [];
    let audioContext;
    let analyser;
    let microphone;
    let audio = new Audio('hbd.mp3');


    function updateCandleCount() {
        const activeCandles = candles.filter(
        (candle) => !candle.classList.contains("out")
        ).length;
        candleCountDisplay.textContent = activeCandles;
    }

    function addCandle(left, top) {
        const candle = document.createElement("div");
        candle.className = "candle";
        candle.style.left = left + "px";
        candle.style.top = top + "px";

        const flame = document.createElement("div");
        flame.className = "flame";
        candle.appendChild(flame);

        cake.appendChild(candle);
        candles.push(candle);
        updateCandleCount();
    }

    cake.addEventListener("click", function (event) {
        const rect = cake.getBoundingClientRect();
        const left = event.clientX - rect.left;
        const top = event.clientY - rect.top;
        addCandle(left, top);
    });

    function isBlowing() {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
        }
        let average = sum / bufferLength;

        return average > 50; //ETO CHANGEEEEEE
    }

    function blowOutCandles() {
        let blownOut = 0;

        // Only check for blowing if there are candles and at least one is not blown out
        if (candles.length > 0 && candles.some((candle) => !candle.classList.contains("out"))) {
        if (isBlowing()) {
            candles.forEach((candle) => {
            if (!candle.classList.contains("out") && Math.random() > 0.5) {
                candle.classList.add("out");
                blownOut++;
            }
            });
        }

        if (blownOut > 0) {
            updateCandleCount();
        }

        // If all candles are blown out, trigger confetti after a small delay
        if (candles.every((candle) => candle.classList.contains("out"))) {
            setTimeout(function() {
            triggerConfetti();
            endlessConfetti(); // Start the endless confetti
            }, 200);
            audio.play();
        }
        }
    }



    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(stream);
            microphone.connect(analyser);
            analyser.fftSize = 256;
            setInterval(blowOutCandles, 200);
        })
        .catch(function (err) {
            console.log("Unable to access microphone: " + err);
        });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }
    });

    function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    }

    function endlessConfetti() {
    setInterval(function() {
        confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0 }
        });
    }, 1000);
    }

    function readM(){
        mc.style.animationName = "popup";
    }

    function closeM(){
        mc.style.animationName = "vanish";
    }