import { Controller, Get, Param } from '@nestjs/common';
import { TestsService } from './tests.service';
import { Test } from './tests.entity';

@Controller('tests')
export class TestsController {
    constructor(private testsService: TestsService) { }

    @Get('/:id')
    getTestById(@Param('id') id: number): Promise<Test> {
        return this.testsService.getTestById(id);
    }
}
