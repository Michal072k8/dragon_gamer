class Poruszanie {
    aktualizacja(dane) {
		this.Mario(dane);
		this.Potwor(dane);
	}
	mario(dane) {
    dane.obiekty.mario.obecnyStan.ruch(dane);
    }
    
    potwor(dane) {
        dane.obiekty.tabelaPotworow.forEach(function(p) {
            p.obecnyStan.ruch(dane);
        });
    }
}