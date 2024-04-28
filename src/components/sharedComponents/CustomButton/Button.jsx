import "./Button.css";
export const TextButton = ({
  styles,
  children,
  clickHandler,
  startIcon,
  endIcon,
  startIconStyle,
  endIconStyle,
  isDropdownOpen
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        gap: "8px",
        padding: "8px 16px",
        fontWeight: "500",
        cursor: "pointer",
        ...styles,
      }}
      onClick={clickHandler}
    >
      {startIcon && (
        <img
          style={{ width: "24px", ...startIconStyle }}
          src={`/assets/button/${startIcon}.svg`}
          alt="button icon"
        />
      )}
      {children}
      {endIcon && (
        <img
          style={{ width: "24px", ...endIconStyle }}
          src={`/assets/button/${endIcon}.svg`}
          alt="button icon"
        />
      )}
    </div>
  );
};
export const BackgroundColorButton = ({
  children,
  startIcon,
  endIcon,
  styles,
  startIconStyle,
  endIconStyle,
  clickHandler,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        gap: "8px",
        color: "#ffffff",
        backgroundColor: "#000099",
        padding: "8px 16px",
        fontWeight: "500",
        cursor: "pointer",
        borderRadius: "60px",
        ...styles,
      }}
      onClick={clickHandler}
    >
      {startIcon && (
        <img
          style={{ width: "24px",...startIconStyle }}
          src={`/assets/button/${startIcon}.svg`}
          alt="button icon"
        />
      )}
      {children}
      {endIcon && (
        <img
          style={{ width: "24px",...endIconStyle }}
          src={`/assets/button/${endIcon}.svg`}
          alt="button icon"
        />
      )}
    </div>
  );
};
export const ColorButton = ({
  children,
  startIcon,
  endIcon,
  styles,
  startIconStyle,
  endIconStyle,
  clickHandler,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        gap: "8px",
        color: "#000099",
        padding: "8px 16px",
        fontWeight: "500",
        cursor: "pointer",
        borderRadius: "60px",
        border:"2px solid #E1E3E3",
        borrderRadius:"24px",
        ...styles,
      }}
      onClick={clickHandler}
    >
      {startIcon && (
        <img
          style={{ width: "24px",...startIconStyle }}
          src={`/assets/button/${startIcon}.svg`}
          alt="button icon"
        />
      )}
      {children}
      {endIcon && (
        <img
          style={{ width: "24px",...endIconStyle }}
          src={`/assets/button/${endIcon}.svg`}
          alt="button icon"
        />
      )}
    </div>
  );
};
