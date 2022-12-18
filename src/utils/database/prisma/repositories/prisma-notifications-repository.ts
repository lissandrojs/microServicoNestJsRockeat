import { Notification } from "../../../../app/entities/notification.service";
import { NotificationRepositories } from "../../../../app/repositories/notifications-repositories";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationsRepository implements NotificationRepositories{
    
    constructor(private prismaService:PrismaService){

    }
    
    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data:{
                id:notification.id,
                category:notification.category,
                content:notification.content.value,
                recipienteId:notification.recipienteId,
                readAt:notification.readAt,
                createdAt:notification.createdAt,
            }
        })
    }
    
}