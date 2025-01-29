const MissingPage = () => {
    return (
        <div className="flex justify-center h-96 items-center">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 flex justify-center max-h-32">
                <h2 className="text-5xl text-primary font-bold">
                    Page not Found
                </h2>
                <p className="text-1xl justify-self-center text-slate-400">
                    Unable to find the page.
                </p>
            </div>
        </div>
    );
};

export default MissingPage;
