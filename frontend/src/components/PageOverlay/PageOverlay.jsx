import "./PageOverlay.css"


export const PageOverlay =({isAsideActice}) => {
    return(
        <div className={`page-overlay ${isAsideActice ? "page-overlay-visible" : ""}`}></div>
    );
}