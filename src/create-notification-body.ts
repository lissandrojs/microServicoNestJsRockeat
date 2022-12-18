import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody{
    @IsNotEmpty()
    @IsUUID()
    recipienteId:string;

    @IsNotEmpty()
    @Length(5,256)
    content: string;

    @IsNotEmpty()
    category:string;
}