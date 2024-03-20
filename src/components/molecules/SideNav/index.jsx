import Link from "next/link";
import Image from "next/image";
import SupportIcon from "../../atoms/icons/SupportIcon";

const SideNav = () => {
  return (
    <div className="flex pb-10">
      <div className="px-6 py-7 bg-white rounded-3xl flex flex-col">
        <div>
          <Link href="/">
            <Image
              src="https://duaruqyah.com/assets/dua-logo.svg"
              width="51"
              height="51"
              alt="Logo image"
              className="mx-auto"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center my-24 text-icon-color">
          <div className="space-y-6 py-2 *:block">
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/home.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/alldua.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/memorize.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/bookmark.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/ruqyah.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/dua-info.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="bg-content-color text-xl p-2.5 rounded-full">
                <Image
                  src="https://duaruqyah.com/assets/nav/books.svg"
                  width="20"
                  height="20"
                  alt="Nav Icon"
                  className="size-5"
                />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Link href="#">
            <div className="size-[51px] bg-primary rounded-[8px] flex justify-center items-center">
              <SupportIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
