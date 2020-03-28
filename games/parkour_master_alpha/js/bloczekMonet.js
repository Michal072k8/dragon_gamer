class BloczkeMonet {
    constructor(img, x, y, w, h) {
            this.obraz = new Obraz(img, 3408, 128, 16, 16);
            this.animacja = {
          pełny: new Obraz(img, 3408, 128, 16, 16),
          pusty: new Obraz(img, 3424, 128, 16, 16)
            };
            this.stan = {
              drganie: {
                licznik: 0,
                ruch: (dane) => {
                  this.obecnyStan.licznik++;
                  if(this.obecnyStan.licznik < 5) {
                    this.y -= 2;
                    if(this.monety > 0) this.monety.y -= 8;
                  } else if (this.obecnyStan.licznik < 10) {
                    this.y += 2;
                    if(this.monety > 0) this.monety.y -= 5;
                  } else if()
                },
                animacja: (dane) => {

                }
              }
            };
            this.obecnyStan = this.stan.spoczynek;
            this.x = x;
                  this.y = y;
                  this.w = w;
                  this.h = h;
                  this.monety = 10;
                  this.moneta = new Moneta(img,x,y,w,h);
                  this.typ = "bloczekMonet";
    }
}