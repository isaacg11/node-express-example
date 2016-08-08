function randomNumber (upper:number, lower:number) {
  return Math.floor(Math.random() * (upper - lower * 1));
}

export = randomNumber;
