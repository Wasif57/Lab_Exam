import React from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/admin');}, 
    []);

  return <div>Loading...</div>;
};

export default HomePage;


