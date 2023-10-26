import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { JwtModule } from '@nestjs/jwt';
import * as redisStore from 'cache-manager-redis-store';
import { RedisService } from './redis.service';
import type { RedisClientOptions } from 'redis';
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
  ],
  providers: [RedisService],
  exports: [JwtModule, CacheModule, RedisService],
})
export class SharedModule {}
