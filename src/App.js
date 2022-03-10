import React, {useState} from "react";
import './styles/App.css'
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

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

    return (
    <div className="App">
        <div>
            <form>


                <input type="text" placeholder="Name of the Post"/>
                <input type="text" placeholder="Description"/>

                <MyButton>

                    Create a post
                </MyButton>


            </form>


            <PostList posts={posts} title="Javascript Topics"/>
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