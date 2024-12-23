import React from "react";

const Header = () => {
    const user = getUserData();

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            {user && (
                <div className="flex items-center">
                    <img
                        src={user?.image || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-2"
                        // onError={() => console.log("Error loading image!")}
                    />
                    {/* <span>{user.name}</span> */}
                </div>
            )}
        </header>
    );
};

const getUserData = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export default Header;
