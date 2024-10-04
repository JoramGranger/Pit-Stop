"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

// Mock data for the quiz
const quizData = [
  {
    question: "Which F1 driver has won the most World Championships?",
    options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Juan Manuel Fangio"],
    correctAnswer: 0
  },
  {
    question: "What is the name of Ferrari's F1 team?",
    options: ["Prancing Horse", "Scuderia Ferrari", "Maranello Motorsport", "Rosso Corsa Racing"],
    correctAnswer: 1
  },
  // Add more questions as needed
]

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(30)
  const [quizEnded, setQuizEnded] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !quizEnded) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !quizEnded) {
      handleNextQuestion()
    }
  }, [timeLeft, quizEnded])

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index)
      if (index === quizData[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setTimeLeft(30)
    } else {
      setQuizEnded(true)
    }
  }

  const handleExit = () => {
    // Logic to return to main menu
    console.log("Exiting to main menu")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {!quizEnded ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-bold">Score: {score}</div>
              <div className="text-xl font-bold">Time: {timeLeft}s</div>
            </div>
            <h2 className="text-2xl font-bold mb-4">{quizData[currentQuestion].question}</h2>
            <div className="space-y-3">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full p-3 text-left rounded-md transition-colors ${
                    selectedAnswer === null
                      ? 'bg-gray-200 hover:bg-gray-300'
                      : index === quizData[currentQuestion].correctAnswer
                      ? 'bg-green-500 text-white'
                      : selectedAnswer === index
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200'
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleExit}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                <X className="inline-block mr-2" />
                Exit
              </button>
              <button
                onClick={handleNextQuestion}
                className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${
                  selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={selectedAnswer === null}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl mb-6">Your final score: {score} out of {quizData.length}</p>
            <Link
            href={"/"}
              /* onClick={handleExit} */
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Return to Main Menu
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}