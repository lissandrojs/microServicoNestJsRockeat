import { Module } from '@nestjs/common';
import { NotificationRepositories } from '@app/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';


@Module({
  providers:[
    PrismaService,
    {
      provide:NotificationRepositories,
      useClass:PrismaNotificationsRepository
    }
  ],
  exports:[
    NotificationRepositories
  ]

})
export class DatabaseModule {}
