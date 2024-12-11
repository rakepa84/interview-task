import Image from 'next/image';

const InstagramSection = () => {
  const posts = [
    {
      id: 1,
      image: '/images/instagram-section-fluffy-dog.png',
      caption:
        'Simply tag @petfood in your caption on Instagram or Twitter to be featured on our website.',
      user: 'Instagram User',
      time: '48 min ago',
    },
    {
      id: 2,
      text: 'I Think Having An Animal In Your Life Makes You A Better Human.',
      user: 'Instagram User',
      time: '48 min ago',
      icon: '/images/Instagram-heart_fill.png',
      image: '/images/Instagram-puppy-in-duck-pajamas.png',
      caption:
        'Simply tag @petfood in your caption on Instagram or Twitter to be featured on our website.',
    },
    {
      id: 3,
      image: '/images/instagram-dog-bone.png',
      caption:
        'Simply tag @petfood in your caption on Instagram or Twitter to be featured on our website.',
      user: 'Instagram User',
      time: '48 min ago',
    },
    {
      id: 4,
      image: '/images/instagram-puppies-in-pajamas.png',
      caption:
        'Simply tag @petfood in your caption on Instagram or Twitter to be featured on our website.',
      user: 'Instagram User',
      time: '48 min ago',
    },
  ];

  const boldAtUsernames = (caption) => {
    const regex = /(@\w+)/g;
    return caption.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className='font-bold text-[#112025]'>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const InstagramUserTime = ({ user, time }) => (
    <div className='flex flex-col items-start'>
      <span className='text-[#112025] text-[16px] font-poppins font-bold mb-1'>
        {user}
      </span>
      <span className='text-gray-400 text-[12px]'>{time}</span>
    </div>
  );

  return (
    <div className='p-5 bg-gray-50'>
      <div className='max-w-screen-xl mx-auto pt-[4rem] pb-[2rem]'>
        <h2 className='text-center md:text-[30px] text-[16px] font-bold mb-4'>
          Explore #Dubidoo
        </h2>
        <p className='text-[#112025] text-[12px] md:text-[14px]  mb-4 font-poppins text-center max-w-[450px] mx-auto'>
          {boldAtUsernames(
            'Simply tag @petfood in your caption on Instagram or Twitter to be featured on our website.'
          )}
        </p>

        <div className='overflow-x-auto lg:overflow-hidden mt-8'>
          <div className='flex gap-4 lg:grid lg:grid-cols-4'>
            {posts.map((post, index) =>
              index === 1 ? (
                <div
                  key={post.id}
                  className='flex flex-col justify-between min-w-[300px] lg:min-w-[226px]'
                >
                  <div className='bg-white shadow-sm rounded-md overflow-hidden hover:shadow-xl  transition-all duration-300'>
                    <div className='bg-[#16BAC6] bg-opacity-10 flex flex-col justify-center items-center text-center p-6 rounded-md shadow-sm border border-slate-300'>
                      {post.icon && (
                        <Image
                          src={post.icon}
                          alt='Heart Icon'
                          width={24}
                          height={24}
                          className='mb-2 mt-4'
                        />
                      )}
                      <p className='text-[#195F6B] font-semibold md:text-[19px] text-[17px] mb-4 font-poppins'>
                        {`"${post.text}"`}
                      </p>
                    </div>
                    <div className='flex items-center justify-between text-gray-400 text-xs p-2'>
                      <InstagramUserTime user={post.user} time={post.time} />
                      <Image
                        src='/images/instagram-section.png'
                        alt='Instagram Icon'
                        width={30}
                        height={30}
                        className='object-contain'
                      />
                    </div>
                  </div>

                  <div className='bg-white shadow-sm rounded-md overflow-hidden hover:shadow-xl hover:border hover:border-slate-300 hover:bg-slate-50 transition-all duration-300'>
                    <Image
                      src={post.image}
                      alt='Dog Image'
                      width={300}
                      height={300}
                      className='w-full h-auto object-cover'
                    />
                    <div className='p-2'>
                      <div className='flex items-center justify-between text-gray-400 text-xs'>
                        <InstagramUserTime user={post.user} time={post.time} />
                        <Image
                          src='/images/instagram-color.png'
                          alt='Instagram Icon'
                          width={30}
                          height={30}
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={post.id}
                  className='bg-white shadow-sm rounded-md overflow-hidden hover:shadow-xl hover:border hover:border-slate-300 transition-all duration-300 min-w-[300px] lg:min-w-[226px]'
                >
                  {post.image && (
                    <Image
                      src={post.image}
                      alt='Post Image'
                      width={300}
                      height={300}
                      className='w-full h-auto object-cover'
                    />
                  )}
                  <div className='p-2'>
                    <p className='text-[#112025] text-[12px] md:text-[14px] mb-4 font-poppins'>
                      {boldAtUsernames(post.caption)}
                    </p>
                    <div className='flex items-center justify-between text-gray-400 text-xs'>
                      <InstagramUserTime user={post.user} time={post.time} />
                      <Image
                        src='/images/instagram-section.png'
                        alt='Instagram Icon'
                        width={30}
                        height={30}
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
