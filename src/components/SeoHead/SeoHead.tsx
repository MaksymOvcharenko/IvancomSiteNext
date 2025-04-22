"use client"
import Head from 'next/head';
import { useParams } from 'next/navigation';


interface SeoHeadProps {
  title: string;
  description: string;
  noIndex?: boolean; // якщо треба заборонити індексацію
}

export const SeoHead = ({ title, description, noIndex = false }: SeoHeadProps) => {
  const { asPath } = useParams()
  const baseUrl = 'https://ivankom.eu'; // або через ENV, якщо треба
  const canonicalUrl = `${baseUrl}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
};
