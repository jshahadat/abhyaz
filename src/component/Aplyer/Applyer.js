import React from 'react';
import img1 from '../../asset/apply-1.png'
import img2 from '../../asset/apply-2.png'
import img3 from '../../asset/apply-3.png'

const Applyer = () => {
    return (
        <div>
            <div className='text-center mt-10 h-16 pt-3 bg-lime-300'>
                <h1 className='font-extrabold text-3xl text-center'>Who may apply?</h1>
            </div>

            <div className='lg:flex justify-around mt-10 mb-10 lg:ml-0 ml-6'>
                <div>
                    <div class="card lg:w-96 w-80 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10 ">
                            <img src={img1} alt="" class="rounded-xl border" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p>Students seeking a master's degree</p>

                        </div>
                    </div>

                </div>
                <div>

                    <div class="card lg:w-96 w-80 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={img2} alt="" class="rounded-xl border" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p>Astudent project team and a faculty advisor</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="card lg:w-96 w-80 bg-base-50 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={img3} alt="Shoes" class="rounded-xl border" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Applyer;