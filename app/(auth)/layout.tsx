import Image from "next/image";
import Link from "next/link";
export const metadata = {
    title: "User Authentication | Manna Palace Application",
    description:
      'This is the unofficial website of the Manna Palace Application. ',
  };
import FoodImage from "~/public/09.png"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className=" m-0 w-full p-0 bg-[#faf9f5] overflow-hidden scroll-smooth">
        <nav className='absolute z-50 top-0 left-0 right-0 w-full bg-none py-2 shadow-sm bg-white '>
          <div className='w-11/12 mx-auto flex justify-between items-center'>
            <Link href="/">
              <Image src="/logo.png" alt="logo" height={40} width={90} />
            </Link>
          </div>
        </nav>
      <div className="relative z-40 mx-auto flex min-h-screen w-10/12 flex-col md:h-screen md:flex-row">
        <div className="flex w-fit items-center -mt-14 justify-center">
          <div className="w-fit space-y-3 sm:w-[400px] md:mt-24 md:w-[350px] md:py-28 xl:w-[400px]">
            {children}
          </div>
        </div>
      </div>
      <div className="w-[50%] z-20 h-full rounded-bl-full bg-[#f7dcc8] top-0 bottom-0 right-0 absolute flex justify-center items-center overflow-hidden">
          <div className="rounded-full h-[100%] w-[100%] -mt-72 -mr-72 relative">
            <Image className=" object-cover" src={FoodImage} alt="" fill />
          </div>
        </div>
    </div>
  );
}
