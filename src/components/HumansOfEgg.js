import React from "react";

const members = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        imageUrl: "https://example.com/john.jpg",
        description: "John has been with the company for 5 years...",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Product Manager",
        imageUrl: "https://example.com/jane.jpg",
        description: "Jane is leading the team on the new product launch...",
    },
    {
        id: 3,
        name: "Alice Johnson",
        role: "UX/UI Designer",
        imageUrl: "https://example.com/alice.jpg",
        description:
            "Alice is focused on improving user experience for our products...",
    },
    {
        id: 4,
        name: "Bob Lee",
        role: "Backend Developer",
        imageUrl: "https://example.com/bob.jpg",
        description:
            "Bob has been working on optimizing our backend systems...",
    },
    {
        id: 5,
        name: "Emma Brown",
        role: "Marketing Specialist",
        imageUrl: "https://example.com/emma.jpg",
        description:
            "Emma has extensive experience in marketing strategies and brand building...",
    },
    {
        id: 6,
        name: "Michael Green",
        role: "Data Scientist",
        imageUrl: "https://example.com/michael.jpg",
        description:
            "Michael specializes in data analysis and machine learning models...",
    },
    {
        id: 7,
        name: "Sarah White",
        role: "Quality Assurance Engineer",
        imageUrl: "https://example.com/sarah.jpg",
        description:
            "Sarah ensures that our products meet the highest quality standards...",
    },
    {
        id: 8,
        name: "David Harris",
        role: "Sales Director",
        imageUrl: "https://example.com/david.jpg",
        description:
            "David leads the sales team and works on expanding our customer base...",
    },
    // Add more members as needed
];
const HumansOfEgg = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Star Members
            </h1>

            {/* Upper Part: Grid layout for the first 3-4 cards */}
            <div className="max-w-screen-lg mx-auto mb-8">
                <div className="flex justify-between space-x-6">
                    {members.slice(0, 4).map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center w-60 p-4 bg-white shadow-md rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-semibold">
                                    {member.name}
                                </h2>
                                <p className="text-gray-600">{member.role}</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lower Part: Same as before, vertically aligned cards */}
            <div className="space-y-6">
                {members.slice(4).map((member) => (
                    <div
                        key={member.id}
                        className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg hover:bg-gray-200 transition-all duration-100 cursor-pointer"
                    >
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">
                                {member.name}
                            </h2>
                            <p className="text-gray-600">{member.role}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HumansOfEgg;
