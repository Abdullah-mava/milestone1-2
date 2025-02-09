import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Header */}
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-gray-800 leading-tight">
          The CV that gets the job... done
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          Build a new CV or improve your existing one with expert guidance.
        </p>
        <p className="text-lg text-gray-500 mt-2">
          If a sheet of paper represents your work life, personality, and skills, it better be
          outstanding — Let our builder do the heavy lifting.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <Link href="/create-cv">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg transition-all duration-300">
            Create your CV
          </button>
        </Link>
      </div>
    </div>
  );
}
