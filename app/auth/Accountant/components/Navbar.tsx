import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/accountant">
          <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/accountant/expenditure">
           <a>Department Expenditure</a>
          </Link>
          </li>
        <li>
          <Link href="/accountant/funding">
         <a>Funding Request</a>
          </Link>
        </li>
        <li>
          <Link href="/accountant/funds">
        <a>Available Funds</a>
          </Link>
        </li>
        <li>
          <Link href="/accountant/issue-money">
         <a>Issue Money</a>
          </Link>
        </li>
        <li>
          <Link href="/accountant/account-details">
     <a>Account Details</a>
      </Link>
    </li>
      </ul>
    </nav>
  );
};

export default Navbar;
