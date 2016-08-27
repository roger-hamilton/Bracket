import shuffle from 'lodash/shuffle';

const createPairings = arr => {
  const pairings = [];
  const canidates = [...arr];
  while (canidates.length) {
    const current = canidates.pop();
    pairings.push(...canidates.map(c => shuffle([current, c])));
  }
  return shuffle(pairings);
};

export default class Game {
  constructor(choices) {
    this.choices = choices;
    this.rankings = new WeakMap();
    this.choices.forEach(c => {
      this.rankings[c] = { better: [], worse: [] };
    });

    this.rounds = createPairings(this.choices);
  }

  pickWinner(winner, looser) {
    this.rankings[winner].better.push(looser);
    this.rankings[looser].worse.push(winner);
  }
}
