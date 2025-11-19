import LoginForm from "@/features/auth/LoginForm";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-rose-950">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white hover:text-black font-medium">
            <img className="w-auto h-auto" src="/Logo-_1_.svg" alt="Logo" />
          </Link>
          
        </div>

        <div className="flex items-center gap-24">
          <Link href="/" className="text-white hover:text-black font-medium">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-black font-medium">
            Catalogo
          </Link>
          <Link href="/nosotros" className="text-white hover:text-black font-medium">
            About
          </Link>
        </div>

        <div className="flex items-center justify-end gap-18">
          <Link href="/login" className="text-white hover:text-black font-medium">
            Login
          </Link>
          <Link href="/favoritos" className="text-white hover:text-black font-medium">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Link>
          <Link href="/carrito" className="text-white hover:text-black font-medium">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
            <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </Link>
          
        </div>

      </div>
    </nav>
  );
}
