import React from 'react';

const Course = ({course}) =>{

    const reducer = (init, curr) => init + curr; 
    const sum = course.parts.map(part => part.exercises).reduce(reducer)
  
    return(
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={sum} />
      </div>
    )
  }

const Header = ({name}) => <h2>{name}</h2>

const Content = ({ parts }) => parts.map(part =>
  <Part
    key={part.id}
    name={part.name}
    exercises={part.exercises}
  />
)

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ total }) => <p><b>total of {total} exercises</b></p>



export default Course;
