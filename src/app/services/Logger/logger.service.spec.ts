import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService],
    });
    service = TestBed.inject(LoggerService)
  });
  let service: LoggerService;

  it('should not have any message at starting', () => {
    // arrange
    // service = new LoggerService();

    //act
    let count = service.message.length;
    // assert
    expect(count).toBe(0);
  });

  it('should add the messaged when log is called', () => {
    // arrange
    // service = new LoggerService();
    // act
    service.log('message');
    //assert
    expect(service.message.length).toBe(1);
  });

  it('should clear all the messages when clear is called', () => {
    // arrange
    // service = new LoggerService();
    service.log('message');
    //act
    service.clear();
    //assert
    expect(service.message.length).toBe(0);
  });
});
