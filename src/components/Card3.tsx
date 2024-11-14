import Image from "next/image";

const Card3=()=>{
    return(
        <div className="flex md:flex-row flex-col justify-between gap-[80px] bg-[#EDFAFE] shadow-xl  rounded-[13px] pl-[30px] pt-[100px] md:pr-[100px] pr-[40px] pb-[20px] md:mt-[60px] mt-[30px] ml-[20px] mr-[20px] md:ml-0 md:mr-0">
            <div className="md:w-[400px] w-auto">
                <h2 className="text-[#423C65] leading-[34px] font-semibold text-[26px] text-left">Start for free</h2>
                <p className="text-[#545262] text-[16px] mt-[20px] text-left">BrandNav Screener has a free plan that you can start with and then upgrade to a paid account as your needs grow. BrandNav offers subscription packages for any budget, starting from only $19/month.</p>
            </div>
            <div>
                <Image src="/image 3.png" alt="" width={400} height={314} className="object-cover"/> 
            </div>
        </div>
    )
}

export default Card3;