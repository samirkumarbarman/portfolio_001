import React from "react";

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 items-center justify-between">
      <a class="flex items-center text-gray-900 title-font font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">SAMIR</span>
      </a>
      <nav class="hidden md:flex space-x-5 text-base">
        <a href="#Home" class="hover:text-gray-900">Home</a>
        <a href="#About" class="hover:text-gray-900">About ME</a>
        <a href="#Project" class="hover:text-gray-900">Project</a>
        <a href="#Contact" class="hover:text-gray-900">Contact</a>
      </nav>
    </div>
  </header>
  );
};

export default Header;
