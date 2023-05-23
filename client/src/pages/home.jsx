const posts = [
  {
    id: 1,
    title: 'ResumeGenie',
    Emoji: '🧞‍♂️',
    href: '#',
    description:
      'Unlock your career potential with ResumeGenie. Answer 15 simple questions, and watch as our AI-powered platform creates professional resumes tailored specifically to your skills and experience, helping you stand out in your job search.',
    buttonText: 'Boost your career 💼',
    buttonGradient: 'from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500',
  },
  {
    id: 2,
    title: 'FinGenius',
    Emoji: '💸',
    href: '#',
    description:
      'Take charge of your finances with FinGenius. Input your numbers and let our AI-driven platform create customized finance templates to save money and reach your financial goals.',
    buttonText: 'Start organizing 📈',
    buttonGradient: 'from-purple-500 to-indigo-500 hover:from-red-500 hover:to-yellow-500',
  },
  {
    id: 3,
    title: 'Dating Booster',
    Emoji: '❤️‍🔥',
    href: '#',
    description:
      'Share details about your crush and let our AI-powered platform work its magic, offering the ideal recipe to make them fall deeply in love with you. Create your love story with confidence.',
    buttonText: 'Spark connections ✨',
    buttonGradient: 'from-pink-500 to-yellow-500 hover:from-purple-500 hover:to-indigo-500',
  },
];

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