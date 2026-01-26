import ReadContent from "./ReadContent"
export default function Content({dark,blogsRef}) {
  return (
    <div className="w-full p-3 flex flex-col items-center">
        <div className="w-full flex justify-between break-1:w-94.25 break-2:w-143.25 break-3:w-[768.4px] xl:w-270" ref={blogsRef}>
            <p className="text-[min(4.7vw,20px)] font-medium xl:text-[30px]">مطالب خواندنی</p>
            <div className="flex items-center">
                <div className="text-orange-400 flex items-center text-[min(4vw,17px)] xl:text-[20px]">مشاهده همه مطالب</div>
            <p className="mt-[-0.8px]"><svg xmlns="http://www.w3.org/2000/svg" width="min(5vw,21px)" height="min(5vw,21px)" viewBox="0 0 24 24" fill="#ff8500" stroke="#ff8500" strokeWidth="0.00024"><polygon points="15,2 13.6,3.4 20.2,10 13.6,16.6 15,18 23,10" transform="rotate(180,12,12)" /></svg></p>
            </div>
        </div>
          <div className="flex flex-wrap gap-4 mt-5 justify-center break-1:w-94.25 break-2:w-143.25 break-3:w-[768.4px] xl:w-270" >
            <ReadContent date="21 مرداد 1403" description="طرز تهیه قهوه دمی با دستگاه اروپرس" img="./blog-1.png" dark={dark}></ReadContent>
            <ReadContent date="21 مرداد 1403" description="یک نوشیدنی هیجان انگیز در سطح جهانی" img="./blog-2.png"dark={dark}></ReadContent>
            <ReadContent date="21 مرداد 1403" description="طرز تهیه یک فنجان کافه زینو برزیلی" img="./blog-3.png"dark={dark}></ReadContent>
            <ReadContent date="21 مرداد 1403" description="طرز تهیه دالگونا مناسب روز های کرونایی"img="./blog-4.png"dark={dark}></ReadContent>
          </div>
    </div>
  )
}
