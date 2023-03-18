import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

        const [title, setTitle] = useState("");
        const [body, setBody] = useState ("");
        const [author, setAuthor] =useState ("");
        const [isPending, setIsPending] =useState (false)
        const history= useHistory();

        const handleSubmit= (e)=>{
            e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        
        fetch("https://dojoblog-29830-default-rtdb.firebaseio.com/blogs.json",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)

        }). then (()=>{
            console.log("new blog added");
            setIsPending(false);
            history.push("/")
        })
        }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                type="text" 
                required
                value= {title}
                onChange = {(e)=> setTitle(e.target.value)}
                />

                <label>Blog body</label>
                <textarea 
                required
                value= {body}
                onChange = {(e)=> setBody(e.target.value)}>

                </textarea>
                
                <label>Blog author</label>
                <input 
                type="text" 
                required
                value= {author}
                onChange = {(e)=> setAuthor(e.target.value)}
                />

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog</button>}
            </form>

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
        );
}
    
export default Create
