class Character {
  constructor(baseAttack) {
    this._baseAttack = baseAttack;
    this._stoned = false;
    this._distance = 1;
  }

  set stonedStatus(status) {
    this._stoned = status;
  }

  get stonedStatus() {
    return this._stoned;
  }

  set attack(value) {
    this._baseAttack = value;
  }

  get attack() {
    let baseAttack = this._baseAttack * (1 - (this._distance - 1) * 0.1);

    if (this._stoned) {
      baseAttack -= Math.round(Math.log2(this._distance) * 5);
    }

    baseAttack = Math.max(baseAttack, 0); // Не даем атаке уйти в минус

    baseAttack = Number(baseAttack.toFixed(2)); // Округление до двух знаков

    console.log(`Distance: ${this._distance}, Attack: ${baseAttack}`);
    return baseAttack;
  }

  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
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
