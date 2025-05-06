import Card from "./Card";
import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[780px] flex flex-col items-start justify-center !pt-0 !pb-0 !pl-5 !pr-5 box-border gap-5 text-left text-[20px] text-[#111729] font-urbanist ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start !pt-0 !pb-0 !pl-2 !pr-2">
        <b className="flex-1 relative">Mungkin kamu suka 😍</b>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2 text-[18px]">
        <Card
          logo="/logo@2x.png"
          capcut="Capcut"
          divider="/divider-2.svg"
          arrowOutward="/arrow-outward-2.svg"
        />
        <Card
          logo="/logo-1@2x.png"
          capcut="Apple Music"
          divider="/divider-2.svg"
          arrowOutward="/arrow-outward-2.svg"
        />
        <div className="self-stretch rounded-3xl bg-[#fff] border-[#e4e4e4] border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center !pt-3 !pb-3 !pl-[11px] !pr-[11px] gap-5">
          <img
            className="w-[88px] rounded-xl max-h-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/logo-2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[156px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-1">
              <b className="flex-1 relative">Viu</b>
              <div className="rounded-lg bg-[#dbf0c0] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-2 !pr-2 text-[10px]">
                <div className="relative font-semibold">{`Shared & Private`}</div>
              </div>
            </div>
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/divider-2.svg"
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
                  alt=""
                  src="/arrow-outward-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Card
          logo="/logo-3@2x.png"
          capcut="Zoom"
          divider="/divider-2.svg"
          arrowOutward="/arrow-outward-2.svg"
        />
        <Card
          logo="/logo-4@2x.png"
          capcut="AI Chat GPT"
          divider="/divider-2.svg"
          arrowOutward="/arrow-outward-2.svg"
        />
        <div className="self-stretch rounded-3xl bg-[#fff] border-[#e4e4e4] border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center !pt-3 !pb-3 !pl-[11px] !pr-[11px] gap-5 text-[20px]">
          <img
            className="w-[88px] rounded-xl max-h-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/logo-5@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[156px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-1">
              <b className="flex-1 relative">AI Claude</b>
              <div className="rounded-lg bg-[#dbf0c0] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-2 !pr-2 text-[10px]">
                <div className="relative font-semibold">{`Shared & Private`}</div>
              </div>
            </div>
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/divider-2.svg"
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
                  alt=""
                  src="/arrow-outward-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
