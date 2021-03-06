class Animacje {
  aktualizacja(dane) {
		this.niebo(dane);
		this.mario(dane);
		this.potwor(dane);
    this.moneta(dane);
    this.bloczekMonet(dane);
    this.bloczekGrzybow(dane);

	}

  niebo(dane) {
    dane.obiekty.niebo.x -=1;

    if(dane.obiekty.niebo.x < -1440) {
      dane.obiekty.niebo.x = 0;
    }
  }

  mario(dane) {
    dane.obiekty.mario.obecnyStan.animacja(dane);
  }

  potwor(dane) {
    dane.obiekty.tabelaPotworow.forEach(function(p) {
      p.obecnyStan.animacja(dane);
    });
  }

  moneta(dane) {
    dane.obiekty.tabelaMonet.forEach(function(m) {
      m.obecnyStan.animacja(dane);
    });
  }

  bloczekMonet(dane) {
    dane.obiekty.tabelaBloczkowMonet.forEach(function(bm) {
      bm.obecnyStan.animacja(dane);
      bm.moneta.obecnyStan.animacja(dane);
    });
  }

  bloczekGrzybow(dane) {
    dane.obiekty.tabelaBloczkowGrzybow.forEach(function(bg) {
      bg.obecnyStan.animacja(dane);
    });
  }
}