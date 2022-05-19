import { ItemML } from '../models/item';

interface Action {
    payload: {productos: ItemML[]};
    type: string;
}

export default function busquedaReducer(state: ItemML[], action: any) {
    switch (action.type) {
        case 'SET_PRODUCTOS':
            return [...action.payload.productos];
        default:
            return state;
    }
}