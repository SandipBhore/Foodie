import Style from "./Sidebar.module.scss";
import React from "react";
import { connect } from "react-redux";

const Sidebar = ({ width, height, children,userData }) => {
  // const [xPosition, setX] = React.useState(-width);

  // const toggleMenu = () => {
  //   if (xPosition < 0) {
  //     setX(0);
  //   } else {
  //     setX(-width);
  //   }
  // };

  // React.useEffect(() => {
  //   setX(-width);
  // }, []);
  
  return (
    <React.Fragment>
      <div className={Style.sideBar}
        style={{
          transform: `translatex(${userData.xPosition}px)`,
          // width: width,
          // minHeight: height
        }}
      >
        {/* <button
          onClick={() => toggleMenu()}
          className={Style.toggleMenu}
        >
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </button> */}

        <div className={Style.content}>{children}</div>
      </div>
    </React.Fragment>
  );
};

// export default ;

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
