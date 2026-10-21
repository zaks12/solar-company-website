import { useEffect } from 'react';

type DocumentMetaOptions = {
  title: string;
  description: string;
};

const defaultTitle = 'Zacks Solar | Solar Energy Solutions';

/**
 * Sets the document title and meta description for the current route.
 * Restores defaults on unmount.
 */
export function useDocumentMeta({ title, description }: DocumentMetaOptions) {
  useEffect(() => {
    const fullTitle = title === defaultTitle ? title : `${title} — Zacks Solar`;
    document.title = fullTitle;

    const meta = document.querySelector('meta[name="description"]');
    const prevContent = meta?.getAttribute('content');
    if (meta) {
      meta.setAttribute('content', description);
    }

    return () => {
      document.title = defaultTitle;
      if (meta && prevContent) {
        meta.setAttribute('content', prevContent);
      }
    };
  }, [title, description]);
}
