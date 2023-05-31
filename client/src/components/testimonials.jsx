const testimonials = [
    {
      body: 'I\'ve been using the resume AI creation app for a while now, and I must say it\'s a game-changer. It helps me generate professional resumes effortlessly, and the results are amazing. Highly recommended!',
      author: {
        name: 'John Smith',
        handle: 'johnsmith',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
        nationality: '🇺🇸'
      }
    },
    {
      body: 'As a job seeker in a highly competitive market, I needed something to make my resume stand out. The resume AI creation app was the answer. It provided me with a well-crafted resume that highlighted my skills and experience in the best way possible. Thanks to this app, I landed my dream job!',
      author: {
        name: 'Sophia Lee',
        handle: 'sophialee',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        nationality: '🇨🇦'
      }
    },
    {
      body: 'No more struggling with resume writing! The resume AI creation app is a lifesaver. It takes away the stress and saves me a lot of time. With just a few clicks, I have a polished and professional resume ready to impress potential employers. I couldn\'t be happier!',
      author: {
        name: 'Luis García',
        handle: 'luisgarcia',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
        nationality: '🇲🇽'
      }
    },
    {
      body: 'Being a recent graduate, I was unsure how to create a compelling resume. That\'s when I discovered the resume AI creation app. It guided me through the process and provided excellent suggestions to enhance my resume. Thanks to this app, I got my first job right out of college!',
      author: {
        name: 'Emily Chen',
        handle: 'emilychen',
        imageUrl: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
        nationality: '🇺🇸'
      }
    },
    {
      body: 'The resume AI creation app is a fantastic tool for professionals. It understands the job market trends and tailors resumes accordingly. It\'s like having a personal resume consultant at your fingertips. With this app, my job applications have seen a significant boost in response rates.',
      author: {
        name: 'Mohammed Khan',
        handle: 'mohammedkhan',
        imageUrl: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
        nationality: '🇬🇧'
      }
    },
    {
      body: 'Ich bin begeistert von der Resume AI Creation App! Als nicht englischsprachiger Bewerber hat es mir geholfen, einen überzeugenden Lebenslauf in englischer Sprache zu erstellen. Die Ergebnisse waren beeindruckend, und ich konnte mich erfolgreich auf internationale Stellen bewerben. Vielen Dank an das Team!',
      author: {
        name: 'Sabine Müller',
        handle: 'sabinemuller',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
        nationality: '🇩🇪'
      }
    }
  ];
  
  export default function Example() {
    return (
      <div className="bg-slate-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-emerald-500
  
  ">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           ✨ We have created thousands of amazing resumes for people.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="shadow-lg rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`@${testimonial.author.handle} ${testimonial.author.nationality}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }