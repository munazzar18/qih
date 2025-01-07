import React from 'react';

interface PageProps {
  params: {
    depart: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      This is the {params.depart} page.
    </div>
  );
};

export default Page;
