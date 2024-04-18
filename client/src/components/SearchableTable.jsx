import React, { useState } from 'react';

const SearchableTable = ({ data, columns }) => {
    const [search, setSearch] = useState('');

    const filteredData = data.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <table className="w-full">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        {columns.map(column => (
                            <th
                                key={column.key}
                                className="px-6 py-3 text-left font-medium uppercase tracking-wider"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.rank} className="hover:bg-blue-100 transition-colors duration-300">
                            {columns.map(column => (
                                < td key={`${item.id}-${column.key}`} className="px-6 py-4">
                                    {item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default SearchableTable;