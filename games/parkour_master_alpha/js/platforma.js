class Platforma {
    constructor(img, x, y, w, h) {
      this.obraz = new Obraz(img, 3408, 192, 48, 8);
      this.stan = {
          poruszanie: {
              ruch: (dane) => {
                  if(this.x <= this.zakres.min + dane.obiekty.mapa.x) {
                      this.x = this.zakres.min + dane.obiekty.mapa.x;
                        this.
                  }
                this.x += this.pedx;
              }
          }
      };
      this.obecnyStan = this.stan.poruszanie;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.pedx = 2;
      this.zakres = z;
      this.typ = "platforma";
    }
  }