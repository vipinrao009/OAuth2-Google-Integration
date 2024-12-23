import React from 'react';
import Layout from '../Layout/Layout';

const Dashboard = () => {
    const user = getUserData();

    return (
      <Layout>
       
            <div className="container h-screen flex flex-col items-center mx-auto px-4 py-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Your Dashboard</h2>
                <div className="grid-cols-1 w-64 md:grid-cols-3 gap-6">
                    {/* Cards */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center justify-center mb-3 w-56 h-56">                        
                        <img 
                            src={user.image}
                            alt="Profile"
                            className="rounded-sm w-full h-full object-cover"
                        />
                    </div>

                        <h3 className="text-lg font-bold">{user.name}</h3>
                        <h5 className=" font-semibold">{user.email}</h5>                    
                    </div>

                    <button className='bg-blue-500 w-full px-1 py-2 mt-3 text-white rounded-md hover:bg-blue-600'>Logout</button>
                    
                </div>
            </div>
        
      </Layout>
    );
};

const getUserData = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export default Dashboard;
