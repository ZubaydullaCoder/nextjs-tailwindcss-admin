'use client';
import Loader from '@/components/common/Loader';
import React, { useEffect, useState } from 'react';

const LoadProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return <div>{loading ? <Loader /> : children}</div>;
};

export default LoadProvider;
