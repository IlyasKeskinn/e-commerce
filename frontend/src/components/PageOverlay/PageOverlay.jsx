import { connect } from "react-redux";
import "./PageOverlay.css"
import { setPageOverlay } from "../../actions/drawerAction";


const PageOverlay = ({ drawer, dispatch }) => {
    return (
        <div onClick={() => { dispatch(setPageOverlay()) }} className={`page-overlay ${drawer.isPageOverlayActive ? "page-overlay-visible" : ""}`}></div>
    );
}

const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(PageOverlay);