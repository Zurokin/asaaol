class Character {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this.stoned = false;
  }

  set stonedStatus(status) {
    this.stoned = status;
  }

  get stonedStatus() {
    return this.stoned;
  }

  getAttack(distance) {
    let attack = this.baseAttack;
    if (distance === 1) {
      attack = this.baseAttack;
    } else if (distance === 2) {
      attack = this.baseAttack * 0.9;
    } else if (distance === 3) {
      attack = this.baseAttack * 0.8;
    } else if (distance === 4) {
      attack = this.baseAttack * 0.7;
    } else {
      attack = this.baseAttack * 0.6;
    }

    if (this.stoned) {
      attack -= Math.log2(distance) * 5;
    }

    return attack;
  }
}

class Magician extends Character {
  constructor(baseAttack) {
    super(baseAttack);
  }
}

class Daemon extends Character {
  constructor(baseAttack) {
    super(baseAttack);
  }
}

module.exports = { Magician, Daemon };
