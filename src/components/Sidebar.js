import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const sections = [
  {
    label: "You",
    items: [
      { icon: "🏠", text: "Home", to: "/" },
      { icon: "🕒", text: "History", to: null },
      { icon: "📂", text: "Playlist", to: null },
      { icon: "⏰", text: "Watch Later", to: null },
      { icon: "👍", text: "Liked Videos", to: null },
      { icon: "⬇️", text: "Downloads", to: null },
    ],
  },
  {
    label: "Subscriptions",
    items: [
      { icon: "⭐", text: "YouTube Premium", to: null },
      { icon: "🎵", text: "YouTube Music", to: null },
      { icon: "🧒", text: "YouTube Kids", to: null },
    ],
  },
  {
    label: "Explore",
    items: [
      { icon: "🛍️", text: "Shopping", to: null },
      { icon: "🎵", text: "Music", to: null },
      { icon: "🎬", text: "Movies", to: null },
      { icon: "📡", text: "Live", to: null, live: true },
      { icon: "🎮", text: "Gaming", to: null },
      { icon: "📰", text: "News", to: null },
      { icon: "🏏", text: "Sports", to: "/sports" },
      { icon: "📚", text: "Courses", to: "/courses" },
    ],
  },
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpenMenu);
  const location = useLocation();

  if (!isMenuOpen) return null;

  return (
    <div className="w-60 min-w-[240px] bg-white border-r border-gray-100 h-screen sticky top-0 overflow-y-auto overflow-x-hidden">

      {sections.map((section, si) => (
        <div key={section.label}>
          {si > 0 && <div className="h-px bg-gray-100 mx-3 my-2" />}
          <div className="px-3 pt-5 pb-1">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 px-2 mb-1">
              {section.label}
            </p>
            {section.items.map((item) => {
              const isActive = item.to && location.pathname === item.to;
              const Wrapper = item.to ? Link : "div";

              return (
                <Wrapper
                  key={item.text}
                  to={item.to || undefined}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer
                    text-sm font-medium no-underline transition-all duration-150 relative
                    ${isActive
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute left-0 top-[18%] h-[64%] w-[3px] bg-gray-800 rounded-r-full" />
                  )}
                  <span className="text-base w-5 text-center flex-shrink-0 leading-none">
                    {item.icon}
                  </span>
                  <span className="flex-1 truncate">{item.text}</span>
                  {item.live && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 animate-pulse" />
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
