import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/feedback'>Feedback</Link>
        <Link href='/signup'>Signup</Link>
        <Link href='/login'>Login</Link>
    </div>
  )
}

export default Navbar