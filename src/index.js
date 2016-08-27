import { render } from 'react-dom';

import App from './App';
import Game from './game';

const g = new Game([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.dir(g.rounds);
console.dir(g.rankings);

g.rounds.forEach(pair => g.pickWinner(...pair));

console.dir(g.rankings);

render(<App />, document.getElementById('root'));
