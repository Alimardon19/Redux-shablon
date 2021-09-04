import React from "react";
import {connect} from "react-redux";
import {useEffect,useState} from 'react'
import {getPosts,savePosts,editPost} from '../../Store/post_Reducer'
import PostModal from './components/post_Modal'

function Post ({posts,getPosts,savePosts,editPost}){

    const [modalVisable,setModalVisable] = useState(false);
    const [currentItem,setCurrentItem] = useState('');

    useEffect(()=>{
        getPosts()
    },[]);
    function openModal(){
        setModalVisable(prev => !prev);
        if (modalVisable === false){
            setCurrentItem('')
        }
    }
    function submitPost(event,errors,values) {
        if (currentItem){
            editPost({...values,id:currentItem.id})
        }else {
            savePosts(values);
        }
        openModal()
    }
    function handleEdit(item) {
        openModal();
        setCurrentItem(item)
    }
    return(
        <div>
            <button className={'btn btn-primary float-end'} onClick={openModal}>+ Add</button>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>NO</th>
                    <th>title</th>
                    <th>body</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                                <button className={'btn btn-dark m-1'} onClick={()=>handleEdit(item)}>Edit</button>
                                <button className={'btn btn-danger m-1'}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <PostModal currentItem={currentItem} submit={submitPost} isOpen={modalVisable} toggle={openModal}/>
        </div>

    )
}
export default connect(
    ({post:{posts}})=>({posts:posts})
    // -> mapStateToProps dan  posts nomli state ni olib kelingan
    // -> 1)post nomli reducer dan posts state olingan va posts degan keyga posts nomi posts nomi bilan value qilib berilgan
    ,{getPosts,savePosts,editPost}
) (Post)