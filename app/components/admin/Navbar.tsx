import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
        <Link href="/admin">
         <a>Dashboard</a>
         </Link>
        </li>
        <li>
          <Link href="/admin/customer">
          <a>Customer Management</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/vendor">
          <a>Vendor Management</a>
          </Link>
        </li>
        <li>
        <Link href="/admin/attendance">
          <a>Attendance Management</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/shift">
          <a>Shift Management</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/salary">
      <a>Salary Management</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/content">
       <a>Content Management</a>
     </Link>
    </li>
  </ul>
    </nav>
  );
};

export default Navbar;
