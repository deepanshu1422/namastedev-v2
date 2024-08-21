"use client"
import React, { useState, useContext, useRef } from "react";
import { DataContext } from '../../../context/resume-context'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const BASE_URL = "https://octopus-app-o2znv.ondigitalocean.app"

export default function Review() {

    const { data, updateData } = useContext(DataContext);

    return (
        <>
            <div>
                {/* <ToastContainer /> */}
                {/* navBar */}
                {/* <Navbar /> */}
                <p className='text-white text-md md:text-2xl text-center'>Review your Details</p>
                {/* You can open the modal using ID.showModal() method */}

                <div className='flex justify-center md:justify-between mx-[20%]'>
                    <DownloadModal data={data} />
                </div>


                <div className='xl:mx-[20%] md:mx-[10%] mx-[4%] h-[90%]'>
                    {/* personal detail */}
                    <div className='text-white'>
                        <h2 className='text-center text-2xl'>Personal Details</h2>
                        {
                            data["personalDetail"] == null ?
                                <h2 className='text-center text-sm lg:text-2xl'>EMPTY</h2>
                                :
                                <PersonalDetailSection data={data["personalDetail"]} />
                        }
                    </div>
                    <hr className="border border-gray-300 my-4 " />
                    {/* education */}
                    <div className='text-white'>
                        <h2 className='text-center text-sm lg:text-2xl'>Education</h2>
                        {
                            data["education"] == null ?
                                <h2 className='text-center text-sm lg:text-2xl'>EMPTY</h2>
                                :
                                <EducationSection data={data["education"]} />
                        }
                    </div>

                    <hr className="border border-gray-300 my-4 " />

                    {/* experience */}
                    <div className='text-white'>
                        <h2 className='text-center text-sm lg:text-2xl'>Experience</h2>
                        {
                            data["experience"] == null ?
                                <h2 className='text-center text-2xl'>EMPTY</h2>
                                :
                                <ExperienceSection data={data["experience"]} />
                        }
                    </div>

                    <hr className="border border-gray-300 my-4 " />
                    {/* Projects */}
                    <div className='text-white'>
                        <h2 className='text-center text-sm lg:text-2xl'>Projects</h2>
                        {
                            data["projects"] == null ?
                                <h2 className='text-center text-2xl'>EMPTY</h2>
                                :
                                <ProjectSection data={data["projects"]} />
                        }
                    </div>

                    <hr className="border border-gray-300 my-4 " />
                    {/* Achievement */}
                    <div className='text-white'>
                        <h2 className='text-center text-sm lg:text-2xl'>Achievement</h2>
                        {
                            data["projects"] == null ?
                                <h2 className='text-center text-2xl'>EMPTY</h2>
                                :
                                <AchievementSection data={data["achievements"]} />
                        }
                    </div>

                    <hr className="border border-gray-300 my-4 " />
                    {/* Skills*/}
                    <div className='text-white'>
                        <h2 className='text-center text-sm lg:text-2xl'>Skills</h2>
                        {
                            data["projects"] == null ?
                                <h2 className='text-center text-2xl'>EMPTY</h2>
                                :
                                <SkillsSection data={data["skills"]} />
                        }
                    </div>

                    <div className='h-20'>

                    </div>

                </div>

            </div>
        </>
    )
}

const DownloadModal = ({ data }: { data: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false)
    const [pdfId, setPdfId] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const linkRef = useRef<HTMLAnchorElement>(null);


    const initiateProcess = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/createpdf`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });


            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const response = await res.json();
            console.log(response)

            if (response?.data?.status == 'failure') {
                console.log(response?.msg)
                // toast(response?.data?.msg)
                return
            }
            setPdfId(response?.id)
            setIsOpen(true)

        } catch (error) {
            console.log(error)
        }
    }

    const closeModal = () => {
        setIsOpen(false);
        // setEmail('');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("pdf is being downloaded")

        // if(!isValidEmail(email)){
        //     // console.log('eee')
        //     setIsError('invalid input')
        //     return
        // }

        setIsLoading(true)
        // await axios.post(`${BASE_URL}/api/setemail`, { pdfId, data })
        linkRef.current?.click();
        setIsOpen(false)
        setPdfId('')
        setIsError(false)
        setIsLoading(false)
    };

    return (
        <>
            <Button
                onClick={initiateProcess}
            >Download</Button>
            {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={initiateProcess}
            >
                Download
            </button> */}

            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <div className="bg-bg rounded-lg overflow-hidden shadow-xl transform transition-all max-w-sm w-full">
                            <div className="bg-bg px-4 py-5 h-[100%]">
                                <div className="mt-3 text-center h-full">
                                    <h3 className="text-lg leading-6 font-medium text-white">Download your resume</h3>
                                    <div className="mt-5">
                                        <form>
                                            <div className="mt-2 flex justify-evenly">
                                                {
                                                    isOpen ?
                                                        <a href={`${BASE_URL}/api/getpdf?id=${pdfId}`} ref={linkRef} style={{ display: 'none' }}>Hidden Link</a>
                                                        :
                                                        <></>
                                                }
                                                {
                                                    isLoading ?
                                                        <Button
                                                        > Loading...
                                                        </Button>
                                                        :
                                                        <Button
                                                            onClick={handleSubmit}
                                                        > Download
                                                        </Button>
                                                }

                                                <Button
                                                    onClick={closeModal}
                                                    variant={'outline'}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const SkillsSection = ({ data }: { data: any }) => {
    // {skillName:'',skillValue:''}
    return (
        <>
            <div className="text-white">
                {data?.map((val: any, index: any) => (
                    <div key={index} className=" bg-green-800 rounded-md my-2 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                            <p className="text-sm md:text-md">
                                <span>{val?.skillName}:</span> <span>{val?.skillValue}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}


const AchievementSection = ({ data }: { data: any }) => {
    // {name:'',points:['']}
    return (
        <>
            <div className="text-white">
                {data?.map((val: any, index: any) => (
                    <div key={index} className="bg-green-800 rounded-md my-2 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                            <p className="text-sm md:text-md">
                                <span>Company:</span> <span>{val?.name}</span>
                            </p>
                            <div className="text-sm md:text-md col-span-2">
                                <span>Points:</span>
                                <div className="ml-4">
                                    {val['points']?.map((point: any, pointIndex: any) => (
                                        <p key={pointIndex}>{point}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}


const ExperienceSection = ({ data }: { data: any }) => {
    // {company:'',role:'',location:'',date:'',points:['']}

    return (
        <>
            <div className="text-white">
                {data?.map((val: any, index: any) => (
                    <div key={index} className="bg-green-800 rounded-md my-2 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                            <p className="text-sm md:text-md">
                                <span>Company:</span> <span>{val?.company}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Role:</span> <span>{val?.role}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Location:</span> <span>{val?.location}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Date:</span> <span>{val?.date}</span>
                            </p>
                            <div className="text-sm md:text-md col-span-2">
                                <span>Points:</span>
                                <div className="ml-4">
                                    {val['points']?.map((point: any, pointIndex: any) => (
                                        <p key={pointIndex}>{point}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}


const ProjectSection = ({ data }: { data: any }) => {

    return (
        <>
            <div className="text-white">
                {data?.map((val: any, index: any) => (
                    <div key={index} className="bg-green-800 rounded-md my-2 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                            <p className="text-sm md:text-md">
                                <span>Project Name:</span> <span>{val?.projectName}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Tech:</span> <span>{val?.tech}</span>
                            </p>
                            <p className="text-sm md:text-md col-span-2">
                                <span>Link:</span> <span>{val?.link}</span>
                            </p>
                            <div className="text-sm md:text-md col-span-2">
                                <span>Points:</span>
                                <div className="ml-4">
                                    {val['points']?.map((point: any, pointIndex: any) => (
                                        <p key={pointIndex}>{point}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );


}

const EducationSection = ({ data }: { data: any }) => {


    // {cllgName:'',course:'',location:'',year:''}
    return (
        <>
            <div className="text-white">
                {data?.map((val: any, index: any) => (
                    <div className="bg-green-800 rounded-md my-2 p-4" key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                            <p className="text-sm md:text-md">
                                <span>College Name:</span> <span>{val?.cllgName}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Course:</span> <span>{val?.course}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Location:</span> <span>{val?.location}</span>
                            </p>
                            <p className="text-sm md:text-md">
                                <span>Year:</span> <span>{val?.year}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}
const PersonalDetailSection = ({ data }: { data: any }) => {


    return (
        <div className="bg-green-800 rounded-md my-5 p-4">
            <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <p className="text-sm md:text-md">
                    <span className="font-semibold">First Name:</span> <span>{data?.firstName}</span>
                </p>
                <p className="text-sm md:text-md">
                    <span className="font-semibold">Last Name:</span> <span>{data?.lastName}</span>
                </p>
                <p className="text-sm md:text-md">
                    <span className="font-semibold">Email:</span> <span>{data?.email}</span>
                </p>
                <p className="text-sm md:text-md">
                    <span className="font-semibold">Phone Number:</span> <span>{data?.phoneNo}</span>
                </p>
                <p className="text-sm md:text-md">
                    <span className="font-semibold">Github:</span> <span>{data?.github}</span>
                </p>
                <p className="text-sm md:text-md">
                    <span className="font-semibold">LinkedIn:</span> <span>{data?.linkedin}</span>
                </p>
            </div>
        </div>
    );

}