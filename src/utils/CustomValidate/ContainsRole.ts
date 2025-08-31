import { registerDecorator, ValidationOptions, ValidationArguments, ValidationDecoratorOptions } from 'class-validator';

export function ContainsRole(...roles: string[]) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'containsRole',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [roles],
      options: {}, 
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [allowedRoles] = args.constraints;
          return typeof value === 'string' && allowedRoles.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          const [allowedRoles] = args.constraints;
          return `$property must be one of the following values: ${allowedRoles.join(', ')}`;
        }
      },
    } as ValidationDecoratorOptions);
  };
}