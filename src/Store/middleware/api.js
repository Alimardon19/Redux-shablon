import axios from 'axios'

const api = ({dispatch})=>(next)=>(action)=>{

    if(action.type !== 'api/apiCall'){
        next(action);
        return // -> Agar action.type api/apiCall ga teng bo'lmasa kod shu yerda ishlashni to'xtatadi va pastki qatorga o'tmaydi
    }

    next(action) ;// -> bu funksiya dispatch ni davom ettiradi
    
    const {url,method,data,onSuccess,onFail} = action.payload;

    axios({
        baseURL:'https://jsonplaceholder.typicode.com',
        url,
        method,
        data
    }).then((res)=>{
        dispatch({
            type:onSuccess,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({
            type:onFail,
            payload: err.data
        })
    });
};

export default api;

// -> middleware bu yerda backend ga murojat qilindi
// -> chunki middleware state va dispatch ni o'rtasida turadi. State ni o'zgartirmoqchi bo'lsak birinchi bo'lib middleware funksiyasi ishlaydi va keyin dispatch ishlaydi