import { Link } from "react-router-dom";

const Bloglist = ({blogs, title,}) => {
    return ( 
        <div className="bloglist">
           <h1> {title} </h1>
            {Object.values(blogs).map((blog, i)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${Object.keys(blogs)[i]}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}    
        </div>
     );
}
 
export default Bloglist
