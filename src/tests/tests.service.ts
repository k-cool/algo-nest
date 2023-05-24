import { Injectable } from '@nestjs/common';
import { Test } from './tests.entity';
import { TestRepository } from './tests.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestsService {
    constructor(
        @InjectRepository(TestRepository)
        private testRepository: TestRepository,
    ) { }

    //test id로 가져오기
    getTestById(id: number): Promise<Test> {
        return this.testRepository.getBoardById(id);
    }

    //test 생성
    createTest(createTestDto: CreateTestDto): Promise<Test> {
        return this.testRepository.createTest(createTestDto);
    }
}
