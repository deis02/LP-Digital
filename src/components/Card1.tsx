import { useMemo } from "react";
import PropTypes from "prop-types";

const Card1 = ({
  className = "",
  image14,
  image14IconWidth,
  netflix,
  divider,
  rp25000,
}) => {
  const image14IconStyle = useMemo(() => {
    return {
      width: image14IconWidth,
    };
  }, [image14IconWidth]);

  return (
    <div
      className={`w-60 shadow-[0px_26px_36px_rgba(0,_0,_0,_0.06)] rounded-3xl bg-[#fff] border-[#e4e4e4] border-solid border-[1px] box-border shrink-0 flex flex-col items-start justify-start !pt-2.5 !pb-[18px] !pl-[11px] !pr-[11px] gap-6 text-left text-[24px] text-[#111729] font-urbanist ${className}`}
    >
      <div className="self-stretch h-[172px] rounded-3xl bg-[#f3f3f3] border-[#ebebeb] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center !p-3xs">
        <img
          className="w-[172px] relative max-h-full object-cover"
          loading="lazy"
          alt=""
          src={image14}
          style={image14IconStyle}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="self-stretch h-9 flex flex-row items-center justify-start !pt-0 !pb-0 !pl-2 !pr-2 box-border gap-1">
          <h3 className="!m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit]">
            {netflix}
          </h3>
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
        <div className="self-stretch flex flex-row items-center justify-start !pt-0 !pb-0 !pl-2 !pr-2 gap-2.5 text-[12px] text-[#929292]">
          <div className="flex-1 flex flex-col items-start justify-center gap-1">
            <div className="relative font-semibold">Mulai dari</div>
            <b className="self-stretch relative text-[16px] text-[#111729]">
              {rp25000}
            </b>
          </div>
          <div className="h-10 rounded-lg bg-[#12182a] overflow-hidden flex flex-row items-center justify-center !pt-0.5 !pb-0.5 !pl-[21px] !pr-[21px] box-border gap-1 text-[14px] text-[#fff]">
            <div className="relative font-semibold">Lihat</div>
            <img
              className="w-5 relative max-h-full"
              alt=""
              src="/arrow-outward.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  image14: PropTypes.string,
  netflix: PropTypes.string,
  divider: PropTypes.string,
  rp25000: PropTypes.string,

  /** Style props */
  image14IconWidth: PropTypes.string,
};

export default Card1;
