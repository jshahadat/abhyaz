import React from 'react';
import Img1 from '../../asset/ab-1.png'
import Img2 from '../../asset/ab-2.png'
import Img3 from '../../asset/ab-3.png'
import Img4 from '../../asset/ab-4.png'

const About = () => {
    return (
        <div>
            <div className='text-center h-16 pt-3 bg-lime-300'>
                <h1 className='font-extrabold text-3xl text-center'>About Us</h1>
            </div>

            <div className='lg:flex lg:justify-around mt-10 mb-10 lg:ml-0 ml-16'>
                <div>
                    <div class="card w-72 h-96 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10 ">
                            <div class="avatar">
                                <div class="w-24 rounded-full border">
                                    <img src={Img1} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-bold text-2xl'>Build and Operate</h1>
                            <p>Create and run hybrid training facilities, manufacturing centers of excellence with full project management, including engineering procurement contracts (EPC).</p>

                        </div>
                    </div>

                </div>
                <div>

                    <div class="card w-72 h-96 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div class="avatar">
                                <div class="w-24 rounded-full border">
                                    <img src={Img2} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-bold text-2xl'>Delivering and Executing</h1>
                            <p>Supplying and carrying out industrial electives for elite educational facilities.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="card w-72 h-96 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div class="avatar">
                                <div class="w-24 rounded-full border">
                                    <img src={Img3} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-bold text-2xl'>Offer Remote</h1>
                            <p>Provide remote internships for students, job seekers, and professionals seeking return employment.</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="card w-72 h-96 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div class="avatar">
                                <div class="w-24 rounded-full border">
                                    <img src={Img4} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h1 className='text-bold text-2xl'>Providing Projects</h1>
                            <p>supplying UG, PG, and Ph.D. students with projects for their academic and research submissions.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;