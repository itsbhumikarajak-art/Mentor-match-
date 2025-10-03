import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h2 className="text-4xl font-semibold mb-8 text-center text-black">Our Mentorship Services</h2>
        
        {/* Service 1: Personal Growth */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4  text-black    ">Personal Growth Mentorship</h3>
          <p className="text-lg text-gray-700">
            Embark on a journey of self-discovery and transformation. Our mentors will guide you in setting meaningful personal goals, developing positive habits, and building confidence to live your best life.
          </p>
        </div>

        {/* Service 2: Career Development */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4   text-black   ">Career Development Mentorship</h3>
          <p className="text-lg text-gray-700">
            Whether you're navigating a career change, looking to climb the corporate ladder, or exploring new opportunities, our mentors offer tailored advice and strategies to help you make informed career decisions.
          </p>
        </div>

        {/* Service 3: Leadership and Influence */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4  text-black   ">Leadership and Influence Mentorship</h3>
          <p className="text-lg text-gray-700">
            Unlock your leadership potential. Our mentors help you develop strong leadership skills, enhance emotional intelligence, and effectively inspire and motivate others in both personal and professional settings.
          </p>
        </div>

        {/* Service 4: Mindfulness and Well-being */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4  text-black    ">Mindfulness and Well-being Mentorship</h3>
          <p className="text-lg text-gray-700">
            Achieve inner peace and balance with the guidance of a mentor. Learn mindfulness practices, stress management techniques, and how to maintain your mental and emotional well-being in the fast-paced world.
          </p>
        </div>

        {/* Service 5: Life Transition Mentorship */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-black   ">Life Transition Mentorship</h3>
          <p className="text-lg text-gray-700">
            Whether you're facing a career shift, relocating, or navigating a significant life change, our mentors are here to offer support, guidance, and encouragement to help you adapt and thrive during transitions.
          </p>
        </div>

        {/* Service 6: Confidence and Public Speaking */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-black   ">Confidence and Public Speaking Mentorship</h3>
          <p className="text-lg text-gray-700">
            Overcome public speaking anxiety and build lasting self-confidence. Our mentors provide tips, techniques, and personalized coaching to help you speak with clarity and impact in any situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
