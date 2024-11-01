import ECommerce from '@/components/Dashboard/E-commerce';
import { Metadata } from 'next';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next.js E-commerce Dashboard Page |  Next.js dashboard by Zubaydulla',
  description: 'This is Next.js Home page for NextAdmin Dashboard Kit',
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
