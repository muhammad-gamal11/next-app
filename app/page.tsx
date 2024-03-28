import Link from "next/link";
const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-4xl">Hello World !</p>
      <Link
        href="about"
        className="bg-teal-600 p-2 rounded-xl hover:bg-teal-500"
      >
        About
      </Link>
    </main>
  );
};
export default Home;
