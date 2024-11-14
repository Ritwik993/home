import Image from "next/image";

const Navbar=()=>{
    return(
        <div className="h-[70px] bg-white fixed right-0 left-0 shadow-md py-[25px] md:pl-[100px] pl-[40px] text-[26px] font-medium z-10">
            <div className="logo">
                <Image src="/logo.svg" alt="" width={110} height={17}/>
            </div>
        </div>
    )
}

export default Navbar;