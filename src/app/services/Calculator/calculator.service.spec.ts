import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('CalculatorService', () => {
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;

  let calculator: CalculatorService;
  // let loggerService: LoggerService;
  // let mockloggerService: any;

  beforeEach(() => {
    // console.log('call beforeeach')
    const mockloggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: mockloggerService,
        },
      ],
    });
    calculator = TestBed.inject(CalculatorService);
    loggerServiceSpy = TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
    // calculator = new CalculatorService(mockloggerService);
  });

  it('shold add two numbers', () => {
    // console.log('call add')
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract to numbers', () => {
    // console.log('call sub')
    let result = calculator.subtract(4, 2);
    expect(result).toBe(2);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});
