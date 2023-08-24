import  link from "./link";
import './link.css';
import React from "react";
function AddLink({name, link, image}:any) {
    console.log("Image ",image)
    return (
        <>
  <a href={link} className="link" target="blank">
    <img src={image}/>
    <span>{name}  </span>
  </a>
  </>
    );
}
export  function LinkTree(props:any) {
    // const links = [
    //   {
    //     name: "Data Structures & Algorithms Study Plan on Notion",
    //     href: "https://tagmango.app/08643ca029"
    //   },
    //   {
    //     name: "Buy My Setup on Amazon ",
    //     href: "https://www.amazon.in/shop/thecodedose"
    //   },
    //   // add your own links like this...
    // ];
  const finlinks:any=link
    return (
      <div className="LinkTree">
        {/* each link object is rendered as an anchor tag */ }
        {finlinks.map(({ name, link,image }:any) => (
        //   <a href={href} className="link">
        //     {name}
        //   </a>
        console.log("Image ",image),
        <AddLink name={name} link={link} image={image}/>
        ))}
      </div>
    );
  }