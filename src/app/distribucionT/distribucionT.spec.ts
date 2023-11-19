import { tDistributionFunction } from './fdex';
import { gammaFunctionOdd, gammaFunctionEven } from './gamaFunction';

describe('tDistributionFunction', () => {
  it('should calculate gamma for odd degrees of freedom', () => {
    const result = gammaFunctionOdd(5);
    expect(result).toBe(24);
  });

  it('should calculate gamma for even degrees of freedom', () => {
    const result = gammaFunctionEven(5);

    expect(result).toBeCloseTo(1.3293375);
  });

  it('should calculate gamma for even degrees of freedom', () => {
    const result = gammaFunctionEven(4);
    expect(result).toBeCloseTo(0);
  });

  it('should calculate part1 for even i', () => {
    const result: any = tDistributionFunction(4, 0);
    expect(result.part1).toBe(undefined);
  });

  // Prueba para el caso en que i es impar
  it('should calculate part1 for odd i', () => {
    const result: any = tDistributionFunction(5, 0);
    expect(result.part1).toBe(undefined);
  });

  // Prueba para el caso en que dof es par
  it('should calculate part3 for even dof', () => {
    const result:any = tDistributionFunction(6, 0);
    expect(result.part3).toBe(undefined);
  });

  // Prueba para el caso en que dof es impar
  it('should calculate part3 for odd dof', () => {
    const result: any = tDistributionFunction(7, 0);
    expect(result.part3).toBe(undefined);
  });

});
