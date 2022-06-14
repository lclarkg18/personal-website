import React, { useEffect, useRef, useState } from 'react';

import lottie from 'lottie-web';

interface LottieProps {
  name: string
  animationData: any
  width: number
  height: number
}

export default function HoverLottie({
  name, animationData, width, height,
}: LottieProps) {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
        loop: false,
        autoplay: false,
        name,
      });
      lottieInstance.current.addEventListener('complete', () => {
        lottie.stop(name);
      });
    }
    return () => {
      lottie.destroy(name);
    };
  }, [animationData]);

  useEffect(() => {
    if (!firstRender) {
      lottie.play(name);
    } else {
      setFirstRender(false);
    }
  }, [triggerAnimation]);

  return (
    <div
      style={{ width, height }}
      onMouseEnter={() => setTriggerAnimation(!triggerAnimation)}
      ref={element}
    />
  );
}
