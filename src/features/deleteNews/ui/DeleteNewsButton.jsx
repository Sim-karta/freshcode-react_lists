import Button from "../../../shared/ui/Button/Button";
import { useCallback } from "react";

const DeleteNewsButton = (props) => {
    const { className, ariaLabel, cardId, onDelete, children } = props;

    const onClick = useCallback(
        (event) => {
            event.stopPropagation();
            onDelete(cardId);
        },
        [onDelete],
    );

    return (
        <Button className={className} ariaLabel={ariaLabel} onClick={onClick}>
            {children}
        </Button>
    );
};

export default DeleteNewsButton;
