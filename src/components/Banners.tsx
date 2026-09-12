import BannerImg from '../assets/banner-stack.png'
const Banners = () => {
    return (
        <section className='w-full bg-white py-16 md:py-24'>
                <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/* left content column */}
                    <div className='flex flex-col items-start space-y-6'>
                        {/* main title card with gradient */}
                        <h1 className='text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight'>
                            Build your ideal <br />
                            <span className='bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span>
                        </h1>
                        {/* subtitle/paragraph */}
                        <p className='text-gray-600 text-base md:text-lg max-w-lg leading-relaxed'>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.        
                        </p>
                        {/* action Buttons */}
                        <div className='flex flex-wrap items-center gap-4 pt-2'>
                            <button className='bg-linear-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md'>Explore Techonologies</button>
                            <button className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg'>Learn More</button>
                        </div>
                    </div>
                    {/* right image column */} 
                    <div>
                        <img src={BannerImg} alt="" className='w-full max-w-md object-contain drop-shadow-xl'/>
                    </div>
                </div>
            </section>     
    );
};

export default Banners;