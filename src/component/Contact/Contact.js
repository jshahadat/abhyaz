import React from 'react';

const Contact = () => {
    return (
        <div className='mt-16 mb-10'>

            <form>
                <section className="flex lg:mr-10 mr-5 ml-5 lg:ml-10 justify-center">
                    <div className=" flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                        <div className='flex justify-center'>
                            <div className="">
                                <h2 className="text-center font-bold text-2xl text-[#002D74] mb-4">Contact Us</h2>


                                <div className=' pb-6 lg:mr-6'>
                                    <h1 className='text xl text-bold text-lime-400'>Name:</h1>
                                    <input className="mt-5 p-2 lg:w-96  w-80  rounded-xl border" type="text" name="name"
                                        placeholder="Type Your Name" required />
                                </div>



                                <div className="relative pb-6 lg:mr-6">
                                    <h1 className='text xl text-bold text-lime-400'>Email:</h1>
                                    <input className="mt-5 lg:w-96  w-80 p-2 rounded-xl border" type="email" name="email" placeholder="ex@gmail.com" required />
                                </div>


                                <div className="relative pb-6">
                                    <h1 className='text xl text-bold text-lime-400'>Message:</h1>
                                    <input className="p-2 mt-5 h-28 lg:w-96  w-80 rounded-xl border" type="text" name="message" placeholder="Type Your Message" required />
                                </div>


                                <div >
                                    <div className=' '>
                                        <input className='btn bg-lime-300' type="submit" />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>



            </form>
        </div>

    );
};

export default Contact;