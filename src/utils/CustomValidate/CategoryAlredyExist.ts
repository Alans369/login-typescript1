import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

import { CategoryRepository } from '../../Repository/Repository';

@ValidatorConstraint({ async: true })
export class IsCategoryAlreadyExistConstraint implements ValidatorConstraintInterface {
  validate(Name: any, args: ValidationArguments) {
    return CategoryRepository.findByName(Name).then(user => {
      if (user) return false;
      return true;
    });
  }
}

export function IsCategoryAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsCategoryAlreadyExist',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions || {},
            validator: IsCategoryAlreadyExistConstraint
        });
    };
}
