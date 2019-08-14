var Animacje = {
	aktualizacja: function(dane) {
		Animacje.zadania.niebo(dane);
		Animacje.zadania.mario(dane);
		Animacje.zadania.Potwor(dane);
	},
	
	zadania: {
		niebo: function(dane) {
			dane.obiekty.niebo.x -=1;
			
			if(dane.obiekty.niebo.x < -1440) {
				dane.obiekty.niebo.x = 0;
			}
		},
		
		mario: function(dane) {
			dane.obiekty.mario.obecnyStan.animacja(dane);
		},

		Potwor: function(dane) {
            dane.obiekty.tabelaPotworow.forEach(function(p) {
                p.obecnyStan.animacja(dane);
            })
        }
	}
}