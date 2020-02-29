class Fizyka {
    aktualizacja(dane) {
      this.grawitacja(dane.obiekty.mario);
          //this.wykrywanieKolizji(dane);
          this.smierc(dane);
  
          dane.obiekty.tabelaPotworow.forEach((p) => {
              this.grawitacja(p);
              //this.wykrywanieKolizji2(dane, p);
          });
    }
  
    grawitacja(obiekt) {
      if(!obiekt.momentSmierci) obiekt.obecnyStan = obiekt.stan.skakanie;
      obiekt.pedY+=1;
      obiekt.y+=obiekt.pedY;
    }
  
    smierc(dane) {
      if(dane.obiekty.mario.y > 624) {
        dane.obiekty.mario.momentSmierci = true;
        dane.kontroler.smierc.strataZycia(dane);
      }
    }

    wykrywanieKolizji(dane) {
      let wykrywanieKolizji = (obiekt1, obiekt2) => {
				if(obiekt1.x < obiekt2.x + obiekt2.w &&
				    obiekt1.x + obiekt1.w > obiekt2.x &&
				    obiekt1.y < obiekt2.y + obiekt2.h &&
				    obiekt1.y + obiekt1.h > obiekt2.y) {
            this.Kolizja(obiekt1, obiekt2, dane);
            }
        };
        let mario = dane.obiekty.mario;
        if(!mario.momentSmierci) {
          dane.obiekty.tabelaScian.forEach((sciana) => {
            wykrywanieKolizji(mario, sciana);
          });
          
          dane.obiekty.tabelaMonet.forEach((moneta) => {
            wykrywanieKolizji(mario, moneta);
          }); 
        }
          
          dane.obiekty.tabelaPotworow.forEach((potwor) => {
           if(mario/momentSmierci) wykrywanieKolizji(mario, potwor);

            dane.obiekty.tabelaScian.forEach((sciana) => {
              wykrywanieKolizji(potwor, sciana);
            });
          });
        }
      
      Kolizja(obiekt1, obiekt2, dane) {
          let stronaKolizji = this.stronaKolizji(obiekt1, obiekt2);
          if(obiekt1.typ === "mario") {
            let mario = obiekt1;
            if(obiekt2.typ === "sciana") {
              if(stronaKolizji[0]) {
                mario.obecnyStan = mario.stan.porszanie;
                mario.y = obiekt2.y - mario.h;
                mario.pedY = 0;
              }
              if(stronaKolizji[2]) {
                mario.y = obiekt2.y + obiekt2.h - 1;
                if(mario.pedY < 0) mario.pedY = 1;
              }
              if(stronaKolizji[3]) {
                mario.x = obiekt2.x - mario.w;
                mario.pedX = 0;
              }
              if(stronaKolizji[1]) {
                mario.x = obiekt2.x + obiekt2.w;
                mario.pedX = 0;
              }
            }
          }
        }


    stronaKolizji(obiekt1, obiekt2) {
      let maksymalnaOdlegloscX = (obiekt1.w + obiekt2.w)/2,
        maksymalnaOdlegloscY = (obiekt1.h + obiekt2.h)/2;

        let katLewyGorny = Math.atan2(maksymalnaOdlegloscY, maksymalnaOdlegloscX) * 180 / Math.PI,
          KatPrawyGorny = 180 - katLewyGorny;

          let odlegloscX = (obiekt2.x + obiekt2.w/2) - (obiekt1.x + obiekt1.w/2 - obiekt1.pedx),
            odlegloscY = (obiekt2.y + obiekt2.h/2) - (obiekt1.y + obiekt1.h/2 - obiekt1.pedy);

          let KatObiektow = Math.atan2(odlegloscY, odlegloscX) * 180 / Math.PI;

          let stronaKolizji = [false, false, false, false];
          if(KatObiektow > katLewyGorny && KatObiektow < KatPrawyGorny) {
            stronaKolizji[0] = true;
          }
          if(KatObiektow > KatPrawyGorny || KatObiektow < -KatPrawyGorny) {
            stronaKolizji[1] = true;
          }
          if(KatObiektow > -KatPrawyGorny && KatObiektow < -katLewyGorny) {
            stronaKolizji[2] = true;
          }
          if(KatObiektow > -katLewyGorny && KatObiektow < katLewyGorny) {
            stronaKolizji[3] = true;
      }

      return stronaKolizji;
    }
  }
  