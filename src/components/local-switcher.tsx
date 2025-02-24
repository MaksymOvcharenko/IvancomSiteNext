
'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Flag from 'react-world-flags';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleLanguageChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleLanguageChange('uk')}
        disabled={isPending}
        className={`p-2 rounded ${localActive === 'uk' ? 'border-2' : ''}`}
      >
        <Flag code="UA" alt="Ukrainian Flag" width={24} height={16} />
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        disabled={isPending}
        className={`p-2 rounded ${localActive === 'en' ? 'border-2' : ''}`}
      >
        <Flag code="GB" alt="English Flag" width={24} height={16} />
      </button>
      <button
        onClick={() => handleLanguageChange('pl')}
        disabled={isPending}
        className={`p-2 rounded ${localActive === 'pl' ? 'border-2' : ''}`}
      >
        <Flag code="PL" alt="Polish Flag" width={24} height={16} />
      </button>
    </div>
  );
}
