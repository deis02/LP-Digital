import PropTypes from "prop-types";

const Card = ({ className = "", logo, capcut, divider, arrowOutward }) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-[#fff] border-[#e4e4e4] border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center !pt-3 !pb-3 !pl-[11px] !pr-[11px] gap-5 text-left text-[18px] text-[#111729] font-urbanist ${className}`}
    >
      <img
        className="w-[88px] rounded-xl max-h-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={logo}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[156px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-1">
          <b className="flex-1 relative">{capcut}</b>
          <div className="rounded-lg bg-[#dbf0c0] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-2 !pr-2 text-[10px]">
            <div className="relative font-semibold">{`Shared & Private`}</div>
          </div>
        </div>
        <img
          className="self-stretch h-px relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src={divider}
        />
        <div className="self-stretch flex flex-row items-center justify-start gap-2.5 text-[12px] text-[#929292]">
          <div className="flex-1 flex flex-col items-start justify-center gap-1">
            <div className="relative font-semibold">Mulai dari</div>
            <b className="self-stretch relative text-[16px] text-[#111729]">
              Rp25.000
            </b>
          </div>
          <div className="h-10 flex-[0.6174] rounded-xl border-[#e0e0e0] border-solid border-[1px] box-border overflow-hidden flex flex-row items-center justify-center !pt-0.5 !pb-0.5 !pl-[21px] !pr-[21px] gap-1 text-[14px] text-[#12182a]">
            <div className="relative font-semibold">Lihat</div>
            <img
              className="w-5 relative max-h-full"
              loading="lazy"
              alt=""
              src={arrowOutward}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  capcut: PropTypes.string,
  divider: PropTypes.string,
  arrowOutward: PropTypes.string,
};

export default Card;
