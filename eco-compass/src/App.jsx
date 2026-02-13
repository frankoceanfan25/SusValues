import { useState } from 'react'

const questions = [
  {
    text: "Economic growth should be limited to protect ecosystems.",
    weights: { x: 1.2, y: 0.3 }
  },
  {
    text: "Individuals matter more than governments in fighting climate change.",
    weights: { x: -0.3, y: -1.1 }
  }
]

export default function App() {
  const [i, setI] = useState(0)
  const [score, setScore] = useState({ x: 0, y: 0 })

  const answer = (v) => {
    const q = questions[i]
    setScore({
      x: score.x + v * q.weights.x,
      y: score.y + v * q.weights.y,
    })
    setI(i + 1)
  }

  if (i >= questions.length) {
    return (
      <div>
        <h1>Your Sustainability Compass</h1>
        <p>X (Sustainability): {score.x.toFixed(2)}</p>
        <p>Y (Systemic vs Individual): {score.y.toFixed(2)}</p>
      </div>
    )
  }

  return (
    <div>
      <h2>{questions[i].text}</h2>
      <button onClick={() => answer(-2)}>Strongly Disagree</button>
      <button onClick={() => answer(-1)}>Disagree</button>
      <button onClick={() => answer(0)}>Neutral</button>
      <button onClick={() => answer(1)}>Agree</button>
      <button onClick={() => answer(2)}>Strongly Agree</button>
    </div>
  )
}
