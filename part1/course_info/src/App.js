const Header = (props) => {
  // console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  console.log("Content", props);
  const { parts } = props;
  // console.log(parts[1].name);
  return (
    <>
      <Part part={parts[0].name} />
      <Part part={parts[1].name} />
      <Part part={parts[2].name} />
    </>
  );
};

const Total = (props) => {
  console.log("Total", props);
  const { parts } = props;
  return (
    <>
      <p>
        Number of exercises{":"}
        {parts[0].exercises + parts[1].exercises + parts[1].exercises}
      </p>
    </>
  );
};

const Part = (props) => {
  console.log("Part", props);
  return (
    <>
      <p>{props.part}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
