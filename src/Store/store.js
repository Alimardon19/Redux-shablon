import {configureStore} from "@reduxjs/toolkit"; // -> bu umumiy storeni o'z ichiga oladi
import post from './post_Reducer'
import api from './middleware/api'

export default configureStore({
    reducer:{
     // -> Hamma reducerlar shu yerda qabul qilinadi
        post // -> post_Reducer.js fayilimiz post nomi ostida storega import qilindi.
    },
    middleware:[
        api
        // -> bu yerda middleware funksiyalar qabul qilinadi
    ]
});

// Umumiy state