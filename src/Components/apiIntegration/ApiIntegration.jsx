import { useEffect, useState } from "react";


const ApiIntegration = () => {
  // API Integration
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, [])

  console.log(data)
  return (
    <div>
      <h2>API Integration</h2>
    </div>
  );
};

export default ApiIntegration;