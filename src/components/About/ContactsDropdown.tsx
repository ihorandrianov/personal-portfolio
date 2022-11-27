import { animated, config, useSpring, useTransition } from '@react-spring/web';
import { useState } from 'react';
import phone from '../../images/phone.svg';
import email from '../../images/email-icon.svg';
import arrow from '../../images/arrow-down.svg';
import linkedin from '../../images/linked-in.svg';
import github from '../../images/github.svg';

export const ContactsDropdown = () => {
  const [isDown, setIsDown] = useState(false);

  const handleDrop = () => {
    setIsDown(!isDown);
  };
  const props = useSpring({
    height: isDown ? 150 : 0,
    opacity: isDown ? 1 : 0,
  });
  const arrowStyles = useSpring({
    rotate: isDown ? '180deg' : '720deg',
    config: config.wobbly,
  });

  return (
    <div>
      <button
        className="flex justify-center items-center gap-1 text-xl mb-3"
        onClick={handleDrop}
      >
        Contacts
        <animated.img
          src={arrow}
          alt="arrow"
          width="24px"
          height="24px"
          style={{ ...arrowStyles }}
        />
      </button>
      <animated.div className="overflow-hidden" style={{ ...props }}>
        <ul className="ml-3">
          <li className="flex gap-3 mb-3">
            <img src={phone} width="16px" height="16px" alt="phone icon" />
            <a href="http://t.me/andrianoia" title="Telegram">
              +38 093 390 05 60
            </a>
          </li>
          <li className="flex gap-3 mb-3">
            <img src={email} alt="email-icon" width="16px" height="16px" />
            <a href="mailto:andrianoia@gmail.com">andrianoia@gmail.com</a>
          </li>
          <li className="flex gap-3 mb-3">
            <img src={linkedin} alt="LinkedIn" height="16px" width="16px" />
            <a href="https://www.linkedin.com/in/ihor-andrianov-173b55252">
              Andrianov Ihor
            </a>
          </li>
          <li className="flex gap-3">
            <img src={github} alt="github" width="16px" height="16px" />
            <a href="https://github.com/ihorandrianov">Github</a>
          </li>
        </ul>
      </animated.div>
    </div>
  );
};
