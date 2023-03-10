import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ description, name }: IResquest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification with name ${name} already exists`);
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
