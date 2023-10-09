import { getcurrencies } from './currencies';
describe('getcurrencies', () => {
  it('should return the suported currencies', () => {
    const result = getcurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
