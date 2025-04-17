// GetDemo.jsx
import React from 'react';

const GetDemo = () => {
    return (
        <div className="w-full py-16 px-4 bg-[#F5F7FA]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Pellentesque suscipit<br />
                    fringilla libero eu.
                </h2>
                
                <button 
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2 mx-auto"
                    onClick={() => console.log('Demo requested')}
                >
                    Get a Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-1">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GetDemo;
