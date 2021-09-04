import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from './api'
import {toast} from 'react-toastify'

const slice = createSlice({
    name:'post',
    initialState:{
        posts:[
            {id:1,title:'loading...',body:'loading...'},
            {id:2,title:'loading...',body:'loading...'}
        ],
    },
    reducers:{
        getFromResponse:(state,action)=>{
            state.posts = action.payload
        },
        postSaved:(state,action)=>{
            state.posts.unshift(action.payload);
            toast.success('Post muvoffaqiyatli saqlandi')
        },
        postUpdate:(state,action)=>{
            state.posts.map(item =>{
                if (item.id === action.payload.id){
                    item.title = action.payload.title;
                    item.body = action.payload.body;
                }
            })
            toast.success("Malumot o'zgardi")
        }
    }
});

export const getPosts =()=> apiCall({
    url:"/posts",
    method:'GET',
    onSuccess:'post/getFromResponse',
    onFail:''
});

export const savePosts =(data)=> apiCall({
    url:"/posts",
    method:'POST',
    data,
    onSuccess:'post/postSaved',
});

export const editPost =(data)=> apiCall({
    url:"/posts/" + data.id,
    method:'PUT',
    data,
    onSuccess:'post/postUpdate',
});

// ->  getPosts funksiyasi post.js dan keldi va apiCall funksiyasi uni middleware ga yuboradi dispatch o'sha yerda amalga oshadi.
// -> bu yerda Post.js ga tegishli reducerlar bor
// -> initialState bu state lar

export default slice.reducer;
