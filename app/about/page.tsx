import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <p>About</p>
      <Link href="/">
        <button className="bg-teal-500 p-2 text-white ml-2 rounded-lg">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default About;
