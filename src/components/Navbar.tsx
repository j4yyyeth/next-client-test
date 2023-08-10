import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-blue-500 text-lg font-semibold">
              {/* <img src="Evalarion.png" alt="logo" height={130} width={130}/> */}
              Evalarion
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-blue-500">
                About
              </Link>
              <Link href="/feedback-rounds" className="text-white hover:text-blue-500">
                Feedback Rounds
              </Link>
              <Link href="/signin" className="text-white hover:text-blue-500">
                Sign In --{'>'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
