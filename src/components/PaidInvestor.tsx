import React from 'react'

const PaidInvestor = () => {
  return (
    <div className="relative grid grid-cols-2 gap-12 items-center bg-middle px-52 py-24">
      <div className="z-10">
        <h2 className="text-4xl font-medium"> $7M + paid out to investors</h2>
        <h6 className="mt-10 text-lightGrey font-regular">
          Next Invest has already paid out over $7M in cash returns to
          investors. Earn potential cash payments through unique revenue share
          and debt financing investments
        </h6>
      </div>
      <div>
        <img src={"/images/16.svg"} alt="chart-img" />
      </div>
      <img
        src={"/images/1.svg"}
        alt="layer-img"
        className="bottom-0 w-[390px] left-0 absolute z-0"
      />
      <img
        src={"images/Subtract.svg"}
        alt="img"
        className="absolute w-10 left-52 top-20"
      />
      <img
        src={"images/15.svg"}
        alt="img"
        className="absolute w-5 right-28 bottom-28"
      />
      <img
        src={"images/14.svg"}
        alt="img"
        className="absolute w-24 top-0 right-20"
      />
    </div>
  );
}

export default PaidInvestor