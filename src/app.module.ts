import { Module } from '@nestjs/common';
import { AppController } from './utils/app.controller';
import { PrismaService } from './utils/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
