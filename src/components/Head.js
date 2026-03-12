import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { isThemeDark } from "../utils/themeslice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();
    const isDark = useSelector(store => store.theme.isDark);

    const toggleHandler = () => {
        dispatch(toggleMenu());
    };

    const Themehandler = () => {
        dispatch(isThemeDark());
    };

    useEffect(() => {
        const getSuggestions = async () => {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            setSuggestions(json[1]);
        };

        const timer = setTimeout(() => getSuggestions(), 200);

        return () => clearTimeout(timer);

    }, [searchQuery]);

    return (
        <div className={`flex items-center justify-between p-2 shadow-lg h-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
            
            <div className="flex items-center gap-4">
                <img
                    className="h-5 cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
                    alt="hamburger"
                    onClick={toggleHandler}/>
                <img
                    className="h-14 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzCvQhm0rpCNiwTurKc7d_LzYIFAYGjEeng&s"
                    alt="youtube"/>
            </div>

            <div className="relative flex items-center">
                <input
                    className="border border-gray-900 rounded-l-full p-2 focus:outline-none w-96"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => setShowSuggestions(false)}
                    onFocus={() => setShowSuggestions(true)}/>

                <button className="border border-gray-900 border-l-0 rounded-r-full p-2">
                    🔍
                </button>

                {showSuggestions && (
                    <div className="absolute top-12 left-0 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 cursor-pointer">
                        <ul>
                            {suggestions.map((suggest) => (
                                <li key={suggest} className="hover:bg-gray-50 p-2 shadow-sm">
                                    🔍 {suggest}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="p-2 m-2">
                <h1 className="cursor-pointer" onClick={Themehandler}>
                    {isDark ? "🌕" : "🌙"}
                </h1>
            </div>

            <div>
                <img
                    className="h-8 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&s"
                    alt="profile"/>
            </div>

        </div>
    );
};

export default Head;