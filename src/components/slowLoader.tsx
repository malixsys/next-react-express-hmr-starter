import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const SlowLoader = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let timer;
    const aniStart = () => {
      timer = setTimeout(() => {
        setIsActive(true);
      }, 300);
    };
    const aniEnd = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setIsActive(false);
    };

    router.events.on('routeChangeStart', aniStart);
    router.events.on('routeChangeComplete', aniEnd);
    router.events.on('routeChangeError', aniEnd);

    return () => {
      router.events.off('routeChangeStart', aniStart);
      router.events.off('routeChangeComplete', aniEnd);
      router.events.off('routeChangeError', aniEnd);
    };
  }, [router]);
  return (
    <div className={isActive ? 'covers active' : 'covers'}>
      <div>Loading...</div>
    </div>
  );
};
