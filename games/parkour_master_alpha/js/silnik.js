class Silnik {
    constructor() {

        var skyCanvas = document.getElementById("sky-canvas");
		var bgCanvas = document.getElementById("bg-canvas");
        var fgCanvas = document.getElementById("fg-canvas");
        
        let canvas = {
            skyCtx: skyCanvas.getContext("2d"),
			bgCtx: bgCanvas.getContext("2d"),
			fgCtx: fgCanvas.getContext("2d"),
        }
        
        let grafika = new Image(); 
        grafika.src = "img/stylesheet.png";
		  
		grafika.addEventListener("load", function() {
			var grafika = this;
        });
        
        this.dane = {
            nrKlatki: 0,
			canvas: canvas, 
			grafika: grafika,
			audio: {
				melodia: new Audio("audio/theme_melody.mp3"),
				skok: new Audio("audio/jump_melody.mp3"),
				moneta: new Audio("audio/coin_melody.mp3"),
            },
            kontroler: {}
        }

        this.dane.kontroler = {
            wejscie: new Wejscie(),
            obiekty: new Obiekty(this.dane),
            animacje: new Animacje(),
            fizyka: new Fizyka(),
            render: new Rewnder(),
            poruszanie: new Poruszanie(),
            smierc: new Smierc(), 
        }

        this.dane.canvas.skyCtx.imageSmoothingEnabled = false;
        this.dane.canvas.bgCtx.imageSmoothingEnabled = false;
        this.dane.canvas.fgCtx.imageSmoothingEnabled = false;
        
        this.start();
    }

    start() {
        let petla = () => {
            this.dane.kontroler.wejscie.aktualizacja(this.dane);
            this.dane.kontroler.poruszanie.aktualizacja(this.dane);
            this.dane.kontroler.animacje.aktualizacja(this.dane);
            this.dane.kontroler.fizyka.aktualizacja(this.dane);
            this.dane.kontroler.render.aktualizacja(this.dane);

            this.dane.nrKlatki++;
            requestAnimation(petla);
        }
        petla();
    }
}
window.onload = new Silnik();