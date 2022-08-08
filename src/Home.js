import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {

    const{data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    
    return ( 
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>Loading....</p>}
            {blogs && < Bloglist blogs={blogs} title="All Blogs" />}
            
        </div>
     );
}
 
export default Home;
