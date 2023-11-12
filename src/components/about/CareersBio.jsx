import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const CareersBio = () => {
  const { careers } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {careers.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CareersBio;
