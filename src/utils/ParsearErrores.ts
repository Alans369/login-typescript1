import { ValidationError } from "class-validator";

type ValidationConstraints = {
  [key: string]: string;
} | undefined;


export function parseErrors(errors: ValidationError[]):string[] {
     var listaErrores:string[]=[];
     var messages:ValidationConstraints[]=[];

    for (let i:number = 0; i < errors.length; i++) {
            messages.push(errors[i]?.constraints)
          }
          for (let i:number = 0; i < messages.length; i++) {
            
            for(const [key, value] of Object.entries(messages[i] as {})){
              listaErrores.push(value as string)
            }
          }
    return listaErrores;
}