import { data } from "./api/data";

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
