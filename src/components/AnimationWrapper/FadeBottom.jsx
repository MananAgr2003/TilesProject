import React, { useRef, useState, useEffect } from 'react';

const FadeInFromBottom = ({ children, delay = 0, duration = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  const styles = {
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : 100}px)`,
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out ${delay}ms`,
  };

  return (
    <div ref={domRef} style={styles}>
      {children}
    </div>
  );
};

export default FadeInFromBottom;