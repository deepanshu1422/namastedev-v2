"use client"
import React, { useState, useContext } from "react";
import { DataContext } from '../../../context/resume-context'
import { useRouter } from 'next/navigation';
import { CurrentPosition } from "@/components/ui/current-position";

export default function Skills() {


    const { push, back } = useRouter();

    const { data, updateData } = useContext(DataContext);
    const [formData, setFormData] = useState(data['skills'] == null ? [{ skillName: '', skillValue: '' }] : data['skills']);

    const addInput = () => {
        const data = { skillName: '', skillValue: '' }
        setFormData([...formData, data]);
    };

    const finish = () => {
        console.log("skills")
        updateData('skills', formData)
        console.log(JSON.stringify(data))
        push('/resume-bldr/review')

    }


    return (
        <>
            {/* <Navbar /> */}
            <CurrentPosition value={"tech stack"} />
            <h1 className='text-lg lg:text-4xl text-center text-white'>Skills</h1>


            <div className='md:text-xl text-sm text-center text-white'>
                <p>If you don&apos;t want this section you can delete it</p>
            </div>

            <div className='py-[4%]'>
                {formData.map((value: any, index: any) => (
                    <div key={index}>
                        <SkillsInput value={value} index={index} formData={formData} setFormData={setFormData} />
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

            <div className='flex justify-between mx-[20%]'>
                <button type="button" onClick={() => { back() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
                <button type="button" onClick={() => { finish() }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Finish</button>
            </div>

        </>
    )
}

const SkillsInput = ({ value, formData, setFormData, index }: { value: any, formData: any, setFormData: any, index: any }) => {

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
                    <label className="block mb-2 text-sm font-medium text-white">Skill</label>
                    <input type="text" name="skillName" placeholder='language' value={value.skillName} onChange={(e) => { handleFormChange(index, e) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white">Skill value</label>
                    <input type="text" name="skillValue" placeholder='c++,java,docker' value={value.skillValue} onChange={(e) => { handleFormChange(index, e) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>
        </div>
    )

}