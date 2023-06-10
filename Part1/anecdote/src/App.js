import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteArrayState, setVoteArrayState] = useState(new Array(anecdotes.length).fill(0))

  const handleClick = () => {
    const nextRandom = Math.floor(Math.random()*anecdotes.length)
    setSelected(nextRandom)
  }

  const handleVoteClick = () => {
    const voteCopy = [...voteArrayState]
    voteCopy[selected] += 1
    setVoteArrayState(voteCopy)
  }

  let largest = voteArrayState[0];
  for(let i=0; i<=voteArrayState.length; i++){
    if(largest<voteArrayState[i]){
      largest = voteArrayState[i]
    }
  }

  const largestPlace = voteArrayState.indexOf(largest);

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteArrayState[selected]} votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h1>Anecdote with most Votes</h1>
      <p>{anecdotes[largestPlace]}</p>
      <p>has {voteArrayState[largestPlace]} votes</p>
    </div>
  )
}

export default App