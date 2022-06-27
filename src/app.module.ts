import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TicketModule } from './ticket/ticket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './ticket/entity/ticket.entity';
import { Event } from './ticket/entity/event.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TicketModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('POSTGRES_HOST'),
          port: +config.get('POSTGRES_PORT'),
          username: config.get('POSTGRES_USER'),
          password: config.get('POSTGRES_PASSWORD'),
          database: config.get('POSTGRES_DATABASE'),
          entities: [Ticket, Event],
          synchronize: config.get('SYNCHRONIZE') == 'true',
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
