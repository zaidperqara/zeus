import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ControllerBase } from '../ControllerBase';

@Controller('category')
export class CategoryController extends ControllerBase {
  constructor(private readonly categoryService: CategoryService) {
    super();
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      const data = this.categoryService.create(createCategoryDto);

      return this.sendResponse(data, 'data berhasil didapatkan', 201);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Get()
  findAll() {
    try {
      const data = this.categoryService.findAll();

      return this.sendResponse(data, 'data berhasil didapatkan', 201);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      const data = this.categoryService.findOne(+id);

      return this.sendResponse(data, 'data berhasil didapatkan', 201);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      const data = this.categoryService.update(+id, updateCategoryDto);

      return this.sendResponse(data, 'data berhasil didapatkan', 201);
    } catch (e) {
      return this.sendError('Error!');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      const data = this.categoryService.remove(+id);

      return this.sendResponse(data, 'data berhasil didapatkan', 201);
    } catch (e) {
      return this.sendError('Error!');
    }
  }
}
