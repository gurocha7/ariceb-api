import { INestApplication, HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '../../src/clients/clients.module';
import typeormConfig from '../../src/config/typeorm.config';

describe('Clients', () => {
  let app: INestApplication;

  let clientId;
  let companyName;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [typeormConfig],
        }),
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (config: ConfigService) => config.get('typeOrmConfig'),
        }),
        ClientsModule,
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/POST v1/clients`, async () => {
    companyName = `Empresa ${Math.floor(Math.random() * 100000000)}`;
    const { body } = await request(app.getHttpServer())
      .post('/v1/clients')
      .send({ name: companyName })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.CREATED);

    clientId = body.id;

    expect(body.id).toBeTruthy();
    expect(body.createdAt).toBeTruthy();
    expect(body.updatedAt).toBeTruthy();

    expect(body).toEqual({
      id: body.id,
      name: companyName,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    });
  });

  it(`/GET v1/clients/:id`, async () => {
    const { body } = await request(app.getHttpServer())
      .get(`/v1/clients/${clientId}`)
      .expect(HttpStatus.OK);

    expect(body.id).toBeTruthy();
    expect(body.createdAt).toBeTruthy();
    expect(body.updatedAt).toBeTruthy();

    expect(body).toEqual({
      id: body.id,
      name: companyName,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    });
  });

  it(`/PUT v1/clients/:id`, async () => {
    companyName = `Empresa ${Math.floor(Math.random() * 100000000)}`;
    const { body } = await request(app.getHttpServer())
      .put(`/v1/clients/${clientId}`)
      .send({ name: companyName })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(HttpStatus.OK);

    expect(body.id).toBeTruthy();
    expect(body.createdAt).toBeTruthy();
    expect(body.updatedAt).toBeTruthy();

    expect(body).toEqual({
      id: body.id,
      name: companyName,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    });
  });

  it(`/GET v1/clients`, async () => {
    const { body } = await request(app.getHttpServer())
      .get('/v1/clients')
      .expect(HttpStatus.OK);

    const clients = body.data;
    const existsClient = !!clients.filter(
      (client) => client.name === companyName,
    );

    expect(existsClient).toBe(true);
  });

  it(`/DELETE v1/clients`, async () => {
    await request(app.getHttpServer())
      .delete(`/v1/clients/${clientId}`)
      .expect(HttpStatus.OK);
  });

  afterAll(async () => {
    await app.close();
  });
});
