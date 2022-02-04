import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'converteToSpace'
})
export class ConvertSpacePipe implements PipeTransform{
    transform(value: string, replacedChar: string) : String{
        return value.replace(replacedChar,' ');
    }
   
}