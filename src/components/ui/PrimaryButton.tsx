interface PrimaryButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  icon,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="px-4 py-2 font-semibold bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-800 rounded-full"
  >
    <div className="flex items-center gap-3">
      {icon && <span>{icon}</span>}
      <span className="font-semibold">{text}</span>
    </div>
  </button>
);
