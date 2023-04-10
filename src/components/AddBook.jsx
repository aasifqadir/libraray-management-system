import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css'

const AdminLogin = () => {
    let navigate = useNavigate()
    let title = useRef(null)
    let author = useRef(null)
    let pages = useRef(null)
    let year = useRef(null)
    let imageLink = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        let data = {
            title: title.current.value,
            author: author.current.value,
            pages: pages.current.value,
            year: year.current.value,
            imageLink: imageLink.current.value,
        }
        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('Book has been successfully added')
        navigate ('/admin/book-list')
        // console.log(data);

    }
    return (
        <form action="" onSubmit={submit}>
            <div className="form form-login">
                <h1>Add Book</h1>
                <input ref={title} type="text" placeholder="Title" required />
                <input ref={author} type="text" placeholder="Author" required />
                <input ref={pages} type="text" placeholder="Pages" required />
                <input ref={year} type="text" placeholder="Year" required />
                <input ref={imageLink} type="text" placeholder="Thumbnail" required />

                <input id="btn" type="submit" value="Add Book" />
            </div>
        </form>
    );
}

export default AdminLogin;