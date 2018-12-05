import { Test, TestingModule } from '@nestjs/testing';
import { TypesController } from './types.controller';

describe('Types Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TypesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TypesController = module.get<TypesController>(TypesController);
    expect(controller).toBeDefined();
  });
});
