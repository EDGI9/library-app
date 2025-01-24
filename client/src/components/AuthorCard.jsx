import { lazy } from 'react';
const Loading = lazy(() => import('./Loading.jsx'));

const AuthorCard = (props) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="grow md:w-2/5 max-w-[600px]">
                <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    height={600}
                    loading="lazy"
                    width={600}
                    alt=""
                />
            </div>
            <div className="flex flex-col md:w-3/5 gap-4">
                <h1 className="text-2xl">Jane Walker</h1>
                <p className="text-slate-400">
                    Jane Walker is an acclaimed novelist, essayist, and poet
                    whose works delve into the intricate tapestry of human
                    emotions and relationships. Born and raised in a small
                    coastal town in Maine, Jane grew up surrounded by the beauty
                    of the Atlantic Ocean, which often serves as a backdrop in
                    her evocative narratives.
                </p>
            </div>
        </div>
    );
};
export default AuthorCard;
