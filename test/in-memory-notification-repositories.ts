import { Notification } from "../src/app/entities/notification.service";
import { NotificationRepositories } from "../src/app/repositories/notifications-repositories";


export class InMemoryNotificationsRepository implements NotificationRepositories {
    public  notifications : Notification[] = [];

    async create(notification:Notification){
        this.notifications.push(notification)
    }
}
