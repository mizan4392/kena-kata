export interface FormInputProps{
    handleChange:ChangeEventHandler<HTMLInputElement>;
    label?:string;
    name?:string;
    type?:string;
    required?:boolean;
    value?: any

}