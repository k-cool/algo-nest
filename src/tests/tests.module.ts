import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { TypeOrmExModule } from 'src/type-orm-ex.module';
import { TestRepository } from './tests.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([TestRepository]),
  ],
  controllers: [TestsController],
  providers: [TestsService]
})
export class TestsModule {}
