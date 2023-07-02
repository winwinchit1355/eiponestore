
import {categoryActionType} from '../../consts/index'
export function fetchCategories(){
    return async (dispatch) => {
        dispatch({
            type:categoryActionType.FETCH_CATEGORIES,
            payload:null,
        });
    }
}