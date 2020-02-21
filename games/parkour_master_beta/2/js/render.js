class REnder {
    aktualizacja(dane) {
        Render.zadania.Rysuj(dane.obiekty.niebo, dane.canvas.skyCtx);
		
		dane.canvas.bgCtx.clearRect(0,0, dane.canvas.bgCtx.canvas.width, dane.canvas.bgCtx.canvas.height);
	this.Rysuj(dane.obiekty.mapa, dane.canvas.bgCtx);
		
		dane.canvas.fgCtx.clearRect(0,0, dane.canvas.fgCtx.canvas.width, dane.canvas.fgCtx.canvas.height);
	this.Rysuj(dane.obiekty.mario, dane.canvas.fgCtx);
		
	this.Pisz("Lives: " + dane.obiekty.mario.zycia, dane.canvas.fgCtx, 16, 32, "16px", "PixelEmulator");
	this.Pisz("Score: " + dane.obiekty.mario.monety, dane.canvas.fgCtx, 772, 32, "16px", "PixelEmulator");
		
		if(dane.obiekty.mario.zycia<1) Render.zadania.Pisz("Game Over", dane.canvas.fgCtx, 200, 300, "72px", "PixelEmulator");
		
		dane.obiekty.tabelaPotworow.forEach((p) => {
		this.Rysuj(p, dane.canvas.fgCtx);
		});
    
    dane.obiekty.tabelaMonet.forEach((m) => {
		this.Rysuj(m, dane.canvas.fgCtx);
		});
    }

    rysuj(co, gdzie) {
        gdzie.drawImage(co.obraz.img, 
                                    co.obraz.x, co.obraz.y, 
                                    co.obraz.w, co.obraz.h,
                                    co.x, co.y, co.w, co.h);
    }
    
    pisz(tekst, gdzie, x, y, rozmiar, czcionka) {
        gdzie.font = rozmiar + " " + czcionka;
        gdzie.fillStyle = '#fff';
        gdzie.fillText(tekst,x,y);
    }
}