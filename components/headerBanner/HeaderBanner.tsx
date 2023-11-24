interface NameProp {
  name: string;
}

function HeaderBanner({ name }: NameProp) {
  return (
    <div className="min-h-[300px] bg-slate-500 text-white flex items-center justify-center">
      <h2 className="text-3xl">{name}</h2>
    </div>
  );
}

export default HeaderBanner;
