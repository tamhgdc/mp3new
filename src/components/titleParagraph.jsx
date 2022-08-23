function TitleParagraph({title, children}) {
    return (
        <div className="w-[480px] flex-wrap md:w-[740px] lg:w-[965px] xl:w-[1210px] grid grid-cols-2 mx-auto mt-5 px-[10px]">
            <h1 className="font-bold text-xl">{title}</h1>
            {children}
        </div>
    );
}

export default TitleParagraph;