"use client";
import ApiServices from "@/services/Apiservices";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "./SectionTitle";
import Loadding from "./Loadding";
import { UIStore } from "@/services/pullstate/store";

export default function SingleCareer(props: { slug: string }) {
  const getData = async () => ApiServices.getSingleCareer(props.slug);
  const id = UIStore.useState((s) => s.selectLanguage);

  const { data, isLoading } = useQuery({
    queryKey: ["career"],
    queryFn: getData,
  });

  const sendEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=hr@bhumeeng.com",
    );
  };
  if (isLoading) return <Loadding />;
  return (
    <section className="py-52 md:pt-52 lg:pt-52">
      <div className="container">
        <SectionTitle
          title="Join Us to Carve Your Career with Exposure and Growth"
          ctitle="加入我们，通过曝光和成长来开拓您的职业生涯"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="mb-10 md:mb-16">
          <p
            className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
            data-aos="fade-up"
          >
            {id == "Chinese"
              ? "我们正在 Bhume 建立一种文化，让优秀的人（像您一样）能够尽其所能地工作。如果您准备好发展自己的职业生涯，那么您来对地方了。"
              : "We're building a culture at Bhume where amazing people (like you) can do their best work. If you're ready to grow your career, you've come to the right place."}
          </p>
        </div>
        <div
          className="mx-auto max-w-screen-xl px-4 md:px-8"
          data-aos="fade-up"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <div className="h-full overflow-hidden rounded-lg bg-gray-100  md:h-auto">
                <img
                  src="/assets/resume.png"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:pt-8">
              {/* {stringToHTML(data?.longDescription)} */}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.longDescription,
                }}
              ></div>
              <div className="mt-5">
                <a
                  onClick={sendEmail}
                  className="inline-block cursor-none rounded-lg bg-[#014aad] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100  md:text-base"
                >
                  Apply now
                </a>
              </div>
              {/* {longData} */}
              {/* <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Key Responsibilities
              </h1>
              <ul className="mb-6 max-w-md list-inside list-disc space-y-1  text-gray-500 dark:text-gray-400 md:text-nowrap">
                <li>
                  Develop and maintain robust and scalable web applications
                  using ReactJS and NodeJS.
                </li>
                <li>
                  Collaborate with cross-functional teams to design, implement,
                  and deploy new features.
                </li>
                <li>Ensure the technical feasibility of UI/UX designs.</li>
              </ul>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                Qualifications
              </h2>
              <ul className="mb-6 max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400 md:text-nowrap">
                <li>
                  Proven experience as a Full Stack Web Developer or similar
                  role.
                </li>
                <li>Proficiency with ReactJS and NodeJS.</li>
                <li>
                  Strong understanding of web fundamentals including HTML5,
                  CSS3, and JavaScript.
                </li>
              </ul>
              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                More Details
              </h2>
              <ul className="mb-6 max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400 md:text-nowrap">
                <li>Job Requisition: 1</li>
                <li>Job Location: Toronto</li>
                <li>Salary: Negotiable</li>
                <li>Application Deadline: March 29, 2024</li>
              </ul>
              <div>
                <a
                  href="#"
                  className="inline-block cursor-none rounded-lg bg-[#014aad] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100  md:text-base"
                >
                  Apply now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
