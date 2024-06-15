import React, { useState } from 'react';
import toast from 'react-hot-toast';

const RestaurantLayout = () => {
    const [selectedTable, setSelectedTable] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const tableData = [
        { tableNo: 1, capacity: 6 },
        { tableNo: 2, capacity: 6 },
        { tableNo: 3, capacity: 6 },
        { tableNo: 4, capacity: 6 },
        { tableNo: 5, capacity: 4 },
        { tableNo: 6, capacity: 4 },
        { tableNo: 7, capacity: 4 },
        { tableNo: 8, capacity: 4 },
        { tableNo: 9, capacity: 2 },
        { tableNo: 10, capacity: 2 }
    ];

    const timeSlots = ['7:30', '8:00', '8:30', '9:00'];



    const handleBooking = (e) => {
        e.preventDefault();

        if (selectedTable === '') {
            toast.error('Select a table');
            return;
        }
        if (selectedTime === '') {
            toast.error('Select a time');
            return;
        }

        const booking = { selectedTable, selectedTime, name, mobile };



        setSelectedTable('');
        setSelectedTime('');
        setName('');
        setMobile('');

        toast.success("Booking successful");
        console.log('New booking:', booking);
    };

    return (
        <div className="flex flex-col w-full p-5 h-full">
            <h1 className="text-3xl font-bold mb-8">Restaurant Booking</h1>
            <p className="text-2xl font-medium mb-4">Royal Restaurant</p>

            <div className="flex flex-col lg:flex-row">
                <div className="bg-gray-100 rounded-lg flex-grow shadow-md p-4 mb-8 lg:mb-0 lg:mr-8">
                    <div className="grid grid-cols-2 gap-4">
                        {tableData.map((table) => (
                            <div
                                key={table.tableNo}
                                className={`flex justify-center items-center rounded-md overflow-hidden shadow-sm cursor-pointer ${table.capacity === 6 ? 'h-[120px]' : ''} ${table.capacity === 4 ? 'h-[100px]' : ''} ${table.capacity === 2 ? 'h-[50px]' : ''} ${selectedTable === table.tableNo
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white'
                                    }`}
                                onClick={() => setSelectedTable(table.tableNo)}
                            >
                                <div className="p-4 text-center">
                                    <p className="text-lg font-semibold">{table.tableNo}</p>
                                    <p className="text-sm">
                                        {table.capacity} {table.capacity > 1 ? 'Seats' : 'Seat'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-4 flex-grow">
                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2 text-center">Select Time</p>
                        <table className="w-full border-[2px] border-gray-400 rounded-lg">
                            <tbody>
                                {timeSlots.map((time) => (
                                    <tr key={time} className="text-center">
                                        <td className="p-2 border-[2px] border-gray-400 rounded-lg">
                                            <input
                                                type="radio"
                                                name="time"
                                                value={time}
                                                checked={selectedTime === time}
                                                onChange={() => setSelectedTime(time)}
                                                className="mr-2"
                                            />
                                        </td>
                                        <td className="p-2 border-[2px] border-gray-400 rounded-lg">{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2 text-center">Selected Table and Time</p>
                        <div className="bg-white p-4 rounded-md shadow-sm text-center">
                            <p>Table: {selectedTable || 'N/A'}</p>
                            <p>Time: {selectedTime || 'N/A'}</p>
                        </div>
                    </div>
                    <form onSubmit={handleBooking} className="text-center">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="p-2 border rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                                className="p-2 border rounded-md w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestaurantLayout;
