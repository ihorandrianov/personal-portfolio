import { useSpring } from '@react-spring/web';
import type { FC } from 'react';

export const FooterPhrase: FC = () => {
  const props = useSpring({
    from: {
      x: '1',
    },
    to: {
      x: '100',
    },
  });
  return <p>{props.x.to((a) => a)}</p>;
};
