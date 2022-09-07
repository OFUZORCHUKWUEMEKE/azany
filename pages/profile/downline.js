import { Divider, Stack, TextField, IconButton } from '@mui/material'
import React from 'react'
import BasicTable from '../../components/DownlineTable'
import Layout from '../../components/Layout'
import FilterListIcon from '@mui/icons-material/FilterList';
import Link from 'next/link';

const Downline = () => {
    return (
        <>
            <Layout>
                <div className="w-full bg-gray-50 min-h-screen py-10">
                    <div className="w-full bg-gray-50 min-h-screen py-10">
                        <Stack spacing={2}>
                            <div className='p-4 rounded-md w-4/5 mx-auto bg-white'>
                                <div className="space-y-3 w-4/5 mx-auto">
                                    <div className='flex items-center justify-center space-y-3 flex-col'>
                                        <img src="/images/dashboard.png" className='object-cover' />
                                        <div className="">
                                            <button className='bg-[#E51B48] text-white py-2 px-3 rounded-md'>Edit Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='p-6 h-[30vh] flex justify-center items-center rounded-md w-4/5 mx-auto bg-white'>
                                    <div className="space-y-3 w-4/5 mx-auto">
                                        <div className='flex items-center justify-center space-y-3 flex-col'>
                                            {/* <img src="/images/dashboard.png" className='object-cover' /> */}
                                            <p>Shop Logo</p>
                                            <div className="">
                                                <h2 className="text-3xl text-blue-700 font-bold">Genentech</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='p-6 h-[30vh] flex justify-center items-center rounded-md w-4/5 mx-auto bg-white'>
                                    <div className="space-y-3 w-[90%] mx-auto">
                                        {/* <Divider /> */}
                                        <div className='space-y-3'>
                                            <div className='flex  justify-between items-center p-2'>
                                                <p className="font-bold">Shop Name</p>
                                                <p>Fidland Ventures</p>
                                            </div>
                                            <Divider />
                                            <div className='flex justify-between items-center p-2'>
                                                <p className="font-bold">Category</p>
                                                <p>Tech Products</p>
                                            </div>
                                            <Divider />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='p-6 flex flex-col justify-center items-center rounded-md w-4/5 mx-auto bg-white'>
                                    <div className="space-y-3 w-[95%] mx-auto">
                                        <div className='flex space-x-3 items-center'>

                                            <TextField variant='outlined' className='w-4/5' placeholder='Search' />
                                            <Link href="/profile/downlinesort">
                                                <IconButton>
                                                    <FilterListIcon className="text-pink-600" />
                                                </IconButton>
                                            </Link>
                                        </div>
                                        <BasicTable />
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Downline