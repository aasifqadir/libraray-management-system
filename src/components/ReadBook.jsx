import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/ReadBook.css'
const ReadBook = () => {
    let params = useParams()
    let [book, setBook] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })
    return (
        <div className="read-book">
            <span>{book.title}</span>
            <p>{book.description}</p>
        </div>
    );
}

export default ReadBook;

