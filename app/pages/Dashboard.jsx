"use client"
import Image from 'next/image';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const Dashboard = () => {
    // Data for comparison graph
    const data = {
        labels: ['0', '25', '50', '75', '100'],
        datasets: [
            {
                label: 'Percentile',
                data: [10, 20, 50, 80, 100],
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

    return (
        <div className='flex w-full flex-col px-12 py-10 space-y-6 bg-gray-100'>
            <h1 className='text-2xl font-bold mb-4'>Skill Test</h1>

            {/* Test Overview Section */}
            <div className="flex flex-row w-full gap-6">
                <div className="flex flex-col max-w-[800px] w-full">
                    <div className="flex w-full items-center justify-evenly gap-4 rounded-lg border border-gray-300 px-4 py-4 bg-white shadow-sm">
                        <Image
                            src="/html.png"
                            width={80}
                            height={60}
                            alt='html5'
                        />
                        <div className="flex flex-col gap-1">
                            <h1 className='font-bold text-lg'>Hyper Text Markup Language</h1>
                            <h3 className='text-gray-600'>Questions: 8 | Duration: 15 mins | Submitted on 5 June 2021</h3>
                        </div>
                        <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold'>Update</button>
                    </div>

                    {/* Quick Statistics Section */}
                    <div className="flex flex-col items-start justify-start px-6 py-4 border border-gray-300 rounded-lg bg-white shadow-sm mt-6">
                        <h1 className='font-bold text-lg mb-4'>Quick Statistics</h1>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row border-r border-gray-300 py-4 px-6 gap-3">
                                <div className="flex items-center justify-center h-14 w-14 bg-gray-100 rounded-full text-2xl">🏆</div>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-xl">1</h1>
                                    <h1 className="font-semibold text-md text-gray-500">YOUR RANK</h1>
                                </div>
                            </div>
                            <div className="flex flex-row border-r border-gray-300 py-4 px-6 gap-3">
                                <div className="flex items-center justify-center h-14 w-14 bg-gray-100 rounded-full text-2xl">📋</div>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-xl">30%</h1>
                                    <h1 className="font-semibold text-md text-gray-500">PERCENTILE</h1>
                                </div>
                            </div>
                            <div className="flex flex-row py-4 px-6 gap-3">
                                <div className="flex items-center justify-center h-14 w-14 bg-gray-100 rounded-full text-2xl">✅</div>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-xl">10/15</h1>
                                    <h1 className="font-semibold text-md text-gray-500">CORRECT ANSWERS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Comparison Graph */}
                    <div className="flex flex-col flex-1 border border-gray-300 rounded-lg bg-white shadow-sm p-6">
                        <h1 className='font-bold text-lg mb-4'>Comparison Graph</h1>
                        <div className='w-full h-64'>
                            <Line data={data} options={options} />
                        </div>
                    </div>
                </div>
                {/* Syllabus Analysis Section */}
                <div className="flex flex-col w-full border border-gray-300 rounded-lg bg-white shadow-sm px-6 py-4">
                    <h1 className='font-bold text-lg mb-4'>Syllabus Wise Analysis</h1>
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-sm font-semibold mb-2">HTML Tools, Forms, History</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold mb-2">Tags & References in HTML</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold mb-2">Tables & References in HTML</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold mb-2">Tables & CSS Basics</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '96%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Dashboard;
