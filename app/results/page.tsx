'use client'
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react'

// Mock data for demonstration
const quizResults = {
  totalQuestions: 10,
  score: 7,
  correctAnswers: [
    { question: "Which F1 driver has won the most World Championships?", answer: "Lewis Hamilton" },
    { question: "What is the name of Ferrari's F1 team?", answer: "Scuderia Ferrari" },
    { question: "In which year did F1 introduce hybrid engines?", answer: "2014" },
  ],
  incorrectAnswers: [
    { 
      question: "Who won the first F1 World Championship?", 
      userAnswer: "Juan Manuel Fangio", 
      correctAnswer: "Giuseppe Farina",
      feedback: "Giuseppe Farina won the inaugural F1 World Championship in 1950."
    },
    { 
      question: "What is the fastest pit stop time recorded in F1?", 
      userAnswer: "2.4 seconds", 
      correctAnswer: "1.82 seconds",
      feedback: "The fastest pit stop was performed by Red Bull for Max Verstappen at the 2019 Brazilian Grand Prix."
    },
  ]
}

export default function ResultsScreen() {
  const handlePlayAgain = () => {
    console.log("Starting a new game")
    // Add logic to restart the game
  }

  const handleBackToMenu = () => {
    console.log("Returning to main menu")
    // Add logic to navigate back to the main menu
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">Quiz Results</h1>
        
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-600">{quizResults.score} / {quizResults.totalQuestions}</p>
          <p className="text-xl mt-2">Final Score</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Correct Answers
          </h2>
          <ul className="space-y-2">
            {quizResults.correctAnswers.map((item, index) => (
              <li key={index} className="bg-green-100 p-3 rounded-md">
                <p className="font-medium">{item.question}</p>
                <p className="text-green-700">Answer: {item.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center">
            <XCircle className="text-red-500 mr-2" />
            Incorrect Answers
          </h2>
          <ul className="space-y-4">
            {quizResults.incorrectAnswers.map((item, index) => (
              <li key={index} className="bg-red-100 p-3 rounded-md">
                <p className="font-medium">{item.question}</p>
                <p className="text-red-700">Your answer: {item.userAnswer}</p>
                <p className="text-green-700">Correct answer: {item.correctAnswer}</p>
                <p className="text-gray-600 mt-1">{item.feedback}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={handlePlayAgain}
            className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <RotateCcw className="mr-2" />
            Play Again
          </button>
          <button
            onClick={handleBackToMenu}
            className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            <Home className="mr-2" />
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  )
}