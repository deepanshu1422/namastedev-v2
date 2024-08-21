"use client"
import React, { useState, useContext } from "react";
import { DataContext } from '../../../context/resume-context'
import { useRouter } from 'next/navigation';
import { CurrentPosition } from "@/components/ui/current-position";
import { Button } from "@/components/ui/button";

export default function Achievement() {


    const { push, back } = useRouter();

    const { data, updateData } = useContext(DataContext);

    const [formData, setFormData] = useState(data['achievements'] == null ? [{ name: '', points: ['', ''] }] : data['achievements']);

    const addInput = () => {
        const data = { name: '', points: [''] }
        setFormData([...formData, data]);
    };

    const nextPage = () => {
        // console.log("sjsj")
        console.log("achievement page")
        updateData('achievements', formData)
        push('/resume/skills')
    }


    return (
        <section className="container flex flex-col">
            {/* <Navbar /> */}
            <CurrentPosition value={"achievements"} url='/resume/achievement' />
            <h1 className=' text-lg lg:text-4xl text-center text-white'>Achievement</h1>


            <div className='md:text-xl text-sm text-center text-white'>
                <p>If you don&apos;t want this section you can delete it</p>
            </div>




            {formData.map((value: any, index: any) => (
                <div key={index}>
                    <AchievementInput value={value} index={index} formData={formData} setFormData={setFormData} />
                    {
                        formData.length - 1 != index ?
                            <hr className="border border-gray-300 my-4" />
                            :
                            <></>
                    }
                </div>
            ))}


            <div className="flex justify-end mb-3">
                <Button
                    onClick={addInput}
                >Add Field</Button>
            </div>

            <div className='flex justify-between  my-[1%]'>
                <div className="group relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r h-9 from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
                    <Button
                        variant={"outline"}
                        className={`font-semibold text-foreground/80 hover:text-foreground relative px-6`}
                        onClick={() => { back() }}
                    >
                        Prev
                    </Button>
                </div>
                <div className="group relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r h-9 from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
                    <Button
                        variant={"outline"}
                        className={`font-semibold text-foreground/80 hover:text-foreground relative px-6`}
                        onClick={() => { nextPage() }}
                    >
                        Next
                    </Button>
                </div>
            </div>

        </section>
    )
}

const AchievementInput = ({ value, formData, setFormData, index }: { value: any, formData: any, setFormData: any, index: any }) => {

    const handleFormChange = (index: any, event: any) => {
        let data = [...formData];
        data[index][event.target.name] = event.target.value;
        setFormData(data);
    }

    const handlePointChange = (event: any, pointIndex: any) => {
        let data = [...formData]
        data[index]['points'][pointIndex] = event.target.value
        setFormData(data)
    }

    const addPoint = () => {
        let data = [...formData]
        data[index]['points'] = [...data[index]['points'], '']
        setFormData(data)
    }

    const removeItem = (index: any) => {
        let data = [...formData];
        data.splice(index, 1)
        setFormData(data)
    }

    const removePoint = (pointIndex: any) => {
        let data = [...formData]
        data[index]['points'].splice(pointIndex, 1)
        setFormData(data)

    }

    return (
        <div >

            <div className='flex justify-end'>
                <button type="button" onClick={() => { removeItem(index) }} className="font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-4 py-2 rounded-md">Delete</button>
            </div>
            <div className="grid gap-3 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-white">Achievement</label>
                    <input type="text" name="name" placeholder='name' value={value.name} onChange={(e) => { handleFormChange(index, e) }} id="college_name" className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" required />
                </div>
                <div className='flex justify-end'>
                </div>
                <div className='flex justify-end'>
                </div>
                <div className='flex justify-end'>
                    <Button
                        onClick={addPoint}
                    >Add Description</Button>
                </div>
                {
                    value.points.map((value: any, pointIndex: any) => (
                        <div className='flex flex-row space-x-5 w-full items-end' key={pointIndex}>
                            <div className='w-[90%]'>
                                <label className="block mb-1 text-sm font-medium text-white">Achievement Description</label>
                                <input type="text" placeholder='Recognized for creating the most awesome project at a hackathon.' value={value} onChange={(e) => { handlePointChange(e, pointIndex) }} className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" required />
                            </div>
                            <button type="button" onClick={() => { removePoint(pointIndex) }} className="font-jakarta flex items-center font-semibold gap-1 border-white border transition-all px-4 py-2 rounded-md">Del</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )

}