import React, {useState} from "react";
import './styles/App.css'
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

const [posts, setPosts] = useState([
    {id : 1, title: ' Javascript', body: 'All About Language'},
    {id : 2, title: ' Javascript', body: 'All About Syntax'},
    {id : 3, title: ' Javascript', body: 'All About Semantik'},
    {id : 4, title: ' Javascript', body: 'All About Logic'}
]);
const [postsP, setPostsP] = useState([
        {id : 1, title: ' Python', body: 'All About Language'},
        {id : 2, title: ' Python', body: 'All About Syntax'},
        {id : 3, title: ' Python', body: 'All About Semantik'},
        {id : 4, title: ' Python', body: 'All About Logic'}
]);

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


    const addNewPost = (e) => {
        e.preventDefault() // Отключаем стандартное поведение браузера
        const newPosts = {
            id: Date.now(),
            title,
            description
        }
        setPosts([...posts, newPosts])
        setTitle('')  // clean input
        setDescription('') // clean input
    }
    const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
    <div className="App">
        <div>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}   // отслеживаем событие получение инпута
                    placeholder={"Title of Post"}/>
                <MyInput
                    value={description}
                    onChange={e => setDescription(e.target.value)}   // отслеживаем событие получение инпута
                    placeholder={"Description of Post"}/>

                <MyButton type="submit" onClick={addNewPost}>
                    Create a post
                </MyButton>
            </form>

            <PostList remove={removePost} posts={posts} title="Javascript Topics"/>
            <Counter/>
            <PostList posts={postsP} title="Python Topics"/>
            <Counter/>

            {/*<PostItem post={{id:1, title :'Javascript', body: 'Description of Java Language' }}/>*/}
            {/*<PostItem post={{id:2, title :'Javascript', body: 'Description of Java Language' }}/>*/}
            {/*<PostItem post={{id:3, title :'Javascript', body: 'Description of Java Language' }}/>*/}
        </div>
    </div>
    );
}

export default App;