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

  const p1 = props.parts[0];
  const p2 = props.parts[1];
  const p3 = props.parts[2];

  return(
    <>
      <Part  part={p1.name} exercise={p1.exercises}/>
      <Part  part={p2.name} exercise={p2.exercises}/>
      <Part  part={p3.name} exercise={p3.exercises}/>
    </>
  )
}


const Total = (props) => {
  const p1 = props.parts[0];
  const p2 = props.parts[1];
  const p3 = props.parts[2];
  return(
    <>
      <p>
        No of excercises {p1.exercises + p2.exercises + p3.exercises }
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div className="App">
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  );
}

export default App;
