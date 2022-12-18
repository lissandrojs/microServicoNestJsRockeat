export interface INotificationData{
    recipienteId:string;
    content: string;
    category:string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private data: INotificationData;

    constructor(data:INotificationData){
        this.data = data;
    }

    public get recipienteId():string{
        return this.data.recipienteId;
    }

    public set recipienteId(recipienteId:string){
        this.data.recipienteId = recipienteId;
    }

    public get content():string{
        return this.data.content;
    }

    public set content(content:string){
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