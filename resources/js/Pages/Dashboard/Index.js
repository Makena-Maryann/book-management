import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';

const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      <p className="mb-12 leading-normal">
        Hey there! Welcome to the Book Mangement System.
      </p>
      <div>
        <InertiaLink className="mr-1 btn-indigo" href="/500">
          500 error
        </InertiaLink>
        <InertiaLink className="btn-indigo" href="/404">
          404 error
        </InertiaLink>
      </div>
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = page => <Layout title="Dashboard" children={page} />;

export default Dashboard;
