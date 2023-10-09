import { compute } from './compute';

describe('compute test suite',()=> {
it('should return 0  if input is negative', () => {
const result = compute(-1);
expect(result).toBe(0);
})

it('should increment inout if it is positive', () => {
const result = compute(1);
expect(result).toBe(2);
})


})
