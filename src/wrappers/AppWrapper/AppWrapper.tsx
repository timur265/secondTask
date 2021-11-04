import React, { PureComponent } from "react";

interface AppWrapperProps {
  children: React.ReactChild;
}

class AppWrapper extends PureComponent<AppWrapperProps> {
  render(): React.ReactNode {
    return (
      <>{this.props.children}</>
    );
  }
}

export default AppWrapper;
