import Content from "./CourseComponents/Content";
import Header from "./CourseComponents/Header";

const Total = ({ total }) => <p><b>total of {total} excersises</b></p>

const Course = ({course}) => {

    const reducedSum = course.parts.reduce((sum, excersise) => {
        return sum + excersise.exercises
    }, 0)

    return(
        <>
            <Header courseName = {course.name}/>
            <Content courseContent = {course.parts}/>   
            <Total total={reducedSum}/>     
        </>
    )
}

export default Course;