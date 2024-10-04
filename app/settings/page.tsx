"use client"

import { useState } from 'react'
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsScreen() {
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [difficulty, setDifficulty] = useState("medium")

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled)
    // Add logic to actually enable/disable sound
  }

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value)
    // Add logic to change game difficulty
  }

  const handleBackToMenu = () => {
    console.log("Returning to main menu")
    // Add logic to navigate back to the main menu
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label htmlFor="sound-toggle" className="text-lg font-medium flex items-center">
              {soundEnabled ? <Volume2 className="mr-2" /> : <VolumeX className="mr-2" />}
              Sound Effects
            </label>
            <Switch
              id="sound-toggle"
              checked={soundEnabled}
              onCheckedChange={handleSoundToggle}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="difficulty-select" className="text-lg font-medium">
              Difficulty Level
            </label>
            <Select value={difficulty} onValueChange={handleDifficultyChange}>
              <SelectTrigger id="difficulty-select">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleBackToMenu}
            className="flex items-center justify-center px-4 py-2"
          >
            <ArrowLeft className="mr-2" />
            Back to Menu
          </Button>
        </div>
      </div>
    </div>
  )
}