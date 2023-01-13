import { Specification } from "../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const speification = new Specification();

    Object.assign(speification, { description, name, create_at: new Date() });
    this.specifications.push(speification);
  }
}

export { SpecificationRepository };
