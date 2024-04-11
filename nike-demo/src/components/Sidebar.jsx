const Sidebar = ({ visible }) => {
    const hiddenClass = visible ? null : "hidden";

    return (
        <div
            className={`fixed flex flex-col w-[250px] h-screen right-0 bg-slate-900 transition-all ${hiddenClass}`}
        ></div>
    );
};
export default Sidebar;
