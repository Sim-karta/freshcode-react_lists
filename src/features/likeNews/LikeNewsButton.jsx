import Button from "../../shared/ui/Button/Button";
import { useCallback } from "react";

const LikeNewsButton = (props) => {
    const { className, ariaLabel, setIsLike, children } = props;

    const onClick = useCallback(
        (event) => {
            event.stopPropagation();
            setIsLike((liked) => !liked);
        },
        [setIsLike],
    );

    return (
        <Button className={className} ariaLabel={ariaLabel} onClick={onClick}>
            {children}
        </Button>
    );
};

export default LikeNewsButton;
