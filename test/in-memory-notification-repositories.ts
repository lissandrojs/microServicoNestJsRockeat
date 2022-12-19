import { Notification } from "@app/entities/notification.service";
import { NotificationRepositories } from "@app/repositories/notifications-repositories";


export class InMemoryNotificationsRepository implements NotificationRepositories {
    public  notifications : Notification[] = [];

    async create(notification:Notification){
        this.notifications.push(notification)
    }
}
