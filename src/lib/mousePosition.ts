export type MousePosition = {
  x: number;
  y: number;
};

export default function mousePosition(e?: any): MousePosition {
  let posx: number = 0;
  let posy: number = 0;
  if (!e) {
    e = window.event;
  }
  if (e.pageX || e.pageY) 	{
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) 	{
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x : posx,
    y : posy
  }
}
