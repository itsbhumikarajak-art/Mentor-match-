import React from "react";

const HowItWorks = () => {
  return (
    <>
    <div class="bg-white">
    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

        <div class="text-center">
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
                STEPS
            </p>
            <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                How it <span class="text-black">Works?</span>
            </h3>

        </div>

        <div class="mt-20">
            <ul class="">

                <li class="text-left mb-10">
                    <div class="flex flex-row items-start">
                        <div class="flex flex-col items-center justify-center mr-5">
                            <div
                                class="flex items-center justify-center h-20 w-20 rounded-full bg-black   text-white border-4 border-white text-xl font-semibold">
                                1
                            </div>
                            <span class="text-black">STEP</span>
                        </div>
                        <div class="bg-white  p-5 pb-10 ">
                            <h4 class="text-lg leading-6 font-semibold text-gray-900"> create  profile      </h4>
                            <p class="mt-2 text-base leading-6 text-black">
                              
                             Sign up and create your profile to start your mentoring journey.

                            </p>
                        </div>
                    </div>
                </li>
                <li class="text-left mb-10">
                    <div class="flex flex-row items-start">
                        <div class="flex flex-col items-center justify-center mr-5">
                            <div
                                class="flex items-center justify-center h-20 w-20 rounded-full bg-black   text-white border-4 border-white text-xl font-semibold">
                                2
                            </div>
                            <span class="text-black">STEP</span>
                        </div>
                        <div class="bg-white   p-5 pb-10 ">
                            <h4 class="text-lg leading-6 font-semibold text-black"> Browse mentors  </h4>
                            <p class="mt-2 text-base leading-6 text-black">
                            Browse mentors based on skills, industry, or availability to find the perfect match.

                            </p>
                        </div>
                    </div>
                </li>
                <li class="text-left mb-10">
                    <div class="flex flex-row items-start">
                        <div class="flex flex-col items-center justify-center mr-5">
                            <div
                                class="flex items-center justify-center h-20 w-20 rounded-full bg-black   text-white border-4 border-white text-xl font-semibold">
                                3
                            </div>
                            <span class="text-black">STEP</span>
                        </div>
                        <div class="bg-white   p-5 pb-10 ">
                            <h4 class="text-lg leading-6 font-semibold text-black">connect with your mentor</h4>
                            <p class="mt-2 text-base leading-6 text-">
                            Book a session and connect with your mentor via video call or chat.

                            </p>
                        </div>
                    </div>
                </li>
                <li class="text-left mb-10">
                    <div class="flex flex-row items-start">
                        <div class="flex flex-col items-center justify-center mr-5">
                            <div
                                class="flex items-center justify-center h-20 w-20 rounded-full bg-black   text-white border-4 border-white text-xl font-semibold">
                                Success

                            </div>
                            
                        </div>
                        <div class="bg-white   p-5 pb-10 ">
                            <h4 class="text-lg leading-6 font-semibold text-black">  Achieve your goals </h4>
                            <p class="mt-2 text-base leading-6 text-black">
                            Achieve your goals with personalized advice and actionable insights from your mentor.

                            </p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

    </div>
</div>
</>
  );
};

export default HowItWorks;
