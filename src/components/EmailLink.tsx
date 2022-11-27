import { animated, useSpring } from '@react-spring/web';
import type { FC } from 'react';
import emoji from '../images/emoji.png';

export const EmailLink: FC = () => {
  return (
    <div className="mb-10 h-24">
      <a
        className="font-bold overflow-hidden xl:w-96 xl:px-24 py-5 xl:py-5 border-2 border-b-8 relative top-0 hover:top-2 duration-500 hover:border-b-2 border-yellow-500 rounded-xl block bg-textCol text-black text-center"
        href="mailto:andrianoia@gmail.com"
      >
        andrianoia@gmail.com
      </a>
    </div>
  );
};
