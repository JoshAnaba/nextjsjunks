import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>
          <Image src="/circooles.png" width={40} height={40} alt=''/>
        </h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
    </nav>
  )
}

export default Navbar
