class Wejscie {
  constructor() {
    this.nacisniety = {};
    document.onkeydown = (event) => {
			this.nacisniety[event.keyCode] = true;
		}

		document.onkeyup = (event) => {
			this.nacisniety[event.keyCode] = false;
		}
  }

  aktualizacja(dane) {
    let mario = dane.obiekty.mario;

		if(this.nacisnieto(39)) {
			mario.kierunek = "prawo";

			
		}
		if(this.nacisnieto(32)) {
			mario.obecnyStan = mario.stan.skakanie;
		}
  }

  nacisnieto(kod) {
    return this.nacisniety[kod];
  }
}
