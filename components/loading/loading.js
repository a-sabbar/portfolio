
export default function Loading({style} = Props) {
    const words = ["こんにちは", "مرحبًا", "Hello", "Bonjour", "안녕하세요"];
    return (
        <div className={`z-[50] w-screen h-screen overflow-hidden bg-black top-0 left-0 fixed ${style} transition-all duration-1000 ease-in-out z-100`}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-[10px] items-center overflow-hidden  min-w-[350px] ">
                <div className="min-w-[20px]  min-h-[20px] bg-white rounded-full"/>
                <div className="min-w-[300px] min-h-[55px] max-h-[55px] relative ">
                    <div className="text-6xl font-bold text-white animation-text flex flex-col absolute top-0 left-0 moveTextVertically ">
                        <div className="min-w-full min-h-[65px] mb-[5px]"></div>
                        {
                            words.map((word, index) => {
                                return <div key={index} className="min-w-full mb-[5px]">{word}</div>
                            })
                        }
                    </div>
                </div>
            </div>
      </div>
    );
}