import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";
import { verifyHeaderSignatureClerk } from '@/util/userUtils';

export async function POST(req: NextRequest) {
    try {
        const headersList = headers();
        const header_sig = headersList.get("x-30dc-signature");

        const body = await req.json()
        console.log(body)


        let isValidSignature = verifyHeaderSignatureClerk(body, header_sig!, "password");

        if (!isValidSignature) {
            return NextResponse.json({ error: true, message: 'invalid signature' }, { status: 200 })
        }


        const { first_name, email_address, phone_number } = body;

        if (!first_name || !email_address || !phone_number) {
            return NextResponse.json({ error: true, message: 'invalid data' }, { status: 200 })
        }

        let raw = {
            "first_name": first_name,
            "email_address": [email_address],
            "phone_number": [phone_number],
            "web3_wallet": [],
            "skip_password_checks": true,
            "skip_password_requirement": true,
            "backup_codes": [],
            "public_metadata": {},
            "private_metadata": {},
            "unsafe_metadata": {}
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer sk_test_cEq8fe7gTuMeYBYulBx2jQlzGpWDRGLEBuNkZEboQ8");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(raw),
        };

        let res = await fetch("https://api.clerk.com/v1/users", requestOptions)
        let resData = await res.json()

        console.log(resData)
        if (resData?.errors || resData?.id === undefined) {
            return NextResponse.json({ error: true, message: resData?.errors }, { status: 200 })
        }

        let userData = {
            userId: resData.id,
            email: email_address,
            name: first_name,
            contact: phone_number,
        }

        return NextResponse.json({ error: false, data: userData }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: true, message: "could not create the user" }, { status: 200 })
    }
    // let {data,error}  = verifySignatureSvix(JSON.stringify(body),headerPayload);
    // if(error){
    //     return new Response('invalid signature', { status: 200 })
    // }

}