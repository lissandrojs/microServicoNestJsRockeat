
import { Content } from "../entities/content.service";
import { Notification } from "../entities/notification.service";
import { NotificationRepositories } from "../repositories/notifications-repositories";

interface ISendNotificationRequest{
    recipienteId : string;
    content: string;
    category:string
}

interface ISendNotificationResponse{
    notification:Notification
}

export class SendNotification{

    constructor(private notificationsRepository : NotificationRepositories){

    }

    async execute(request:ISendNotificationRequest) : Promise<ISendNotificationResponse>{
        const {recipienteId,content,category} = request;
        
        const notification = new Notification({
            recipienteId,
            content:new Content(content),
            category
        })

        await this.notificationsRepository.create(notification)

        return{
            notification,
        };
    }
}