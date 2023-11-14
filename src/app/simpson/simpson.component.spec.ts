import { simpson } from './simpson.component';

describe('media test suite', () => {
  it('Should return p = 16 if f(x) = 2x, x0=0, x1=4, num_seg=4, dof=0', () => {
    const resultado = simpson('2x', 0, 4, 4, 0);
    expect(resultado).toBe(16);
  });

  it('Should return p=0.33333 if f(x) = x*x, x0=0, x1=1, num_seg=4, dof =0', () => {
    const resultado = simpson('x*x', 0, 1, 4, 0);
    expect(resultado).toBe(0.33333);
  });

  it('Should return p=1 if f(x) = 1/x, x0=1, x1=4, num_seg=6, dof=0', () => {
    const resultado = simpson('1/x', 1, 1, 6, 0);
    expect(resultado).toBe(1);
  });

  it('Should return p = 0.35006 if X = 1.1, num_seg = 10 and Dof = 9', () => {
    const result = simpson('', 0, 1.1, 10, 9);
    expect(result).toBe(0.35006);
  });
  it('Should return p = 0.36757 if X = 1.1812, num_seg = 10 and Dof = 10', () => {
    const result = simpson('', 0, 1.1812, 10, 10);
    expect(result).toBe(0.36757);
  });
  it('Should return p = 0.49500 if X = 2.750, num_seg = 10 and Dof = 30', () => {
    const result = simpson('', 0, 2.75, 10, 30);
    expect(result).toBe(0.495);
  });

  it('Should return p=1 if f(x) = 1/x, x0=1, x1=4, num_seg=6, dof=0', () => {
    const resultado = simpson('5/x', 1, 1, 6, 0);
    expect(resultado).toBe(1);
  });

});
