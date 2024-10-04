// app/page.tsx
import Link from 'next/link';

const MainMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-800 text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Pit-Stop
      </h1>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <Link href="/quiz" passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
            Start Game
          </button>
        </Link>
        <Link href="/leaderboard" passHref>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
            Leaderboard
          </button>
        </Link>
        <Link href="/settings" passHref>
          <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
            Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;