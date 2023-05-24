import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
