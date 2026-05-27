import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
<section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-24 lg:pb-40 xl:pt-52">
        <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h3>I'm Martin Dangev</h3>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h5>Full-Stack Software Engineer</h5>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
  Hello and welcome! I’m Martin Dangev, a Full-Stack Software Engineer.
  This is my personal portfolio where I showcase my work and projects.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/banner-img.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/about-me/my-picture.jpg")}
          alt="my-picture"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
