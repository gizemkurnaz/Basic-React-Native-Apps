import { combineReducers } from "redux";
import kimlikdogrulamareducers from "./kimlikdogrulamareducers";
import studentListReducer from "./studentCreateReducer";
import studentDataReducer from "./studentDataReducer";
import studentUpdateReducer from "./studentUpdateReducer";

export default combineReducers({
    kimlikdogrulamaResponse: kimlikdogrulamareducers,
    studentListResponse: studentListReducer,
    studentDataResponse: studentDataReducer,
    studentUpdateResponse: studentUpdateReducer
        
});