type BoxIconProps = {
  icon: React.ReactNode;
  desc: string;
  label: string;
  isDark?: boolean;
};

const BoxIcon = ({ icon, desc, label, isDark = false }: BoxIconProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="opacity-70">{icon}</div>

      <div>
        <h3 className="text-2xl font-bold text-[#EE0033]">{label}</h3>
        <p className={`text-sm ${isDark ? "text-white/80" : "text-[#222]"}`}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BoxIcon;
