import Card1 from "./Card1";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-center !pt-0 !pb-0 !pl-5 !pr-5 gap-5 text-left text-[20px] text-[#111729] font-urbanist ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start !pt-0 !pb-0 !pl-2 !pr-2 gap-[18px] mq338:flex-wrap">
        <b className="flex-1 relative inline-block min-w-[143px]">
          Paling dipilih 🔥🔥🔥
        </b>
        <div className="relative text-[16px] font-semibold text-[#848484] text-right">
          Lihat semua
        </div>
      </div>
      <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start gap-4 text-[24px]">
        <Card1
          image14="/image-14@2x.png"
          netflix="Netflix"
          divider="/divider.svg"
          rp25000="Rp25.000"
        />
        <Card1
          image14="/image-15@2x.png"
          image14IconWidth="158px"
          netflix="Canva"
          divider="/divider.svg"
          rp25000="Rp15.000"
        />
      </div>
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
