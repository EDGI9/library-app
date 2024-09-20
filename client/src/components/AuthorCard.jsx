const AuthorCard = (props) => {

    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="grow md:w-2/5 max-w-[600px]">
                {/* Replace image with props.author.image */}
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={600} width={600} alt="" />
            </div>
            <div className="flex flex-col md:w-3/5 gap-4">
                <h1 className="text-2xl">Author name</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    ) 
};
export default AuthorCard;