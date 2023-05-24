import { Repository } from "typeorm";
import { Test } from "./tests.entity";
import { NotFoundException } from "@nestjs/common";
import { CreateTestDto } from "./dto/create-test.dto";
import { CustomRepository } from "src/typeorm-ex.decorator";

@CustomRepository(Test)
export class TestRepository extends Repository<Test>{

    
    async getBoardById(id: number): Promise <Test>{
        const found = await this.findOne({where:{id}});
        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }

    async createTest(createTestDto: CreateTestDto): Promise<Test>{
        const {title, description} = createTestDto;

        const test = this.create({
            title,
            description,
        })

        await this.save(test);
        return test;
    }
}