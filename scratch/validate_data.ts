
import { nonsenseTest } from '../src/data/tests/nonsense';

console.log('Nonsense Test ID:', nonsenseTest.id);
console.log('Nonsense Test Questions Length:', nonsenseTest.questions.length);
console.log('Nonsense Test Dimensions:', nonsenseTest.dimensions.length);
console.log('Nonsense Test Results:', nonsenseTest.results.length);

nonsenseTest.questions.forEach((q, i) => {
  if (!q.text) console.error(`Question ${i} has no text`);
  if (!q.options || q.options.length === 0) console.error(`Question ${i} has no options`);
  q.options.forEach((o, j) => {
    if (!o.label) console.error(`Question ${i} Option ${j} has no label`);
    if (!o.scores) console.error(`Question ${i} Option ${j} has no scores`);
  });
});
