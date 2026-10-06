import Button from "../../shared/ui/Button/Button";

const LikeNewsButton = (props) => {
    const { className, ariaLabel, onClick, children } = props;

    return (
        <Button className={className} ariaLabel={ariaLabel} onClick={onClick}>
            {children}
        </Button>
    );
};

export default LikeNewsButton;
