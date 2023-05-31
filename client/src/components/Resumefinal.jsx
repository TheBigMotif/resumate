import React from "react";
import { useState } from "react";

export default function Comingsoon() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <div className="flex flex-col min-h-screen bg-slate-100 justify-center items-center">
        <main className="max-w-lg px-6 py-24 sm:py-32 sm:px-8">
          <div className="text-5xl sm:text-3xl lg:text-6xl mb-2">⏳</div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            New features coming soon! 🚀
          </h1>
          <p className="  mt-6 text-base leading-7 text-gray-600">
            Join us on our coding journey at Resumate.ai, where we tirelessly
            code new features each week.
          </p>
          <p className="mt-6 mb-4 text-base leading-7 text-gray-600">
            📣 Spread the word by sharing this page and following us on social
            media to stay connected.
          </p>
          <div className="w-full md:w-1/3 mx-auto"></div>
          <div className="p-5 rounded-lg shadow-lg bg-white">
            <ul className="flex flex-wrap">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center m-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-600"
                  title="Share this post to Facebook"
                >
                  <svg
                    className="w-auto h-4 mr-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center m-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-600"
                  title="Share this post to Twitter"
                >
                  <svg
                    className="w-auto h-4 mr-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center m-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-600"
                  title="Share this post to Reddit"
                >
                  <svg
                    className="w-auto h-4 mr-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path>
                  </svg>
                  Reddit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center m-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-600"
                  title="Share this post to LinkedIn"
                >
                  <svg
                    className="w-auto h-4 mr-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center m-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-600"
                  title="Share this post to WhatsApp"
                >
                  <svg
                    className="w-auto h-4 mr-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-3.732 39.215-19.881 134.378-28.1 178.3-3.476 18.584-10.322 24.816-16.948 25.425-14.4 1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5 3.652-3.793 67.107-61.51 68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7 108.446-47.248 144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center m-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-600"
                  title="Share this post to Telegram"
                >
                  <svg
                    className="w-auto h-4 mr-2 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                  </svg>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="text-sm font-semibold leading-7 text-indigo-600"
            >
              <button
                type="button"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-fuchsia-500 bg-gradient-to-r from-blue-500 to-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </button>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
