// class example 

// (incorrect calculation)

class Gulls {
  seagulls = 0;
  seas = 5;

  constructor(n) {
    this.seagulls = n;
  }

  conjoin(other) {
    this.seagulls += other.seagulls;
    return this;
  }

  breed(other) {
    this.seagulls *= other.seagulls;
    return this;
  }
}

let a = new Gulls(2);
let b = new Gulls(5);
a.conjoin(b);