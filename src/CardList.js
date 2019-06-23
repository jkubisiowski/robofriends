import React from 'react';
import Card from './Card';

export const CardList = ({ robots }) => {
  return robots.map(x => <Card key={x.id} id={x.id} name={x.name} email={x.email} />);
};
