import React, { useState } from 'react'
import toast from 'react-hot-toast';

const BanquetLayout = () => {
    const timeSlots = ['9:30 am', '10:30 am', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm'];
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedBanquet, setSelectedBanquet] = useState('');
    const banquetData = [
        { banquetNo: 1, desc: "Inner-Hall" },
        { banquetNo: 2, desc: "Inner-Hall-With-Outer-Lawn-Area" }
    ];

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');


    const handleBooking = (e) => {
        e.preventDefault();

        if (selectedBanquet === '') {
            toast.error('Select a table');
            return;
        }
        if (selectedTime === '') {
            toast.error('Select a time');
            return;
        }

        const booking = { selectedBanquet, selectedTime, name, mobile };



        setSelectedBanquet('');
        setSelectedTime('');
        setName('');
        setMobile('');

        toast.success("Booking successful");
        console.log('New booking:', booking);
    };

    return (
        <div className="flex flex-col w-full p-5 h-full">
            <h1 className="text-3xl font-bold mb-8">Turf Booking</h1>
            <p className="text-2xl font-medium mb-4">Royal Turf</p>

            <div className="flex flex-col lg:flex-row">
                <div className="bg-gray-100 rounded-lg flex-grow shadow-md p-4 mb-8 lg:mb-0 lg:mr-8">
                    <div className="grid gap-4 h-full">
                        {
                            banquetData.map((banquet) => (
                                <div
                                    key={banquet.banquetNo}
                                    className={`flex h-full justify-center items-center rounded-md overflow-hidden shadow-sm cursor-pointer ${banquet.desc === "Inner-Hall-With-Outer-Lawn-Area" ? 'border-[24px] border-green-400' : ''  } ${selectedBanquet === banquet.banquetNo
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white'
                                        }`}
                                    onClick={() => setSelectedBanquet(banquet.banquetNo)}
                                >
                                    <div className="p-4 text-center">
                                        <p className="text-lg font-semibold">{banquet.banquetNo}</p>
                                        <p className="text-sm">
                                            {banquet.desc} 
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
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
                        <p className="text-lg font-semibold mb-2 text-center">Selected Turf and Time</p>
                        <div className="bg-white p-4 rounded-md shadow-sm text-center">
                            <p>Turf: {selectedBanquet || 'N/A'}</p>
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
    )
}

export default BanquetLayout