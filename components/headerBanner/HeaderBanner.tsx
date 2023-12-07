interface NameProp {
  name: string;
  bgPhoto: string;
}

function HeaderBanner({ name, bgPhoto }: NameProp) {
  return (
    <div
      className={`min-h-[300px] text-white flex items-center justify-center`}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${bgPhoto})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl">{name}</h2>
    </div>
  );
}

export default HeaderBanner;
