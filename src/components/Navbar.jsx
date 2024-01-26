import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="nav">
      <img src="https://interviews.tacnique.com/static/media/tacnique-logo.c6deea82bd6eb016aa3f7bda24de498b.svg" alt="logo" />
      <Link to='/'><Button>Users</Button></Link>
      <Link to='/add'><Button>Add User</Button></Link>
    </div>
  );
};
