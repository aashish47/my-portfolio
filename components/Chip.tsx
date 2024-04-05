interface chipProps {
    text: string;
}

const Chip = ({ text }: chipProps) => {
    return <div className={` bg-purple-700 rounded-full px-3 py-1 text-sm font-semibold`}>{text}</div>;
};

export default Chip;
