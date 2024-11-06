"use client"; // This directive indicates that this is a client component

import React, { useState } from 'react';

export default function ContactForm() {
    // State for storing input from the form
    const [name, setName] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [rating, setRating] = useState<number>(0); // State for storing the rating
    const [ratingsList, setRatingsList] = useState<number[]>([]); // To keep track of all ratings

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page refresh

        // Log data to console (or send data to a server)
        console.log('Nama:', name);
        console.log('Komentar:', comment);
        console.log('Rating:', rating);

        // Update the list of ratings
        setRatingsList([...ratingsList, rating]);

        // Reset form
        setName('');
        setComment('');
        setRating(0);
    };

    // Function to calculate average rating
    const calculateAverageRating = () => {
        if (ratingsList.length === 0) return 0;
        const total = ratingsList.reduce((acc, curr) => acc + curr, 0);
        return (total / ratingsList.length).toFixed(1);
    };

    return (
        <div className="container mx-auto p-4 text-center pt-20">
            <h2 className="text-black font-bold text-2xl">Contact Us</h2>
            <form onSubmit={handleSubmit} className="border-2 border-indigo-400 rounded-lg bg-gray-200 p-5 my-5">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Komentar:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                    <div className="flex justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Kirim
                </button>
            </form>

            {/* Display average rating */}
            <div className="mt-5">
                <h3 className="text-black font-bold">Average Rating: {calculateAverageRating()}</h3>
            </div>
        </div>
    );
}
