class Poruszanie {
  aktualizacja(dane) {
		this.mario(dane);
    this.potwor(dane);
    this.bloczekMonet(dane);
    this.platforma(dane);
    this.bloczekCegiel(dane);
    this.fragmentCegiel(dane);
    this.bloczekGrzybow(dane);
    this.grzyb(dane);


	}

  mario(dane) {
    dane.obiekty.mario.obecnyStan.ruch(dane);
  }

  potwor(dane) {
    dane.obiekty.tabelaPotworow.forEach(function(p) {
      p.obecnyStan.ruch(dane);
    });
  }
  bloczekMonet(dane) {
    dane.obiekty.tabelaBloczkowMonet.forEach(function(bm) {
      bm.obecnyStan.ruch(dane);
    });
  }

  platforma(dane) {
    dane.obiekty.tabelaPlatform.forEach(function(p) {
      p.obecnyStan.ruch(dane);
    });
  }

  bloczekCegiel(dane) {
    dane.obiekty.tabelaBloczkowCegiel.forEach(function(bc) {
      bc.obecnyStan.ruch(dane);
    });
  }

  fragmentCegiel(dane) {
    dane.obiekty.tabelaFragmentowCegiel.forEach(function(fc) {
      fc.obecnyStan.ruch(dane);
    });
  }

  bloczekGrzybow(dane) {
    dane.obiekty.tabelaBloczkowGrzybow.forEach(function(bg) {
      bg.obecnyStan.ruch(dane);
    });
  }

  grzyb(dane) {
    dane.obiekty.tabelaGrzybow.forEach(function(g) {
      g.obecnyStan.ruch(dane);
    });
  }
}