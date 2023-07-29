import Image from "next/image";
export const metadata = {
    title: "User Authentication | Manna Palace Application",
    description:
      'This is the unofficial website of the Manna Palace Application. ',
  };

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className=" m-0 w-full p-0 bg-[#faf9f5] overflow-hidden">
        {/* <nav className="absolute top-0 left-0 right-0 w-full bg-transparent-black py-2 shadow-lg">
            <div className="w-11/12 mx-auto flex justify-between items-center">
            <Image src="/logo.png" alt="logo" height={40} width={90} />
            <div className="flex gap-3 items-center">Other stuffs here</div>
            </div>
        </nav> */}
      <div className="relative mx-auto flex min-h-screen w-full flex-col md:h-screen md:flex-row">
        {/*<div className="flex w-full items-end bg-login-image bg-cover bg-[60%] py-8 md:w-[700px] md:py-10 xl:w-[950px]">
          <div className="mx-auto w-11/12 space-y-6 text-white md:w-10/12">
             <div>
              <h1 className="text-xl font-semibold text-primary md:text-2xl">
                The Rice Farmer&apos;s Guide
              </h1>
              <p className="text-sm md:text-base">
                Explore our guides using our advisory tools and training
                materials and unlock the full potential of your rice farming
                journey!
              </p>
            </div>
            <ol className="hidden list-disc space-y-3 md:block">
              <li className="ml-4">
                Best practices for farmers from crop pre-planting to
                post-planting phase.
              </li>
              <li className="ml-4">
                Fertilizer scheduling, preventive and control measures for
                sustainable pest and disease management.
              </li>
            </ol>
            <div className="hidden w-full justify-end md:flex">
              <p className=" text-primary">Sign up now!</p>
            </div> 
          </div>
        </div>*/}
        <div className="flex w-full items-center justify-center">
          <div className="mx-auto w-11/12 space-y-3 py-8 sm:w-[400px] md:mt-24 md:w-[350px] md:py-28 xl:w-[400px]">
            {children}
          </div>
        </div>
        {/* <div className="relative w-full h-full overflow-hidden">
            
        </div> */}
        <div className="w-[70%] h-full rounded-bl-full bg-[#f7dcc7] top-0 bottom-0 right-0 absolute">
                
        </div>
      </div>
    </div>
  );
}
