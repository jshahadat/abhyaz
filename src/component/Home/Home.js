import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import headerImg from '../../asset/h1200x6001600x600.jpg'
import Contact from '../Contact/Contact';
import About from '../About/About';
import Applyer from '../Aplyer/Applyer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <img src={headerImg} alt="" />
            </div>

            {/* <div class="relative w-full max-w-lg">
                <div class="absolute lg:top-96 top-0 lg:left-2 left-1 lg:w-72 w-72 lg:h-72 h-60  bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute lg:top-0 lg:left-80 left-32 w-72  lg:h-72 h-60 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                <div class="absolute lg:-bottom-8 lg:left-40 top-56 left-20 w-72 lg:h-72 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div class="relative space-y-2">

                    <div className=' '>
                        <div>

                        </div>

                        <div className='flex mt-10 justify-center items-center lg:pl-96'>

                        </div>

                    </div>
                </div>
            </div> */}
            <Applyer></Applyer>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;