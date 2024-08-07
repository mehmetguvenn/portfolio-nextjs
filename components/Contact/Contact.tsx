'use client'

import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import { Linkedin } from 'lucide-react'
import { headers } from 'next/headers'
import React, { useState } from 'react'
import { BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs'
import { CgOptions } from 'react-icons/cg'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"



const Contact = () => {
    const [emailSubmited, setEmailSubmitted] = useState(false);

    const handleSubmit = async(e: any)=>{
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        const JsonData = JSON.stringify(data);
        const endpoint = "/api/send"

        const option = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },

            body: JsonData,
        }

        const response = await fetch(endpoint,option);
        const resData = await response.json();

        if (response.status ===200) {
            console.log("Message Success")
            setEmailSubmitted(true);
        }
    }


  return (
    <section id="contact">
        <div className='grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24'>
            
            <div className='col-span-1'>
                <h5 className='text-mycolor-100 font-semibold mb-4 text-2xl'>Lest Connect</h5>
                <p className='text-base text-white '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur vero libero ipsum quibusdam deleniti, totam error sequi omnis, 
                    eaque saepe officiis repellendus dolor, nisi nesciunt explicabo exercitationem 
                    aspernatur rerum fugit reprehenderit praesentium labore quae nihil placeat! 
                    Quia error laborum, fuga sit, nam aliquam praesentium sed quos culpa harum voluptate 
                    tempore?
                </p>

                <div className='flex flex-row gap-4 mt-5'>
                    <BsGithub className='h-10 w-10 text-white' />
                    <BsLinkedin className='h-10 w-10 text-white' />
                    <BsGoogle className='h-10 w-10 text-white' />
                </div>

            </div>

            <div className='col-span-1'>
                {emailSubmited ? (
                    <Alert className="bg-green-600 text-white">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                    You can add components to your app using the cli.
                    </AlertDescription>
                    </Alert>

                ):
                (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6 text-white">
                            <Label>Your Email</Label>
                            <Input type="email" name="email" placeholder="Email" required  
                            className="bg-mycolor-600 mt-2"/>
                        </div>

                        <div className="mb-6 text-white">
                            <Label>Subject</Label>
                            <Input type="text" name="subject" placeholder="Subject" required  
                            className="bg-mycolor-600 mt-2"/>
                        </div>

                        <div className="mb-6 text-white">
                            <Label>Message</Label>
                            <Textarea name="message" className="bg-mycolor-600 mt-2" placeholder="Type your message here." required />
                        </div>

                        <Button type="submit" className="bg-green-400">
                            Send Message
                        </Button>

                    </form>
                )}


            </div>
        </div>
    </section>
  )
}

export default Contact