import { ArrowLeft, Trophy } from 'lucide-react'
/* import { Button } from "@/components/ui/button" */

// Mock data for the leaderboard
const leaderboardData = [
  { rank: 1, name: "Lewis H.", score: 1000 },
  { rank: 2, name: "Max V.", score: 950 },
  { rank: 3, name: "Charles L.", score: 900 },
  { rank: 4, name: "Lando N.", score: 850 },
  { rank: 5, name: "George R.", score: 800 },
  { rank: 6, name: "Carlos S.", score: 750 },
  { rank: 7, name: "Fernando A.", score: 700 },
  { rank: 8, name: "Sergio P.", score: 650 },
  { rank: 9, name: "Pierre G.", score: 600 },
  { rank: 10, name: "Esteban O.", score: 550 },
]

export default function LeaderboardScreen() {
  const handleBackToMenu = () => {
    console.log("Returning to main menu")
    // Add logic to navigate back to the main menu
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          <Trophy className="mr-2 text-yellow-500" />
          Leaderboard
        </h1>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Rank</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player) => (
                <tr key={player.rank} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-2">
                    {player.rank === 1 && <span className="text-yellow-500">🥇</span>}
                    {player.rank === 2 && <span className="text-gray-400">🥈</span>}
                    {player.rank === 3 && <span className="text-orange-600">🥉</span>}
                    {player.rank > 3 && player.rank}
                  </td>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2 text-right">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            /* onClick={handleBackToMenu} */
            className="flex items-center justify-center px-4 py-2"
          >
            <ArrowLeft className="mr-2" />
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  )
}