import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { GET_BOOK } from "../store/slices/book";

import Pill from "../components/Pill.jsx";
// import BookService from "../domains/books/index.js";


export default function BookDetailsPage () {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const bookDetails = useSelector((state) => state.book.data);

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            const book = await dispatch(GET_BOOK(id))
            
            if (!book) {
                console.warn(`Book with id ${id} not found`);
                navigate("/");
                return;
            }
        }
        fetchData();
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