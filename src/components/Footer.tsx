import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className='bg-white border-t-2 mt-20 pt-20 pb-16'>
            <div className=' grid grid-cols-1  max-w-7xl mx-auto px-6 md:grid-cols-12 gap-8 items-start '>
                {/* left section  */}
                <div className='md:col-span-7 space-y-6'>
                    {/* brand logo */}
                    <div>
                        <img src={Logo} alt="" className='h-8 object-contain' />
                    </div>
                    {/* taglines */}
                    <p className='text-sm text-gray-500 leading-relaxed max-w-sm'>
Curated tools, technologies, and resources for developers building
modern software.
                    </p>
                    {/* social links */}
                    <div className='flex items-center gap-6 pt-2 text-sm font-semibold text-gray-700'>
                        <a href="">GitHub</a>
                        <a href="">Twitter</a>
                        <a href="">LinkedIn</a>
                    </div>
                </div>
                {/* right section */}
                <div className='md:col-span-5 grid grid-cols-2 gap-8'>
                    {/* product column */}
                    <div>
                        <h4 className='text-xs font-bold text-gray-900 mb-4'>PRODUCT</h4>
                        <ul className='space-y-3 text-sm text-gray-500 font-medium'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>
                    {/* company column.. */}
                    <div>
                        <h4 className='text-xs font-bold text-gray-900 mb-4'>COMPANY</h4>
                        <ul className='space-y-3 text-sm text-gray-500 font-medium'>
                            <li><a href="">About</a></li>
                            <li><a href="]">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;