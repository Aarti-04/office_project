import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth//register">Register</Link>
      <Link href="/auth//logout">Logout</Link>
      <Link href="/auth/password">Change Password</Link>
      <Link href="/checkContent/textHamOrNot">Predict Text</Link>
      <Link href="/user/inbox">inbox</Link>
    </div>
  );
};

export default Header;
