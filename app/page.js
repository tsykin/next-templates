import { data } from "./api/data";

const page = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        {data.map((service) => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
