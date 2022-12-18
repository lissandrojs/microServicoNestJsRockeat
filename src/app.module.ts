import { Module } from '@nestjs/common';
import { DatabaseModule } from './utils/database/database.module';
import { HttpModule } from './utils/http/http.module';
@Module({
  imports: [HttpModule,DatabaseModule],

})
export class AppModule {}
