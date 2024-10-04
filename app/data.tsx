export interface Question {
  /* id: number; */
  /* category: string; // e.g., "Drivers", "Teams" */
  question: string;
  options: string[]; // Answer options for multiple choice
  correctAnswer: string; // Correct answer
  type: 'multiple-choice' | 'true-false' | 'single-choice'; // Type of question
}
  
  // Questions Array
  export const driverQuestions: Question[] = [
    // Multiple Choice Questions
    {
      type: "multiple-choice",
      question: "Who holds the record for the most Formula 1 World Championships?",
      options: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"],
      correctAnswer: "Michael Schumacher"
    },
    {
      type: "multiple-choice",
      question: "Which driver won the 2021 Formula 1 World Championship?",
      options: ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Lando Norris"],
      correctAnswer: "Max Verstappen"
    },
    {
      type: "multiple-choice",
      question: "Which driver has the most race wins in a single season?",
      options: ["Michael Schumacher", "Sebastian Vettel", "Max Verstappen", "Lewis Hamilton"],
      correctAnswer: "Max Verstappen"
    },
    {
      type: "multiple-choice",
      question: "Who became the youngest driver to win a Formula 1 race?",
      options: ["Max Verstappen", "Sebastian Vettel", "Fernando Alonso", "Charles Leclerc"],
      correctAnswer: "Max Verstappen"
    },
    {
      type: "multiple-choice",
      question: "Who won the 1994 Formula 1 World Championship?",
      options: ["Ayrton Senna", "Damon Hill", "Michael Schumacher", "Mika Häkkinen"],
      correctAnswer: "Michael Schumacher"
    },
    {
      type: "multiple-choice",
      question: "Which driver has the most pole positions in F1 history?",
      options: ["Ayrton Senna", "Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel"],
      correctAnswer: "Lewis Hamilton"
    },
    {
      type: "multiple-choice",
      question: "Who won the 2016 Formula 1 World Championship?",
      options: ["Nico Rosberg", "Lewis Hamilton", "Sebastian Vettel", "Daniel Ricciardo"],
      correctAnswer: "Nico Rosberg"
    },
    {
      type: "multiple-choice",
      question: "Which driver earned his first World Championship in 2005?",
      options: ["Fernando Alonso", "Kimi Räikkönen", "Michael Schumacher", "Lewis Hamilton"],
      correctAnswer: "Fernando Alonso"
    },
    {
      type: "multiple-choice",
      question: "Which driver holds the record for most fastest laps in F1 history?",
      options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Kimi Räikkönen"],
      correctAnswer: "Michael Schumacher"
    },
    {
      type: "multiple-choice",
      question: "Which team did Ayrton Senna drive for when he won his first World Championship?",
      options: ["McLaren", "Lotus", "Williams", "Ferrari"],
      correctAnswer: "McLaren"
    },
  
    // True/False Questions
    {
      type: "true-false",
      question: "Lewis Hamilton has won more than 90 Grand Prix races.",
      correctAnswer: true
    },
    {
      type: "true-false",
      question: "Ayrton Senna won five Formula 1 World Championships.",
      correctAnswer: false
    },
    {
      type: "true-false",
      question: "Michael Schumacher retired from Formula 1 after the 2006 season.",
      correctAnswer: false
    },
    {
      type: "true-false",
      question: "Max Verstappen became the youngest driver in history to start an F1 race.",
      correctAnswer: true
    },
    {
      type: "true-false",
      question: "Kimi Räikkönen won his only World Championship in 2007.",
      correctAnswer: true
    },
    {
      type: "true-false",
      question: "Sebastian Vettel won four consecutive World Championships from 2010 to 2013.",
      correctAnswer: true
    },
    {
      type: "true-false",
      question: "Nigel Mansell won the 1992 Formula 1 World Championship.",
      correctAnswer: true
    },
    {
      type: "true-false",
      question: "Damon Hill won his first World Championship in 1995.",
      correctAnswer: false
    },
    {
      type: "true-false",
      question: "Lewis Hamilton won his first World Championship with Ferrari.",
      correctAnswer: false
    },
    {
      type: "true-false",
      question: "Jenson Button won the 2009 Formula 1 World Championship.",
      correctAnswer: true
    },
  
    // One Choice Questions
    {
      type: "one-choice",
      question: "Who was Ayrton Senna's fiercest rival in the late 1980s and early 1990s?",
      correctAnswer: "Alain Prost"
    },
    {
      type: "one-choice",
      question: "Which driver won the 2019 Formula 1 World Championship?",
      correctAnswer: "Lewis Hamilton"
    },
    {
      type: "one-choice",
      question: "Who holds the record for most consecutive F1 race wins?",
      correctAnswer: "Sebastian Vettel"
    },
    {
      type: "one-choice",
      question: "Which driver won the 2007 Formula 1 World Championship?",
      correctAnswer: "Kimi Räikkönen"
    },
    {
      type: "one-choice",
      question: "Which driver won the last Formula 1 race of 2020?",
      correctAnswer: "Max Verstappen"
    },
    {
      type: "one-choice",
      question: "Who won the 2010 Formula 1 World Championship?",
      correctAnswer: "Sebastian Vettel"
    },
    {
      type: "one-choice",
      question: "Which driver won the 2020 Turkish Grand Prix?",
      correctAnswer: "Lewis Hamilton"
    },
    {
      type: "one-choice",
      question: "Who won the 2008 Formula 1 World Championship?",
      correctAnswer: "Lewis Hamilton"
    },
    {
      type: "one-choice",
      question: "Which driver won the 2014 Formula 1 World Championship?",
      correctAnswer: "Lewis Hamilton"
    },
    {
      type: "one-choice",
      question: "Which driver has won races for both McLaren and Ferrari?",
      correctAnswer: "Fernando Alonso"
    }
  ];
  