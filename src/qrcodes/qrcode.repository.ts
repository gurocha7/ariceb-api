import {EntityRepository, Repository} from 'typeorm';
import { Qrcode } from './qrcode.entity';

@EntityRepository(Qrcode)
export class QrcodeRepository extends Repository<Qrcode> {}