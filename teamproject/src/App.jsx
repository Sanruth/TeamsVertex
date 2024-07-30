import React from 'react';
import './App.css';
import courseData from './courses/courseData';
import Course from './courses/Course';

const App = () => {
  return (
    <div className="App">
      <h1>Explore Our Courses</h1>
      <div className="course-grid">
        {courseData.map((course, index) => (
          <Course
            key={index}
            name={course.name}
            link={course.link}
            image={course.image}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
