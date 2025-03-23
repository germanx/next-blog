import Link from 'next/link';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="flex justify-between md:items-center mt-4">
      <div className="flex items-center md:space-x-12">
        <div className="hidden md:block">
          <Link href="/" className="text-xl">
            German X
          </Link>
        </div>
        <Navigation />
      </div>
      <div>Dark Toggle</div>
    </header>
  );
}

export default Header;
