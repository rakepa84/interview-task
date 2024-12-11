import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/images/tree.png',
      title: 'Fresh Product',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultrices turpis proin nulla.',
      iconSize: { width: 17, height: 17 },
    },
    {
      icon: '/images/Vehicle.png',
      title: 'Fast Shipping, Always',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultrices turpis proin nulla.',
      iconSize: { width: 25, height: 25 },
    },
    {
      icon: '/images/cube-icon.png',
      title: 'Flexible Delivery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultrices turpis proin nulla.',
      iconSize: { width: 25, height: 25 },
    },
  ];

  const FeatureCard = ({ icon, title, description, iconSize }) => {
    return (
      <div className='flex flex-col items-start bg-white bg-opacity-80 shadow-lg rounded-lg p-6 text-left backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[295px] md:h-[245px] flex-shrink-0  lg:w-[310px] xl:w-[380px]'>
        <div className='bg-white w-[2.5rem] h-[2.5rem] flex items-center justify-center mb-2 rounded-md shadow-sm'>
          <Image
            src={icon}
            alt={`${title} Icon`}
            width={iconSize.width}
            height={iconSize.height}
            objectFit='contain'
          />
        </div>

        <h3 className='md:text-[20px] text-[14px] font-semibold mb-2 mt-2'>
          {title}
        </h3>
        <p className='text-[#666666] text-[12px] md:text-[16px] font-poppins tracking-[2%]'>
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="relative w-full h-auto py-12 bg-[url('/images/card-background.png')] bg-cover bg-center">
      <div className='absolute inset-0 bg-[#dbeded] bg-opacity-100 -z-20'></div>
      <div className='relative container mx-auto px-4'>
        <div className='flex gap-4 overflow-x-auto sm:overflow-x-auto md:overflow-x-auto lg:overflow-hidden sm:scroll-smooth lg:justify-center sm:flex-nowrap lg:flex-wrap'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconSize={feature.iconSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
