import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';

export default ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="Dashboard" link="dashboard" icon="dashboard" />
      <MainMenuItem text="Authors" link="authors.index" icon="users" />
      <MainMenuItem text="Books" link="books.index" icon="book" />
    </div>
  );
};
