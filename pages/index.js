import styles from "../styles/home.module.css";
import Image from "next/image";
import selfPhoto from "../public/assets/about_0.jpg";
import course1 from "../public/assets/course_1.jpeg";
import course2 from "../public/assets/course_2.jpg";
import course3 from "../public/assets/course_5.jpg";

import Calendar from "../components/Calendar";
import Section from "../components/Section";

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
                <h3>I am Vivian</h3>
                <p className="mt-12 text-xl font-light">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum
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
          <h3 className="pt-16 pl-8 sm:pl-0">Courses </h3>
          <div className="flex flex-col md:flex-row md:space-x-8 justify-between py-16 md:py-24">
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
      <Section id="contact">
        <div className="container mx-auto flex flex-col my-20 md:flex-row gap-8 p-8 md:p-0">
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
            <form className="mt-12">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="basis-1/3">
                  <label htmlFor="name" className="text-lg">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded dark:bg-gray-800"
                  />
                </div>
                <div className="basis-1/3">
                  <label htmlFor="email" className="text-lg">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded dark:bg-gray-800"
                  />
                </div>
                <div className="basis-1/3">
                  <label htmlFor="phone" className="text-lg">
                    Mobile
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="w-full p-3 rounded dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="message" className="text-lg">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="..."
                  className="w-full p-3 rounded dark:bg-gray-800"
                ></textarea>
              </div>
              <div className="mt-8 flex flex-row gap-8 justify-start">
                <button
                  className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  SUBMIT
                </button>
                <p className="text-gray-500">* required field</p>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
