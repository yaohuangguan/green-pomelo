import React from "react";
import "./Directory.scss";
import MenuItem from "../Menu-item/Menu-item";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "UI 设计",
          imageUrl:
            "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Operations/Our%20Insights/The%20expanding%20role%20of%20design%20in%20creating%20an%20end%20to%20end%20customer%20experience/Expanding-role-of-design-1536x1536-400_Standard.ashx",
          id: 1,
          link: "ui"
        },
        {
          title: " 灵感",
          imageUrl:
            "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/e15e80504811e6bcaf7158d37ab7ca/LightBulb.jpg?auto=format%2Ccompress&dpr=2.625",
          id: 2
        },
        {
          title: " 移动端",
          imageUrl:
            "https://miro.medium.com/max/1600/1*bx_5cRhAW4-zFNi9qfRvsA.gif",
          id: 3
        },
        {
          title: "动画",
          imageUrl:
            "https://www.frogdesign.com/wp-content/uploads/2018/11/Amrita-Marino-FrogDesign-TechTrendsHeader-1440x810-1024x576.gif",
          id: 4
        },
        {
          title: "产品设计",
          imageUrl:
            "https://miro.medium.com/max/3840/1*0gkasyYO8KkChq0YSOmIPA.png",
          id: 5
        },
        {
          title: "打印设计",
          imageUrl:
            "http://imgs.mi9.com/uploads/3d/4853/3d-design-wallpaper_1366x768_89686.jpg",
          id: 6
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className='directory-menu'>
          {this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
