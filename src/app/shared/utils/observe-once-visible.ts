const LAZY_ROOT_MARGIN = '50px';
const LAZY_VISIBILITY_THRESHOLD = 0.1;

export function observeOnceVisible(
  element: Element | undefined,
  onVisible: () => void,
): IntersectionObserver | null {
  if (!element || !('IntersectionObserver' in window)) {
    onVisible();
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        onVisible();
        observer.disconnect();
      }
    },
    {
      rootMargin: LAZY_ROOT_MARGIN,
      threshold: LAZY_VISIBILITY_THRESHOLD,
    },
  );

  observer.observe(element);
  return observer;
}
