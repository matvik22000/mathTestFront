import { jsonProperty, Serializable } from "ts-serializable";

export class ProblemPrototype extends Serializable{
    @jsonProperty(String)
    public id: string | undefined;
    @jsonProperty(String)
    public name: string | undefined;
    @jsonProperty(String)
    public example: string | undefined;

}