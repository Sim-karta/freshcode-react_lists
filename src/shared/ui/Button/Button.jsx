import { memo } from "react";

const Button = (props) => {
    const {
        className = "",
        type = "button",
        children,
        isDisabled = false,
        onClick,
        ariaLabel,
    } = props;

    return (
        <button
            className={className}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default memo(Button);
