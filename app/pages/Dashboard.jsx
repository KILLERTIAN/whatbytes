"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const Dashboard = () => {
    // State for modal and form data
    const [showModal, setShowModal] = useState(false);
    const [rank, setRank] = useState(1);
    const [percentile, setPercentile] = useState(30);
    const [score, setScore] = useState(10);

    // Data for comparison graph
    const data = {
        labels: ['0', '25', '50', '75', '100'],
        datasets: [
            {
                label: 'Percentile',
                data: [10, 20, 50, 10, 20, 100, 10, 20, 40, 10, 20, 10, 20, 20, 100, 10, 20],
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#4F46E5',
            },
        ],
    };

    // Options for graph
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#4F46E5',
                titleColor: '#FFF',
                bodyColor: '#FFF',
                cornerRadius: 4,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    stepSize: 20,
                },
            },
        },
    };

    // Handler for saving updated values
    const handleSave = () => {
        setShowModal(false);
        // You can add logic here to update the chart data dynamically if required
    };

    return (
        <div className="flex w-full flex-col px-6 sm:px-12 py-10 space-y-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Skill Test</h1>

            {/* Test Overview Section */}
            <div className="flex flex-col lg:flex-row w-full gap-6">
    <div className="flex flex-col w-full md:max-w-[800px] ">
        <div className="flex w-full items-center justify-between gap-4 rounded-lg border border-gray-300 px-4 py-4 shadow-sm">
            <Image src="/html.png" width={80} height={60} alt="html5" />
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-lg">Hyper Text Markup Language</h1>
                <h3 className="text-gray-600">Questions: 8 | Duration: 15 mins | Submitted on 5 June 2021</h3>
            </div>
            <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold"
                onClick={() => setShowModal(true)}
            >
                Update
            </button>
        </div>

        {/* Quick Statistics Section */}
        <div className="flex flex-col items-start justify-start px-4 py-4 border border-gray-300 rounded-lg shadow-sm mt-6">
            <h1 className="font-bold text-lg mb-4">Quick Statistics</h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex flex-row border-r border-gray-300 py-4 px-6 gap-3 w-full md:w-auto">
                    <div className="flex items-center justify-center h-14 w-14 bg-gray-200 rounded-full text-2xl">🏆</div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xl">{rank}</h1>
                        <h1 className="font-semibold text-md text-gray-500">YOUR RANK</h1>
                    </div>
                </div>
                <div className="flex flex-row border-r border-gray-300 py-4 px-4 gap-3 w-full md:w-auto">
                    <div className="flex items-center justify-center h-14 w-14 bg-gray-200 rounded-full text-2xl">📋</div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xl">{percentile}%</h1>
                        <h1 className="font-semibold text-md text-gray-500">PERCENTILE</h1>
                    </div>
                </div>
                <div className="flex flex-row py-4 px-4 gap-3 w-full md:w-auto">
                    <div className="flex items-center justify-center h-14 w-14 bg-gray-200 rounded-full text-2xl">✅</div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xl">{score}/15</h1>
                        <h1 className="font-semibold text-md text-gray-500">CORRECT ANSWERS</h1>
                    </div>
                </div>
            </div>
        </div>

        {/* Comparison Graph */}
        <div className="flex flex-col flex-1 border border-gray-300 rounded-lg shadow-sm p-6 mt-6">
            <h1 className="font-bold text-lg mb-4">Comparison Graph</h1>
            <h3>
                <span className="font-semibold">You scored {percentile}% percentile </span>
                which is lower than the average percentile 72% of all engineers who took this assessment
            </h3>
            <div className="w-full h-64">
                <Line data={data} options={options} />
            </div>
        </div>
    </div>

    {/* Syllabus Analysis Section */}
    <div className="flex flex-col w-full border border-gray-300 rounded-lg shadow-sm px-6 py-4 mt-6 md:mt-0">
        <h1 className="font-bold text-lg mb-4">Syllabus Wise Analysis</h1>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold mb-2">HTML Tools, Forms, History</h2>
                <span className="text-sm font-bold text-blue-500">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold mb-2">Tags & References in HTML</h2>
                <span className="text-sm font-bold text-yellow-500">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold mb-2">Tables & References in HTML</h2>
                <span className="text-sm font-bold text-red-500">24%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold mb-2">Tables & CSS Basics</h2>
                <span className="text-sm font-bold text-green-500">96%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '96%' }}></div>
            </div>
        </div>
    </div>
</div>


            {/* Update Modal */}
            {showModal && (
                <div className="absolute top-0 m-0 inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 min-h-[100vh]">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] max-w-full h-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Update Values</h2>
                            <Image src="/html.png" width={50} height={10} alt="html5" />
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Question 1 */}
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 flex items-center justify-center bg-blue-800 text-white rounded-full text-sm">
                                    1
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label className="font-semibold">Update Your Rank:</label>
                                    <input
                                        type="number"
                                        value={rank}
                                        onChange={(e) => setRank(e.target.value)}
                                        className="border border-gray-300 rounded px-2 py-1 w-20"
                                    />
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 flex items-center justify-center bg-blue-800 text-white rounded-full text-sm">
                                    2
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label className="font-semibold">Update Your Percentile:</label>
                                    <input
                                        type="number"
                                        value={percentile}
                                        onChange={(e) => setPercentile(e.target.value)}
                                        className="border border-gray-300 rounded px-2 py-1 w-20"
                                    />
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6 flex items-center justify-center bg-blue-800 text-white rounded-full text-sm">
                                    3
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label className="font-semibold">Update Your Score (out of 15):</label>
                                    <input
                                        type="number"
                                        value={score}
                                        onChange={(e) => setScore(e.target.value)}
                                        className="border border-gray-300 rounded px-2 py-1 w-20"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            {/* Buttons */}
                            <div className="flex gap-4">
                                <button
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

export default Dashboard;
