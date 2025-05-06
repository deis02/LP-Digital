import Head from "../components/Head";
import Container from "../components/Container";
import Container1 from "../components/Container1";

const Home = () => {
  return (
    <div className="w-full relative bg-[#f8f7fc] overflow-hidden flex flex-col items-start justify-start gap-11 leading-[normal] tracking-[normal]">
      <Head />
      <Container />
      <Container1 />
      <footer className="self-stretch border-[#e4e4e4] border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center !pt-[18px] !pb-5 !pl-5 !pr-5 text-left text-[12px] text-[#929292] font-urbanist">
        <div className="relative font-semibold">
          ©2025 Lexa. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
