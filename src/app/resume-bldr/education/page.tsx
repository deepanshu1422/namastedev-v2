"use client"
import React, { useState, useContext } from "react";
import { DataContext } from '../../../context/resume-context'
import { useRouter } from 'next/navigation';
import { CurrentPosition } from "@/components/ui/current-position";

export default function Education() {

    const { push, back } = useRouter();

    const { data, updateData } = useContext(DataContext);
    const [formData, setFormData] = useState(data['education'] == null ? [{ cllgName: '', course: '', location: '', year: '' }] : data['education']);

    const addInput = () => {
        const data = { cllgName: '', course: '', location: '', year: '' }
        setFormData([...formData, data]);
    };

    const nextPage = () => {
        // console.log("sjsj" )
        console.log("education")
        updateData('education', formData)
        push('/resume-bldr/experience');
    }

    return (
        <>
            <CurrentPosition value={"education"} />
            <h1 className=' text-lg lg:text-4xl text-center text-white'>Education</h1>

            <div className='py-[4%]'>
                {formData.map((value: any, index: number) => (
                    <div key={index}>
                        <EducationInput value={value} index={index} formData={formData} setFormData={setFormData} />
                        {
                            formData.length - 1 != index ?
                                <hr className="border border-gray-300 my-4 mx-[20%]" />
                                :
                                <></>
                        }
                    </div>
                ))}
            </div>

            <div className='flex justify-end mx-[20%]'>
                <button type="button" onClick={addInput} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Field</button>
            </div>

            <div className='flex justify-between mx-[20%] my-[1%]'>
                <button type="button" onClick={() => { back() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
                <button type="button" onClick={() => { nextPage() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
            </div>
        </>
    )
}

const EducationInput = ({ value, formData, setFormData, index }: { value: any, formData: any, setFormData: any, index: any }) => {

    const handleFormChange = (index: any, event: any) => {
        let data = [...formData];
        data[index][event.target.name] = event.target.value;
        setFormData(data);
    }

    const removeItem = (index: any) => {
        let data = [...formData];
        data.splice(index, 1)
        setFormData(data)
    }

    return (
        <div className='xl:mx-[20%] mx-[10%]'>
            <div className='flex justify-end'>
                <button type="button" onClick={() => { removeItem(index) }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-white">College Name</label>
                    <input type="text" value={value.cllgName} onChange={(e) => { handleFormChange(index, e) }} id="college_name" name="cllgName" placeholder='college Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white">Course</label>
                    <input type="text" value={value.course} onChange={(e) => { handleFormChange(index, e) }} id="last_name" name="course" placeholder='B.Tech' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white">Location</label>
                    <input type="text" value={value.location} onChange={(e) => { handleFormChange(index, e) }} id="location" name="location" placeholder='bangalore,india' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-white">Year</label>
                    <input type="text" value={value.year} onChange={(e) => { handleFormChange(index, e) }} id="year" name="year" placeholder='2019 - 2023' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>
        </div>
    )
}