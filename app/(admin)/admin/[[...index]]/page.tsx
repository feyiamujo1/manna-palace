import { notFound } from "next/navigation";
import Homepage from "~/components/HomePage";
// import { PortableText } from "@portabletext/react";
// import { getSection } from "~/sanity/sanity-utils";

import { paramToPath } from "~/lib/utils";

export const metadata = {
  title: "Dashboard | Upland Rice Maestro",
  description:
    'The rice farmer"s best companion. We provide every information you need to ensure a great harvest. ',
};

export default async function AdminDashboard({
  params,
}: {
  params: { index: string[] };
}) {
  const path = paramToPath(params.index);
//   const section = await getSection(path === "/" ? "dashboard" : path);

//   if (!section) {
//     notFound();
//   }

  return (
    <div>
      <Homepage />
    </div>
  );
}
