"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Digital Museum of Palestinian Heritage
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/collection" className="hover:text-primary">
                Collection
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/collection"
              className="block px-3 py-2 rounded-md hover:text-primary"
            >
              Collection
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:text-primary"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}