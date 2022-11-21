import { animated, to, useSpring } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { FC, useRef } from 'react';
import { useEffect } from 'react';
import svg from '../../public/images/logo-react.svg';

type Props = {
  imgLink: string;
};

export const SkillCard: FC<Props> = ({ imgLink }) => {
  const target = useRef<HTMLImageElement>(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  const calcY = (y: number, ly: number) => {
    if (target.current) {
      const relY = y - target.current.getBoundingClientRect().top - 64 - ly;
      return relY / 4;
    }
  };
  const calcX = (x: number, lx: number) => {
    if (target.current) {
      const relX = x - target.current.getBoundingClientRect().left - 64 - lx;
      return relX / 4;
    }
  };

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  useGesture(
    {
      onPinch: ({ offset: [d, a] }) => api.start({ zoom: d / 200, rotateZ: a }),
      onMove: ({ event }) =>
        api.start({
          rotateX: calcX(event.clientX, x.get()),
          rotateY: calcY(event.clientY, y.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );

  return (
    <div className="m-10">
      <animated.img
        aria-label={imgLink}
        className="w-[128px] h-[128px] touch-none"
        style={{
          transform: 'perspective(400px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
        src={imgLink}
        ref={target}
        alt="card"
      />
    </div>
  );
};
