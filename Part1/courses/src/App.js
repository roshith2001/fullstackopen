const Header = (props) => {
  return(
    <>
      <h1>{props.course.name}</h1>
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

  const p1 = props.course.parts[0];
  const p2 = props.course.parts[1];
  const p3 = props.course.parts[2];

  return(
    <>
      <Part  part={p1.name} exercise={p1.exercises}/>
      <Part  part={p2.name} exercise={p2.exercises}/>
      <Part  part={p3.name} exercise={p3.exercises}/>
    </>
  )
}


const Total = (props) => {
  const p1 = props.course.parts[0];
  const p2 = props.course.parts[1];
  const p3 = props.course.parts[2];
  return(
    <>
      <p>
        No of excercises {p1.exercises + p2.exercises + p3.exercises }
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  

  return (
    <div className="App">
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  );
}

export default App;
