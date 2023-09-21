import { data } from "./api/data";
import Hello from "./components/Hello";

const page = () => {
  return (
    <div>
      <h1>Data from JSON file inside app</h1>
      <ul>
        {data.map((service) => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
