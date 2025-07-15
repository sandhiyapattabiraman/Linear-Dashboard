import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";



function Inbox() {
    return (
        <>
            <div className="py-2 px-2  w-full h-full">
                <div className=" h-full flex  border-1 border-zinc-800 rounded-sm bg-zinc-950">
                    <div className="w-[44%] border-r-1 border-zinc-800 ">
                        <div className=" py-2 px-4 border-b-1 border-zinc-800 flex justify-between items-center">
                            <p className="text-white font-medium text-sm">Inbox</p>

                            <div className="flex gap-4 items-center">
                                <IoFilter className="text-zinc-400" />
                                <HiAdjustmentsHorizontal className="text-zinc-400 size-5" />
                            </div>

                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
                        <svg viewBox="0 0 78 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-KMFKY gXEQRR" className="size-25"><path stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5" d="M10.4 9.11A10 10 0 0 1 20.22 1h37.56a10 10 0 0 1 9.82 8.11l8.11 42.2a10 10 0 0 1-9.82 11.9H54.7a6.36 6.36 0 0 0-5.65 3.45 6.36 6.36 0 0 1-5.66 3.45H34.6a6.36 6.36 0 0 1-5.66-3.45 6.36 6.36 0 0 0-5.65-3.46H12.1a10 10 0 0 1-9.8-11.89l8.11-42.2Z"></path><path stroke="lch(90.65% 1.35 272 / 1)" stroke-width="1.5" d="M14.3 9.03a5 5 0 0 1 4.91-4.08H58.8a5 5 0 0 1 4.91 4.08l8.07 43.22a6 6 0 0 1-5.9 7.1H52.76a5.72 5.72 0 0 0-5.24 3.41 5.72 5.72 0 0 1-5.23 3.42h-6.58a5.72 5.72 0 0 1-5.23-3.42 5.72 5.72 0 0 0-5.24-3.4h-13.1a6 6 0 0 1-5.9-7.1L14.3 9.02Z"></path><path stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5" d="m2.36 55.6 3.2 14.06A12 12 0 0 0 17.26 79h43.48a12 12 0 0 0 11.7-9.34l3.2-14.06"></path></svg>
                        <p className="text-zinc-400 text-sm font-medium">No notifications</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inbox;