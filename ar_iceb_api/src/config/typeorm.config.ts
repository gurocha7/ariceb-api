import { registerAs } from '@nestjs/config';

export default registerAs('typeOrmConfig', () => ({
  type: process.env.TYPE_ORM_TYPE,
  host: process.env.TYPE_ORM_HOST,
  port: process.env.TYPE_ORM_PORT,
  username: process.env.TYPE_ORM_USERNAME,
  password: process.env.TYPE_ORM_PASSWORD,
  database: process.env.TYPE_ORM_DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production',
}));
