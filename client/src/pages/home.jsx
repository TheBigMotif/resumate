import { posts } from '../data/data.js';


export default function Models() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <h3 className="font-semibold tracking-tight bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">UNLOCK AI POTENTIAL</h3>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resumate Hub 🪄</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover AI-powered curated template generators for various purposes, ranging from crafting professional resumes
            to finding your ideal match on Tinder.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 px-8 pb-8 pt-5 sm:pt-8 lg:pt-8 shadow-xl"
            >
              <div className="absolute inset-0 -z-10" />
              <div className={`text-5xl sm:text-3xl lg:text-6xl mb-2`}>{post.Emoji}</div>
              <h3 className="mt-1 text-lg font-semibold leading-6 text-black">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-1 text-black">{post.description}</p>
              <button
                type="button"
                className={`mt-4 rounded-md bg-gradient-to-r ${post.buttonGradient} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm`}
              >
                {post.buttonText}
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}