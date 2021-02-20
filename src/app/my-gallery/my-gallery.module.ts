import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MyGalleryModule {
  galleryImages = [
    {
      id:'1',
      imgUrl:"https://img4.goodfon.com/wallpaper/nbig/d/d2/peizazh-nebo-luga-kholmy-priroda.jpg",
      title:'Gallery 1'
    },

    {
      id:'2',
      imgUrl:"https://cdn.theatlantic.com/assets/media/img/photo/2020/02/winners-2019-international-landscap/p01_SanderGrefte14180-443-1/original.jpg",
      title:'Gallery 2'
    },

    {
      id:'3',
      imgUrl:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rolling-hills-lynn-hopwood.jpg",
      title:'Gallery 3'
    },

    {
      id:'4',
      imgUrl:"https://loveincorporated.blob.core.windows.net/contentimages/gallery/2c833c40-38ea-4195-959b-36bfd8cf9a76-sunrise_spots_utah.jpg",
      title:'Gallery 4'
    },

    {
      id:'5',
      imgUrl:"https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg",
      title:'Gallery 5'
    },

    {
      id:'6',
      imgUrl:"https://images.adsttc.com/media/images/5b23/e5d4/f197/cc0e/e500/00f2/large_jpg/GLUCK__House_in_the_Mountains_01_Mundinger.jpg?1529079241",
      title:'Gallery 6'
    },

    {
      id:'7',
      imgUrl:"https://images.adsttc.com/media/images/5b23/e5d4/f197/cc0e/e500/00f2/large_jpg/GLUCK__House_in_the_Mountains_01_Mundinger.jpg?1529079241",
      title:'Gallery 7'
    },


    {
      id:'8',
      imgUrl:"https://p4.wallpaperbetter.com/wallpaper/1013/1011/609/field-trees-landscape-sunset-wallpaper-preview.jpg",
      title:'Gallery 8'
    },

    {
      id:'9',
      imgUrl:"https://www.canadiannaturephotographer.com/Road_Photography/Kananaskis_MG_3152.jpg",
      title:'Gallery 9'
    },
  ]
 }