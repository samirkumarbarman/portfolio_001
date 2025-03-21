import React from "react";

const Contact = () => {
    return (
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center w-full mb-12">
      <h1 class="text-3xl font-medium text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto mt-2 text-base">Feel free to reach out with any inquiries or feedback.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <form class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <label for="name" class="text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-gray-700 py-2 px-3 outline-none"/>
        </div>
        <div class="p-2 w-1/2">
          <label for="email" class="text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-gray-700 py-2 px-3 outline-none"/>
        </div>
        <div class="p-2 w-full">
          <label for="message" class="text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-gray-700 py-2 px-3 h-32 resize-none outline-none"></textarea>
        </div>
        <div class="p-2 w-full text-center">
          <button class="text-white bg-indigo-500 border-0 py-2 px-8 rounded hover:bg-indigo-600">Send Message</button>
        </div>
      </form>
      <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <div class="mt-4 flex justify-center space-x-4">
          <a href="#" class="text-gray-500"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-gray-500"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-gray-500"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-gray-500"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default Contact;