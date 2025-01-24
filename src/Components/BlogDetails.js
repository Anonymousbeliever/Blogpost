import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs } = useFetch('http://localhost:4000/blogs/' + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();

        // Ask for confirmation before deleting
        if (window.confirm("Are you sure you want to delete this blog?")) {
            axios.delete('http://localhost:4000/blogs/' + id)
                .then(res => {
                    toast.success("Blog deleted successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000,
                    });
                    setTimeout(() => {
                        history.push('/');
                    }, 3000);
                })
                .catch(err => {
                    toast.error("Failed to delete the blog", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000,
                    });
                });
        }
    };

    return (
        <div className="preview">
            {blogs && (
                <article>
                    <h3>{blogs.title}</h3>
                    <p>Written by: {blogs.auther}</p>
                    <div>{blogs.message}</div>
                    <Button onClick={handleDelete} variant="danger" className="mt-3" type="submit">
                        Delete Blog
                    </Button>
                </article>
            )}
            <ToastContainer />
        </div>
    );
};

export default BlogDetails;
