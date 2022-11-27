import { FC, useState } from 'react';
import octo from '../images/octo.png';
import ihor from '../images/ihor.png';

export const HeroPicture: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => setIsActive(true);

  const handleMouseUp = () => setIsActive(false);

  return (
    <div className="xl:w-[600px] xl:h-[800px] relative flex items-center justify-center ">
      <div
        className="xl:w-[800px] w-[360px] h-[360px] xl:h-[800px] xl:absolute bg-cover xl:top-[50px] xl:-left-[250px]"
        style={{
          backgroundImage: `url("${isActive ? octo : ihor}")`,
        }}
        title="Karolina Malii art"
      ></div>
      <button
        className="xl:w-[25px] xl:h-[25px] xl:absolute xl:bg-transparent xl:top-[519px] xl:left-[115px] hidden xl:block absolute xl:rounded-[50%]"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></button>
    </div>
  );
};
