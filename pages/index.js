import Image from "next/image";
import selfPhoto from "../public/assets/about_0.jpg";
import course1 from "../public/assets/course_1.jpeg";
import course2 from "../public/assets/course_2.jpg";
import course3 from "../public/assets/course_5.jpg";

import Calendar from "../components/Calendar";
import Section from "../components/Section";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Section id="about">
        <div className="container mx-auto py-16 md:py-24 ">
          <div className="flex flex-col lg:flex-row gap-16 justify-between">
            <div
              id="about-description"
              className="basis-2/3 flex flex-col content-center"
            >
              <div className="container mx-auto px-8">
                <h3 className="py-8">I am Vivian</h3>
                <p className=" text-xl font-light">
                  Peiwen Pan In 2017, Peiwen embarked on an extraordinary
                  journey. With no prior background in dance, she discovered
                  that pole dance held a unique power over her. It was more than
                  just a hobby; it was her calling. What drew Peiwen into the
                  captivating world of pole dance was its undeniable allure and
                  the challenges it posed.
                </p>
                <p className="text-xl font-light pt-6">
                  This enchanting art form offered her both a sense of
                  completion and the thrill of facing the unknown. It was here
                  that she found her purpose - to build the strength, grace, and
                  skills necessary to conquer gravity and master the art of pole
                  dance. Peiwen loves doing tricks on spin pole, inversion and
                  dancing in heels.
                </p>
              </div>
            </div>
            <div className="basis-1/3">
              <Image src={selfPhoto} alt="I am vivian" />
            </div>
          </div>
        </div>
      </Section>
      <Section
        id="courses"
        className="border border-y-1 border-gray-300 bg-white"
      >
        <div className="container mx-auto">
          <h3 className="pt-16 pb-8 pl-8 sm:pl-0">Courses </h3>
          <div className="flex flex-col md:flex-row md:space-x-8 justify-between pb-16 md:pb-24">
            <div className="basis-1/3 ">
              <div className="text-center">
                <Image src={course1} alt="dance Course 1" />
              </div>
              <div className="block-wrap aspect-square flex justify-center items-center  m-8 mt-8 md:mx-0 mb-0">
                <div className="text-center">
                  <h4>Any age</h4>
                  <p>From 18 and above, enjoy yourself!</p>
                </div>
              </div>
            </div>
            <div className=" basis-1/3 flex flex-col-reverse md:flex-col ">
              <div className="block-wrap aspect-square flex justify-center items-center m-8 md:m-0 ">
                <div className="text-center">
                  <h4>Any shape</h4>
                  <p>Flexabilty and Technique to lift yourself up.</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Image src={course2} alt="dance Course 1" />
              </div>
            </div>
            <div className=" basis-1/3 m-0">
              <div className="text-center">
                <Image src={course3} alt="dance Course" />
              </div>
              <div className="block-wrap aspect-square flex justify-center items-center m-8 mt-8 md:mx-0 mb-0">
                <div className="text-center">
                  <h4>Any gender</h4>
                  <p>Enjoy your body movement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="schedule">
        <div className="container mx-auto  p-8 md:p-0 md:py-8">
          <h3 className="my-8">Schedule</h3>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="basis-1/2 hidden min-[410px]:block ">
              <Calendar />
            </div>
            <div className="basis-1/2">
              <div className="flex flex-row">
                <div className="aspect-square w-12 bg-purple-600 mr-4"></div>
                <h4>Beginner Class</h4>
              </div>
              <h5 className="mt-4">Sunday 12:00 - 14:00</h5>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>
              <div className="flex flex-row mt-8">
                <div className="aspect-square w-12 bg-blue-600 mr-4"></div>

                <h4>Intermediate Class</h4>
              </div>
              <h5 className="mt-4">Friday 12:00 - 14:00</h5>
              <p className="mt-4">
                am felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                elementum{" "}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" className="bg-white">
        <div className="container mx-auto flex flex-col my-20 md:flex-row gap-8  py-16 md:py-24">
          <div className="basis-1/2">
            <h3>Address</h3>
            <address className="mt-8">
              <dl>
                <dt className="h5">Address:</dt>
                <dd className="mt-5 not-italic font-light">
                  The Dance studio Name Inc.
                  <br />
                  8901 Marmora Road, WA, US.
                </dd>
                <dt className="h5 mt-7 ">Telephones:</dt>
                <dd className="mt-5 not-italic font-light">
                  <a href="callto:#">+1 800 123 4567</a>
                  <br />
                  <a href="callto:#">+1 800 321 7654</a>
                </dd>
              </dl>
            </address>
          </div>
          <div className="basis-1/2">
            <h3>Contact Me</h3>
            <Form />
          </div>
        </div>
      </Section>
    </>
  );
}
