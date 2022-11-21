import type { FC } from 'react';
import trpcLogo from '../../public/images/tRPC-logo.png';
import reactLogo from '../../public/images/logo-react.svg';
import tsLogo from '../../public/images/ts-logo.svg';
import prismaLogo from '../../public/images/prisma-3.svg';
import astroLogo from '../../public/images/astro.png';
import nextLogo from '../../public/images/Nextjs-logo.svg';
import tailwindLogo from '../../public/images/tailwind.svg';
import queryLogo from '../../public/images/query-logo.png';
import { SkillCard } from './SkillCard';

const techList = [
  reactLogo,
  tsLogo,
  astroLogo,
  nextLogo,
  prismaLogo,
  trpcLogo,
  tailwindLogo,
  queryLogo,
];

export const BadgeList: FC = () => {
  return (
    <ul className="grid grid-cols-4 place-items-center">
      {techList.map((tech) => (
        <li key={tech}>
          <SkillCard imgLink={tech} />
        </li>
      ))}
    </ul>
  );
};
