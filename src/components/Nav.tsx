
import Logo from'../assets/logo-text.png'


const Nav = () => {
    return (
        <header className='w-full border-b border-b-gray-100 bg-white sticky top-0 z-50'>
            <div className='flex justify-between items-center max-w-7xl mx-auto px-6 h-20'>
                {/* logo section */}
                <div className='flex items-center gap-2'>
          
                    <img src={Logo} alt="" className='h-10 object-contain cursor-pointer'/>
    
                </div>
                {/* navigation link */}
                <nav className='flex items-center gap-8 font-medium text-sm text-gray-600'>
                    <a href="" className='text-pink-600'>Home</a>
                    <a href="">Techonologies</a>
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
                {/* action button */}
                <div className='flex items-center gap-4'>
                    <button className='text-sm font-semibold text-gray-700 cursor-pointer'>Sign In</button>
                <button className='bg-pink-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Nav;