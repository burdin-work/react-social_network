import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength10, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostBody"
                   component={Textarea}
                   placeholder="enter your post"
                   validate={[required, maxLength10]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(NewPostForm)


const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map((post, index) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);


    let onAddNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={styles.postsBlock}>
            <div>
                <h3>My posts</h3>
                <NewPostFormRedux onSubmit={onAddNewPost}/>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;