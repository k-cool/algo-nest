import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TestsService } from './tests.service';
import { Test } from './tests.entity';
import { CreateTestDto } from './dto/create-test.dto';

@Controller('tests')
export class TestsController {
    constructor(private testsService: TestsService) { }

    @Get('/:id')
    getTestById(@Param('id') id: number): Promise<Test> {
        return this.testsService.getTestById(id);
    }

    @Post('/')
    createTest(@Body() createTestDto: CreateTestDto): Promise<Test> {
        return this.testsService.createTest(createTestDto);
    }
}
