import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
    
    switch(action.type){
        case  FETCH_WEATHER:
        //NO NO!!
        //return state.push(actin.payload.data);
        
        //return state.concat([action.payload.data]);
        
        //es6
        return [action.payload.data, ...state];
    }
    
    
    return state;
}
