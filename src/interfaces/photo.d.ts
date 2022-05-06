interface IPhoto {
  id: number;
  rover_id: number;
  name: string;
  img_src: string;
  earth_date: string;
  camera: ICamera;
  rover: IRover;
}
