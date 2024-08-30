"use client"
import React, { useState, useContext } from "react";
import { DataContext } from '../../../context/resume-context'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CurrentPosition } from "@/components/ui/current-position";
import { Input } from "@/components/ui/input";

export default function PersonalDetail() {

    const { push } = useRouter();
    const { data, updateData } = useContext(DataContext);
    const [isEmailEmpty, setisEmailEmpty] = useState(false)
    const [isPhoneEmpty, setisPhoneEmpty] = useState(false)



    const [formData, setFormData] = useState(data['personalDetail'] == null ? { firstName: '', lastName: '', email: '', phoneNo: '', github: '', linkedin: '' } : data['personalDetail']);

    const nextPage = () => {
        // console.log("sjsj")
        if (formData.email.trim().length <= 0 || formData.phoneNo.trim().length <= 0) {
            formData.email.trim().length <= 0 ? setisEmailEmpty(true) : setisEmailEmpty(false)
            formData.phoneNo.trim().length <= 0 ? setisPhoneEmpty(true) : setisPhoneEmpty(false)
            return
        }

        updateData('personalDetail', formData)
        push('/resume/education');

        setisEmailEmpty(false)
        setisPhoneEmpty(false)
    }

    return (
        <>
            <CurrentPosition value={"personal details"} url={'/resume/personal-detail'} />
            <h1 className='text-lg lg:text-4xl text-center text-white'>Personal Details</h1>
            <PersonalDetailInput formData={formData} setFormData={setFormData} showEmailError={isEmailEmpty} showPhoneError={isPhoneEmpty} />
            <div className='flex justify-center mx-[10%] xl:mx-[20%] mb-[10%]'>
                <Button
                    onClick={nextPage}
                    className={cn("font-medium rounded-lg text-lg w-[100%] px-5 py-2.5 text-center")}
                >Next</Button>
                {/* <button onClick={nextPage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-[100%] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}
            </div>
        </>
    )
}

const PersonalDetailInput = ({ formData, setFormData, showEmailError, showPhoneError }: { formData: any, setFormData: any, showEmailError: any, showPhoneError: any }) => {



    const handleFormChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    }


    return (
        <div className='py-[2%]'>
            <div className='xl:mx-[20%] mx-[10%]'>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">First name</label>
                        <input type="text" id="first_name" value={formData.firstName} onChange={(e) => { handleFormChange(e) }} name='firstName' className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" placeholder="John" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Last name</label>
                        <input type="text" id="last_name" value={formData.lastName} onChange={(e) => { handleFormChange(e) }} name='lastName' className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" placeholder="Doe" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Email address</label>
                        <input type="email" id="email" value={formData.email} onChange={(e) => { handleFormChange(e) }} name='email' className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" placeholder="john.doe@company.com" required />
                        {
                            showEmailError ?
                                <p className=' text-red-600 text-md pl-2'>
                                    required
                                </p>
                                :
                                <></>
                        }
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Phone number</label>
                        <input type="tel" id="phone" value={formData.phoneNo} onChange={(e) => { handleFormChange(e) }} name='phoneNo' className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" placeholder="+91 012-345-6789" required />
                        {
                            showPhoneError ?
                                <p className=' text-red-600 text-md pl-2'>
                                    required
                                </p>
                                :
                                <></>
                        }
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Github URL</label>
                        <input type="url" id="github" value={formData.github} onChange={(e) => { handleFormChange(e) }} name='github' className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" placeholder="github.com/id" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Linkedin URL</label>
                        <input type="url" id="linkedin" value={formData.linkedin} onChange={(e) => { handleFormChange(e) }} name='linkedin' className="flex h-10 rounded-md border border-prime/40 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 phone:p-6 w-full appearance-none bg-background phone:pl-9 pl-9 shadow-none" placeholder="linkedin.com/id" required />
                    </div>
                </div>
            </div>

        </div>
    )

}

