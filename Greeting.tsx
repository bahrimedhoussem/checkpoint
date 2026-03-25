import React from "react";

// Props type
interface GreetingProps {
  name: string;
}

// Functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
