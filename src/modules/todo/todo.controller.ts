import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ControllerBase } from '../ControllerBase';

@Controller('todo')
export class TodoController extends ControllerBase {
  constructor(private readonly todoService: TodoService) {
    super();
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    try {
      const data = this.todoService.create(createTodoDto);

      return this.sendResponse(data, 'data berhasil didapatkan', 201);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Get()
  findAll() {
    try {
      return this.todoService.findAll();
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.todoService.findOne(+id);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      return this.todoService.update(+id, updateTodoDto);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.todoService.remove(+id);
    } catch (e) {
      return this.sendError('Error!');
    }
  }
}
