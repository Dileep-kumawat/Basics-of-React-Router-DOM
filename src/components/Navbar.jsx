import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-500 py-4 px-8 w-full flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Dileep Kumawat</h2>
            <div className='flex gap-6 cursor-pointer *:text-lg font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar
