const Ship = (length) => {
  let health = length;
  let sunk = false;

  const hit = function () {
    this.health -= 1;
    if (this.health <= 0) this.sunk = true;
  };

  return { length, health, sunk, hit };
};

export default Ship;
