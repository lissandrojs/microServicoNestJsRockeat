import { Notification } from "../entities/notification.service";

export abstract class NotificationRepositories{
    abstract create(notification:Notification): Promise<void>;
}