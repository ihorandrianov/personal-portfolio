import type { FC } from 'react';
import trpcLogo from '../../images/tRPC-logo.png';
import reactLogo from '../../images/logo-react.svg';
import tsLogo from '../../images/ts-logo.svg';
import prismaLogo from '../../images/prisma-3.svg';
import astroLogo from '../../images/astro.svg';
import nextLogo from '../../images/Nextjs-logo.svg';
import tailwindLogo from '../../images/tailwind.svg';
import queryLogo from '../../images/query-logo.png';
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
    <ul className="grid xl:grid-cols-4 grid-cols-2 gap-8 place-items-center mx-5 xl:mx-0 mb-10">
      {techList.map((tech) => (
        <li key={tech}>
          <SkillCard imgLink={tech} />
        </li>
      ))}
    </ul>
  );
};
