import { Helmet, HelmetData } from 'react-helmet-async';

interface HeadProps {
  title: string;
  description: string;
}

const helmetData = new HelmetData({});

export function Head({ description = '', title = '' }: HeadProps) {
  return (
    <Helmet helmetData={helmetData} title={title ? `${title} | Front Hub` : undefined} defaultTitle="Front Hub">
      <meta name="description" content={description} />
    </Helmet>
  );
}
