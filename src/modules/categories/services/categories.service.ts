import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  findAllByUserId(userId: string) {
    return this.categoriesRepo
      .findMany({
        where: { userId },
      })
      .then((categories) =>
        categories.map((category) => ({
          id: category.id,
          name: category.name,
          icon: category.icon,
          type: category.type,
        })),
      )
      .catch((err) => {
        throw err;
      });
  }
}
