const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = (props) => {

  const p1 = props.part1;
  const p2 = props.part2;
  const p3 = props.part3;

  return(
    <>
      <Part part={p1.name} exercise={p1.exercises} />
      <Part part={p2.name} exercise={p2.exercises} />
      <Part part={p3.name} exercise={p3.exercises} />
    </>
  )
}


const Total = (props) => {
  return(
    <>
      <p>
        No of excercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div className="App">
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  );
}

export default App;
