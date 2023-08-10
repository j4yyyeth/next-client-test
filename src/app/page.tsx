import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Evalarion!</h1>
      <Link href="/signup" className="text-black">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
