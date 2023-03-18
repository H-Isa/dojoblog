import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory()
    const{ data: blog, isPending, error} = useFetch(`https://dojoblog-29830-default-rtdb.firebaseio.com/blogs/${id}.json/`)

    const handleClick= ()=>{
        fetch(`https://dojoblog-29830-default-rtdb.firebaseio.com/blogs/${id}.json/`, 
        { method: "DELETE"
        })
        history.push('/')
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && {error}}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;