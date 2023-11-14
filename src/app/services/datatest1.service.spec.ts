import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestService } from './datatest1.service';

describe('TestService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });

    service = TestBed.inject(TestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from test1', () => {
    const mockData = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    service.obtenerDatos1().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${service.apiURL}test1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get data from test2', () => {
    const mockData = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    service.obtenerDatos2().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${service.apiURL}test2`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get data from test3', () => {
    const mockData = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    service.obtenerDatos3().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${service.apiURL}test3`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get data from test4', () => {
    const mockData = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    service.obtenerDatos4().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${service.apiURL}test4`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

});
