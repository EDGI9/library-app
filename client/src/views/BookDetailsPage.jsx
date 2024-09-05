import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import booksAPI from "../apis/books";

import Pill from "../components/Pill.jsx";


export default function BookDetailsPage () {
    const params = useParams();
    const navigate = useNavigate();

    const [bookDetails, setBookDetails] = useState({
        name: "",
        description: "",
        genre: [],
        image:""
      });

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            const url = booksAPI.GET_BOOK.replace("{id}",id);

            if(!id) return;
            const response = await fetch(url);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const book = await response.json();
            if (!book) {
                console.warn(`Book with id ${id} not found`);
                navigate("/");
                return;
            }
            setBookDetails(book);
        }
        fetchData();
        return;
    }, [params.id, navigate]);


    function genreItems() {
        return (bookDetails.genre?.map((item,index) => {
            return (
                <Pill
                    key={index}
                    text={item}
                />
            )
        }))
    }

    return (
        <section className="flex justify-center w-full">
            <div className="flex justify-center w-10/12">
                <div className="flex flex-col w-11/12 max-w-4xl">
                    <div className="flex flex-col gap-2 mb-9">
                        <h1 className="text-4xl">{bookDetails.name}</h1>
                        <div className="flex gap-2">{genreItems()}</div>
                    </div>
                    <div className="flex justify-between flex-col flex-col-reverse md:flex-row gap-12">
                        <p className="max-w-lg">{bookDetails.description}</p>
                        <img src={bookDetails.image} alt="" height={500} width={300}/>
                    </div>
                </div>
            </div>
        </section>
    ) 
}