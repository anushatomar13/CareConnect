import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">


          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 CareConnect
            </p>
            <Link href="/?admin=true" className="text-green-500 underline">
              Admin Access  (Protected)
            </Link>
          </div>
        </div>
      </section>

      <video
  src="/assets/images/start-page.mp4"
  className="side-img max-w-[50%]"
  width={1000}
  height={1000}
  autoPlay
  loop
  muted
/>
    </div>
  );
};

export default Home;
