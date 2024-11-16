import React from "react";

let members = [
    {
        id: 1,
        name: "Đặng Duy Cương",
        role: "Chủ nhiệm CLB",
        period: "2023-2024",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 2,
        name: "Nguyễn Tuấn Đạt",
        role: "Phó chủ nhiệm",
        period: "2023-2024",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 3,
        name: "Trần Văn Quang",
        role: "Trưởng ban Truyền thông",
        period: "2023-2024",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 4,
        name: "Vũ Mạnh Cường",
        role: "Phó ban Truyền thông",
        period: "2023-2024",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 5,
        name: "Nguyễn Hoàng Việt",
        role: "Trưởng ban Giáo dục",
        period: "2023-2024",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 6,
        name: "Tạ Tuấn Hải",
        role: "Phó ban Giáo dục",
        period: "2023-2024",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 7,
        name: "Nguyễn Thanh Huyền",
        role: "Chủ nhiệm CLB",
        period: "2022-2023",
        imageUrl: "https://placehold.co/300x200",
    },
    {
        id: 8,
        name: "Vũ Hồng Phúc",
        role: "Chủ nhiệm CLB",
        period: "2020-2022",
        imageUrl: "https://placehold.co/300x200",
    },
];

const HumansOfEgg = ( { humansOfEggRef } ) => {
    return (
        <div ref={humansOfEggRef} className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-50">
                Star Members
            </h1>

            {/* Upper Part: Grid layout for the first 3-4 cards */}
            <div className="max-w-screen-lg mx-auto mb-8">
                <div className="flex justify-between space-x-6">
                    {members.slice(0, 4).map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center w-60 p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
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
                                    {member.period}
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
                                {member.period}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HumansOfEgg;
