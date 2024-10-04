/* import { Button } from "@/components/ui/button" */
'use client'
import { Flag, Settings, Trophy, X } from "lucide-react"
import Link from "next/link"

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800 flex flex-col items-center justify-center p-4 text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">PIT-STOP</h1>
          <p className="text-xl md:text-2xl font-semibold">The Ultimate F1 Quiz Game</p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href={"/quiz"}
            className="w-full py-6 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black"
            onClick={() => console.log("Start Game")}
          >
            <Flag className="mr-2 h-6 w-6" /> Start Game
          </Link>
          
          <button 
           /*  variant="outline"  */
            className="w-full py-6 text-lg font-bold border-white text-white hover:bg-white/10"
            onClick={() => console.log("Settings")}
          >
            <Settings className="mr-2 h-6 w-6" /> Settings
          </button>
          
          <button 
            /* variant="outline"  */
            className="w-full py-6 text-lg font-bold border-white text-white hover:bg-white/10"
            onClick={() => console.log("Leaderboard")}
          >
            <Trophy className="mr-2 h-6 w-6" /> Leaderboard
          </button>
          
          <button 
            /* variant="outline"  */
            className="w-full py-6 text-lg font-bold border-white text-white hover:bg-white/10"
            onClick={() => console.log("Exit")}
          >
            <X className="mr-2 h-6 w-6" /> Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main