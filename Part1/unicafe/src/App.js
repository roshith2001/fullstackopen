import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.symbol}</td>
      </tr>
    </>
  )
}

const Statistics = ({good,neutral,bad}) => {

  const sum = good + neutral + bad
  const avg = ((good*1) + (neutral*0) + (bad*-1))/sum
  const positive = (good/sum)*100

 if(sum !== 0)
 return(
  <>
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={sum} />
        <StatisticLine text='average' value={avg} />
        <StatisticLine text='positive' value={positive} symbol='%'/>
      </tbody>
    </table>
  </>
)
return <p>No feedback given</p>
}

const Button = (props) => {
  return(
    <button onClick={props.action}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <br />
      <div>
        <Button text = "good" action={handleGood} />
        <Button text = "neutral" action={handleNeutral} />
        <Button text = "bad" action={handleBad} />
      </div>
      <br />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App