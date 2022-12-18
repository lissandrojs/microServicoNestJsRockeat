import { request } from "http";
import { Content } from "../entities/content.service";
import { Notification } from "../entities/notification.service";

interface ISendNotificationRequest{
    recipienteId : string;
    content: string;
    category:string
}

interface ISendNotificationResponse{
    notification:Notification
}

export class SendNotification{

    async execute(request:ISendNotificationRequest) : Promise<ISendNotificationResponse>{
        const {recipienteId,content,category} = request;
        
        const notification = new Notification({
            recipienteId,
            content:new Content(content),
            category
        })

        return{
            notification,
        };
    }
}