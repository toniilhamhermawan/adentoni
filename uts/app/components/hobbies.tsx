import React from "react";

// Objek Hobi
const hobbies = [
    {
        id: 1,
        name: "Gaming",
        image:
            "https://i.pinimg.com/236x/2a/56/90/2a569090a4ac6622ffcbca560b7e90b8.jpg",
    },
    {
        id: 2,
        name: "Photografher",
        image:
            "https://i.pinimg.com/236x/41/97/52/4197528f344e1553b66a4694eb94c65c.jpg",
    },
    {
        id: 3,
        name: "Bermain Bola",
        image:
            "https://i.pinimg.com/736x/7c/90/ce/7c90ce3404b28064417a6aa33617a3c2.jpg",
    },
    {
        id: 4,
        name: "Bernyanyi",
        image:
            "https://i.pinimg.com/236x/66/1f/29/661f298bd299250b4b499fea7b2a9503.jpg",
    },
    {
        id: 5,
        name: "Bermain Alat Musik",
        image:
            "https://i.pinimg.com/236x/cb/1c/3a/cb1c3a9339fa005912b8edaef28d246a.jpg",
    },
    {
        id: 6,
        name: "Mendengarkan Musik",
        image:
            "https://i.pinimg.com/236x/dd/e9/30/dde930acce45ac0d440511b37e4f18de.jpg",
    },
];

export default function MyGallery() {
    return (
        <div className="container mx-auto p-6 text-center pt-20">
            <h2 className="text-3xl font-extrabold mb-8">My Hobby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {hobbies.map((hobby) => (
                    <div
                        key={hobby.id}
                        className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={hobby.image}
                            alt={hobby.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}