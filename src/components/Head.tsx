import PropTypes from "prop-types";

const Head = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_20px_44px_rgba(0,_0,_0,_0.04)] bg-[#fff] flex flex-col items-start justify-start !pt-[39px] !pb-3 !pl-5 !pr-5 gap-4 text-left text-[16px] text-[#b0b0b0] font-urbanist ${className}`}
    >
      <header className="w-[372px] flex flex-row items-center justify-start gap-3 top-[0] z-[99] sticky text-left text-[16px] text-[#929292] font-urbanist">
        <div className="flex-1 flex flex-col items-start justify-center">
          <div className="relative font-medium">
            Hai, aplikasi yang kamu cari
          </div>
          <b className="self-stretch relative text-[30px] text-[#111729]">
            Pasti ada di sini ✨
          </b>
        </div>
        <img
          className="w-10 rounded-xl max-h-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
        />
      </header>
      <div className="w-[372px] h-16 rounded-2xl bg-[#fff] border-[#dfdfdf] border-solid border-[1px] overflow-hidden shrink-0 flex flex-row items-center justify-start !pt-[18px] !pb-[18px] !pl-4 !pr-4 gap-2 sm:flex sm:self-stretch sm:w-auto sm:flex-row sm:gap-2 sm:items-center sm:justify-start sm:!pl-4 sm:box-border">
        <img className="w-6 relative max-h-full" alt="" src="/search.svg" />
        <div className="relative font-medium">
          Cari aplikasi apun di sini...
        </div>
      </div>
    </section>
  );
};

Head.propTypes = {
  className: PropTypes.string,
};

export default Head;
