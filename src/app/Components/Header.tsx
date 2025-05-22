'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';



interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/AddRestaurants', label: 'Add Restaurants' },
  { href: '/Customers/chiken', label: 'Chicken' },
  { href: '/mutton', label: 'Mutton' },
  { href: '/biryani', label: 'Biryani' },
  { href: '/Customers/fish', label: 'Fish' },
  { href: '/login', label: 'Login' },
];

const Header: FC = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', search);
    // Add search logic or routing here
  };

  return (
    <header>
      <style jsx>{`
        .navbar-custom {
          background-color: #212529; /* Dark orange */
        }

        .animated-link {
          transition: all 0.3s ease-in-out;
          position: relative;
          padding: 0.5rem 1rem;
        }

        .animated-link::before {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #fff;
          transition: width 0.3s ease-in-out;
        }

        .animated-link:hover::before {
          width: 100%;
        }

        .animated-link:hover {
          transform: scale(1.1);
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff !important;
        }

        .nav-link.small-text {
          font-size: 0.9rem;
        }

        .nowrap {
          white-space: nowrap; /* Prevent text wrapping */
        }
        .chicken-text {
          text-transform: uppercase; /* Make Chicken uppercase */
        }

        /* Adjust the font size for Chicken99 text */
        .navbar-brand {
          font-size: 1.2rem; /* Adjust the overall font size */
        }

        /* Specific size for 99 to make it smaller */
        .navbar-brand sup {
          font-size: 1.2em; /* Make 99 slightly larger than 'Chicken' */
        }

        /* Make sure all text in the header is in one line */
        .navbar-brand,
        .navbar-nav {
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .animated-link {
            font-size: 1rem;
          }

          .search-bar {
            margin-top: 1rem;
          }
        }

        @media (min-width: 500px) {
          .search-bar {
            justify-content: center;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top shadow-sm px-3 py-2">
        <div className="container-fluid">
         {/* Logo */}
<Link href="/" className="navbar-brand d-flex align-items-center">
  <img
    src="/logo.png"
    alt="Chicken 99 Logo"
    style={{ height: '70px', width: 'auto' }} // Adjust the size as needed
  />
</Link>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarNav">
            {/* Search Bar */}
            <form className="d-flex ms-lg-2 me-lg-auto search-bar w-100" onSubmit={handleSearch}>
              <input
                className="form-control form-control-lg me-2"
                type="search"
                placeholder="Search for dishes or restaurants..."
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: '400px' }}
              />
            </form>

            {/* Navigation Links */}
            <ul className="navbar-nav ms-auto gap-2 text-right">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link text-white fw-semibold animated-link small-text ${item.label === 'Add Restaurants' ? 'nowrap' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ height: '75px' }}></div>
    </header>
  );
};

export default Header;
