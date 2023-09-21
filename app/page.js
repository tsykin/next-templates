import { data } from "./api/data";
import Hello from "./components/Hello";

const page = () => {
  return (
    <div>
      <h1>Data from JSON file inside app</h1>
      <p>
        This is a page that takes data from a local file inside an /app folder
        and presents it in a list
      </p>
      <ul>
        {data.map((service) => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
