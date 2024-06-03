import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BLOG() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => {
                console.error("Error fetching blog posts:", error);
            });
    }, []);

    return (
        <>
            <h2>BLOG</h2>
            <div id="blogs">
                {blog.map((post, index) => {
                    return (
                        <div className="post" key={index}>
                            <h3>
                                <Link to="">{post.title}</Link>
                            </h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default BLOG;
