import { ItemML } from './item-ml';

export interface DatosCache {
    key: string,
    val: ItemML[],
    ttl: number
}
