class FragmentCegiel {
    constructor(img, x, y, w, h, n) {
        if(n == 0) {
      this.obraz = new Obraz(img, 960, 320, 16, 16);
      this.pedX = -2;
      this.pedY = -5;
        } else   if(n == 1) {
            this.obraz = new Obraz(img, 976, 320, 16, 16);
            this.pedX = 2;
            this.pedY = -5;
              } else  if(n == 2) {
                this.obraz = new Obraz(img, 992, 320, 16, 16);
                this.pedX = -3;
                this.pedY = 0;
                  } else {
                    this.obraz = new Obraz(img, 1008, 320, 16, 16);
                    this.pedX = 3;
                    this.pedY = 0;
                      }
      this.stan = {
        poruszanie: {
            ruch: (dane) => {
                this.x += this.pedX;
                this.y += this.pedY;
                if(this.y > dane.obiekty.mapa.h) {
                    let nrFragmentu = dane.obiekty.tabelaFragmentowCegiel.indexOf(this);
                    dane.obiekty.tabelaFragmentowCegiel.splice(nrFragmentu, 1);
                }
            }
        }
      };
      this.obecnyStan = this.stan.poruszanie;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.typ = "fragmentCegiel";
    }
  }