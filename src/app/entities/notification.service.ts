import { Content } from "./content.service";
import { Replace } from "src/helpers/Replace";


export interface INotificationData{
    recipienteId:string;
    content: Content;
    category:string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private data: INotificationData;

    constructor(data:Replace<INotificationData,{createdAt?:Date}>){
        this.data = {
            ...data,
            createdAt:data.createdAt ?? new Date()
        }
        
    }

    public get recipienteId():string{
        return this.data.recipienteId;
    }

    public set recipienteId(recipienteId:string){
        this.data.recipienteId = recipienteId;
    }

    public get content():Content{
        return this.data.content;
    }

    public set content(content:Content){
        this.data.content = content;
    }

    public get category():string{
        return this.data.category;
    }

    public set category(category:string){
        this.data.category = category;
    }

    public get readAt():Date | null | undefined{
        return this.data?.readAt;
    }

    public set readAt(readAt:Date | null | undefined){
        this.data.readAt = readAt;
    }

    public get createdAt():Date{
        return this.data.createdAt;
    }
    
}