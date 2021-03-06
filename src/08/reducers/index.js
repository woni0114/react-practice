//09-3. 가상 코인 거래소에 리덕스 적용하기

/*
    서버에서 받은 데이터를 효율적으로 관리하기 위해 리덕스를 도입한다. 여기서는 axios를 통해 전달받은 데이터를 리덕스로 관리하기 위한 코드를 작성한다.
*/

//09-3-1. 액션, 리듀서, 스토어 만들기

///09-3-1-3. 리듀서 index.js 파일에 리듀서 추가하기

//import transactions from './transactionsReducer';
import notification from './notificationReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../../11/api-redux-pack/createReducers';//11-4-2-2. 리듀서 설정 파일 수정하기
import router from './routerReducer';

const apiReducers = createReducers('transactions', 'users');//11-5-3. users 리듀서 추가하기

export default {
    ...apiReducers,
    notification,//10-4-1-2. 스토어에 알람 리듀서 추가한다.
    searchFilter,
    router,
};