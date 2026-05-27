import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                   I’m a Full-Stack Software Engineer with around 4 years of experience,
  mainly working with Angular, TypeScript, and Spring Boot across two companies.

  I graduated from FINKI (FSCE) and have been continuously building and learning
  ever since. I enjoy creating clean, structured, and reliable software. </p>
  <p>

  Outside of work, I’m a big football fan, I enjoy a good coffee, and I like
  learning new things whenever I get the chance. I also value staying organized
  and improving my workflow.

  I can be a bit quiet at first, but I open up quickly and enjoy working with people.
                </p>

                <div className="grid grid-cols-2 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "4", label: "Years of experience" },
                    { count: "2", label: "Companies I have worked in" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
