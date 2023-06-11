import Part from "./ContentParts/Parts"

const Content = ({ courseContent }) => 
  <>
    {courseContent.map((items) => <Part key={items.id} part={items}/>) }    
  </>

  export default Content