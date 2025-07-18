import { Plus } from "lucide-react";
import { FaRegStar } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { TbCopyXFilled } from "react-icons/tb";



function Views() {
    return (
        <>
            <div className="py-2 px-2 w-full h-full">
                <div className="h-full flex flex-col  border-1 border-zinc-800 rounded-sm bg-zinc-950">

                    <div className=" flex justify-between w-full pr-6 py-1 pl-8  border-b-1 border-zinc-800 ">
                        <div className="flex gap-3">
                            <div className="flex gap-3 items-center">
                                <p className="text-zinc-50 font-medium text-sm cursor-default"> Views</p>
                            </div>

                            <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group">
                                <FaRegStar className="text-zinc-400 size-4 group-hover:text-white" />
                            </div>

                            <div className="flex gap-3 items-center border-1 border-zinc-800 bg-zinc-900 px-2  rounded-sm">
                                <p className="text-zinc-50 font-medium text-xs cursor-default"> Issues</p>
                            </div>

                            <div className="flex gap-3 items-center border-1 border-zinc-800  hover:bg-zinc-900 px-2   rounded-sm group">
                                <p className="text-zinc-500 font-medium text-sm group-hover:text-zinc-50 cursor-default">Projects</p>
                            </div>

                            <div className="flex gap-3 items-center hover:bg-zinc-900 px-2  py-1 rounded-sm group">

                            </div>
                        </div>


                        <div className="flex gap-2 items-center py-1">

                            <div className="flex items-center gap-2 border-1 border-zinc-800 hover:bg-zinc-800 bg-zinc-900 px-2  py-0.5 rounded-sm">
                                <HiAdjustmentsHorizontal className="text-zinc-400 size-5" />
                                <p className="text-zinc-100 text-xs font-medium cursor-default">Display</p>
                            </div>

                            <div className="flex gap-2 items-center border-1 border-zinc-800 bg-zinc-900  hover:bg-zinc-800 px-2  py-1 rounded-sm group">
                                <Plus className=" text-zinc-400 group-hover:text-white size-4" />
                                <p className="text-zinc-200 text-xs font-medium cursor-default"> New View</p>
                            </div>

                        </div>

                    </div>




                    <div className="flex flex-col justify-center px-[37%]  h-full gap-6">
                        <div className="flex flex-col gap-3 ">
                            <svg viewBox="15 14 92 112" fill="none" aria-label="Empty custom views list illustration" className="size-23  pr-6"><path d="M20 110.4a2 2 0 0 1-1.26-1.85v-2.5a3 3 0 0 1 2.7-2.99L105 94.75v4.4a2 2 0 0 1-1 1.73l-41.78 24a6 6 0 0 1-5.22.37l-37-14.84Z" fill="lch(4.8% 0.7 272)" stroke="lch(19% 3.54 272 / 1)" stroke-width="1.5"></path><path d="M19.88 106.41a2 2 0 0 1-.27-3.6L61.8 78.5a6 6 0 0 1 5.18-.4l37.13 14.5a2 2 0 0 1 .27 3.6L62.2 120.5a6 6 0 0 1-5.18.4l-37.13-14.5Z" fill="lch(4.8% 0.7 272)" stroke="lch(19% 3.54 272 / 1)" stroke-width="1.5"></path><path d="M20 99.46a2 2 0 0 1-1.26-1.86v-2.5a3 3 0 0 1 2.7-2.99L105 83.8v4.4a2 2 0 0 1-1 1.73l-41.78 24a6 6 0 0 1-5.22.37L20 99.46Z" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M19.88 95.46a2 2 0 0 1-.27-3.6l42.2-24.33a6 6 0 0 1 5.18-.39l37.13 14.5a2 2 0 0 1 .27 3.6l-42.2 24.32a6 6 0 0 1-5.18.4l-37.13-14.5Z" fill="lch(4.8% 0.7 272)" stroke="lch(38.29% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M20 88.5a2 2 0 0 1-1.26-1.85v-2.5a3 3 0 0 1 2.7-3l83.55-8.3v4.4a2 2 0 0 1-1 1.73l-41.78 24a6 6 0 0 1-5.22.36l-37-14.84Z" fill="lch(4.8% 0.7 272)" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M19.88 84.5a2 2 0 0 1-.27-3.59l42.2-24.33A6 6 0 0 1 67 56.2l37.13 14.5a2 2 0 0 1 .27 3.59L62.2 98.6a6 6 0 0 1-5.2.4L19.88 84.5Z" fill="lch(4.8% 0.7 272)" stroke="lch(62.6% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M20.14 72.9a2 2 0 0 1-2.02-.99l-1.25-2.16a3 3 0 0 1 .85-3.94l68.2-48.97 2.2 3.8a2 2 0 0 1 0 2.01L63.94 64.32a6 6 0 0 1-4.34 2.93l-39.46 5.64Z" fill="lch(4.8% 0.7 272)" stroke="lch(90.65% 1.35 272 / 1)" stroke-width="1.5"></path><path d="M18.04 69.49a2 2 0 0 1-2.03-2.98L40.4 24.34a6 6 0 0 1 4.29-2.93l39.4-6.01a2 2 0 0 1 2.03 2.98L61.73 60.55a6 6 0 0 1-4.29 2.93l-39.4 6.01Z" fill="lch(4.8% 0.7 272)" stroke="lch(90.65% 1.35 272 / 1)" stroke-width="1.5"></path></svg>

                            <h2 className="text-zinc-300 text-lg font-medium">Views</h2>

                            <p className="text-zinc-400 text-sm ">Create custom views using filters to show only the issues or projects you want to see. You can save, share, and favorite these views for easy access and faster team collaboration.</p>

                            <p className="text-zinc-400 text-sm  gap-1 ">
                                You can also save any existing view by clicking the
                                <TbCopyXFilled className="rotate-225 text-zinc-400 group-hover:text-white inline-block mx-1" />
                                icon or by pressing
                                <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs mx-1">Alt</kbd>
                                <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1 text-xs mx-1">V</kbd>.
                            </p>
                        </div>

                        <div className="flex gap-4 justify-start mr-6">
                            <button className="bg-indigo-500 border-1 border-indigo-400 px-4 py-1 rounded-sm text-center text-sm text-white font-medium">Create new view</button>
                            <button className="bg-zinc-900 rounded-sm text-center text-sm font-medium border-1 border-zinc-800 py-1 px-4 text-white">Documentation</button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Views;