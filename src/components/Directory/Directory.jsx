import React from "react";
import "./Directory.scss";
import MenuItem from "../Menu-item/Menu-item";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Kobe Byrant",
          imageUrl:
            "https://jamesclear.com/wp-content/uploads/2013/08/Kobe_Bryant_2014.jpg",
          id: 1
        },
        {
          title: "Lebron James",
          imageUrl:
            "https://cms.qz.com/wp-content/uploads/2018/07/LeBron-James.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
          id: 2
        },
        {
          title: "Stephen Curry",
          imageUrl:
            "https://www.gannett-cdn.com/presto/2018/10/29/USAT/2d9b02f9-c2ee-405e-bb80-1d2bc066388f-2018-10-28_Steph_Curry3.jpg?crop=2090,1176,x1,y137&width=3200&height=1680&fit=bounds",
          id: 3
        },
        {
          title: "Vince Carter",
          imageUrl:
            "https://media.gettyimages.com/photos/vince-carter-of-the-toronto-raptors-dunks-the-ball-against-the-denver-picture-id167755410?s=612x612",
          id: 4
        },
        {
          title: "Michael Jordan",
          imageUrl:
            "https://www.guinnessworldrecords.com/Images/Michael-Jordan-main_tcm25-15662.jpg",
          id: 5
        },
        {
          title: "Derrick Rose",
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
          {this.state.sections.map(({ title, id, imageUrl }) => (
            <MenuItem title={title} key={id} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
