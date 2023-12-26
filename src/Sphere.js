import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";

const Sphere = () => {
const tagCanvasOptions = {
imageScale: 2,
initial: [0.1, -0.1],
reverse: true,
tooltip: "native", // null | 'div'
tooltipDelay: 0,
wheelZoom: true
};
const iconSlugs = [
"dart","java","react","flutter","android","html5","nodedotjs","express","nextdotjs","firebase","vercel","canva","testinglibrary","docker","git","github","gitlab","visualstudiocode","androidstudio","figma"
];
const iconTags = iconSlugs.map((slug) => ({
id: slug,
simpleIcon: allIcons.Get(slug) }));
return (
<div>
<IconCloud
key={v4()}
id={"icon"}
minContrastRatio={1}
iconSize={50}
backgroundHexColor={"#fff"}
fallbackHexColor={"#000"}
tags={iconTags}
tagCanvasOptions={tagCanvasOptions}/>
</div> )}
export default Sphere;