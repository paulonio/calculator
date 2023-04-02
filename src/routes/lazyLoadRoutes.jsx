import { Suspense, lazy } from 'react';

const lazyLoadRoutes = (element) => {
  const LazyElement = lazy(() => import(`../pages/${element}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyElement />
    </Suspense>
  );
};

export { lazyLoadRoutes };
