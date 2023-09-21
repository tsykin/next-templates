import Image from "next/image";

const CustomImage = () => {
  return (
    <div>
      <Image src="/cat.jpg" alt="me" width="64" height="64" />
    </div>
  );
};

export default CustomImage;
