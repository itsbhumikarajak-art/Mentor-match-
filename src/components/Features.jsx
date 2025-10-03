import React from 'react';

const Features = () => {
  return (
    <section className="bg-white lg: mt-28   py-16">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-screen justify-center">
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Mentorship Matching</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered matchmaking to connect mentors and mentees based on shared skills, goals, and interests.
            </p>
          </div>

          <div className="border-t pt-12 mt-12">
            {/* First Feature Section */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 items-center">
              <div className="space-y-6">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Personalized experience</span>
                <p className="text-3xl font-semibold text-gray-800 leading-tight">
                  Profile Customization
                </p>
                <p className="text-base text-gray-600">
                  Set up and personalize your profile with your role, expertise, skills, interests, and mentorship goals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Effortless connections</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Seamless connection management</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Real-time notifications</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Mentorship requests tracking</span>
                  </div>
                </div>
              </div>
              <div className="h-full md:order-first">
              <img src=" https://byst.org.in/wp-content/uploads/2024/02/bloggg.jpg" />
              </div>
            </div>

            {/* Second Feature Section */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
              <div className="space-y-6">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Just because we can</span>
                <p className="text-3xl font-semibold text-gray-800 leading-tight">
                  Matching Algorithm
                </p>
                <p className="text-base text-gray-600">
                  Develop a basic algorithm that suggests potential mentors or mentees based on matching skills and interests.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Skill & Interest-Based Filters</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Secure Messaging System</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">Easy match search</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gray-950 font-medium">User-centric UI</span>
                  </div>
                </div>
              </div>
              <div className="h-full md:order-first">
              <img src=" https://assets.entrepreneur.com/content/3x2/2000/20160704114059-shutterstock-390101425.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
