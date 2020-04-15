class Grzyb {
    constructor(img, x, y, w, h, r) {
        if(r == "zycie") {
      this.obraz = new Obraz(img, 960, 256, 16, 16);
        }
      this.stan = {
          poruszanie: {
              ruch: (dane) => {
                this.x += this.pedX;
              }
          },
          wyjscie: {
              licznik: 0,
            ruch: (dane) => {
                this.obecnyStan.licznik++;
                if(this.obecnyStan.licznik<5) {
                    this.pedX -= 2;
                    this.y += this.pedY;
                } else  if(this.obecnyStan.licznik<8) {
                    this.y += this.pedY;
                } else {
                    this .obecnyStan = this.stan.poruszanie;
                }
            }
        }
      };
      this.obecnyStan = this.stan.wyjscie;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.oedY = 0;
      this.rodzaj = r;
      this.typ = "grzyb";
    }
  }