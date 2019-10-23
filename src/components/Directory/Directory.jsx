import React from "react";
import "./Directory.scss";
import MenuItem from "../Menu-item/Menu-item";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "科比 Kobe Byrant",
          imageUrl:
            "https://jamesclear.com/wp-content/uploads/2013/08/Kobe_Bryant_2014.jpg",
          id: 1,
          link: "kobe"
        },
        {
          title: " 老詹 Lebron James",
          imageUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571830207356&di=5a02256c44259b0c3405ae1522963604&imgtype=0&src=http%3A%2F%2Fi2.wp.com%2Foverdope.com%2Fwp-content%2Fuploads%2F2015%2F02%2F20150214072141_71.jpg%3Ffit%3D680%2C440",
          id: 2
        },
        {
          title: " 库里 Stephen Curry",
          imageUrl:
            "https://www.gannett-cdn.com/presto/2018/10/29/USAT/2d9b02f9-c2ee-405e-bb80-1d2bc066388f-2018-10-28_Steph_Curry3.jpg?crop=2090,1176,x1,y137&width=3200&height=1680&fit=bounds",
          id: 3
        },
        {
          title: "卡特 Vince Carter",
          imageUrl:
            "https://media.gettyimages.com/photos/vince-carter-of-the-toronto-raptors-dunks-the-ball-against-the-denver-picture-id167755410?s=612x612",
          id: 4
        },
        {
          title: "乔丹 Michael Jordan",
          imageUrl:
            "https://www.guinnessworldrecords.com/Images/Michael-Jordan-main_tcm25-15662.jpg",
          id: 5
        },
        {
          title: "罗斯 Derrick Rose",
          imageUrl:
            "http://thesource.com/wp-content/uploads/2019/04/Derrick_Rose_03.jpg",
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
