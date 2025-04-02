const basePath = '/pages/services/';

export const categories = [
  {
    title: 'Aniversarios',
    path: 'aniversarios',
    images: [
      'aniversarios/aniversarios.jpg',
      'aniversarios/aniversarios1.png',
      'aniversarios/aniversarios2.png',
      'aniversarios/aniversarios3.png',
      'aniversarios/aniversarios4.png',
      'aniversarios/aniversarios5.png',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Audiovisuales',
    path: 'audiovisual',
    images: [
      'audiovisual/audiovisual.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'BabyShowers',
    path: 'babyshowers',
    images: [
      'babyshowers/babyshowers.jpg',
      'babyshowers/babyshowers1.jpg',
      'babyshowers/babyshowers2.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Bautizos',
    path: 'bautizos',
    images: [
      'bautizos/bautizos.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Bodas',
    path: 'bodas',
    images: [
      'bodas/boda.jpg',
      'bodas/bodas.jpg',
      'bodas/bodas1.png',
      'bodas/bodas2.jpg',
      'bodas/bodas3.jpg',
      'bodas/bodas4.jpg',
      'bodas/bodas5.jpg',
      'bodas/bodas6.jpg',
      'bodas/bodas7.jpg',
      'bodas/bodas8.jpg',
      'bodas/bodas9.jpg',
      'bodas/bodas10.jpg',
      'bodas/bodas11.jpg',
      'bodas/bodas12.jpg',
      'bodas/bodas13.jpg',
      'bodas/bodas14.jpg',
      'bodas/bodas15.jpg',
      'bodas/bodas16.jpg',
      'bodas/bodas17.jpg',
      'bodas/bodas18.jpg',
      'bodas/bodas19.jpg',
      'bodas/bodas20.jpg',
      'bodas/bodas21.jpg',
      'bodas/bodas22.jpg',
      'bodas/bodas23.jpg',
      'bodas/bodas24.jpg',
      'bodas/bodas25.jpg',
      'bodas/bodas26.png',
      'bodas/bodas27.jpg',
      'bodas/bodas28.png',
      'bodas/bodas29.jpg',
      'bodas/bodas30.jpg',
      'bodas/bodas31.png',
      'bodas/bodas32.png',
      'bodas/bodas33.jpg',
      'bodas/bodas34.png',
      'bodas/bodas35.jpg',
      'bodas/bodas36.png',
      'bodas/bodas37.jpg',
      'bodas/bodas38.jpg',
      'bodas/bodas39.jpg',
      'bodas/bodas40.jpg',
      'bodas/bodas41.jpg',
      'bodas/bodas42.jpg',
      'bodas/bodas43.jpg',
      'bodas/bodas44.jpg',
      'bodas/bodas45.jpg',
      'bodas/bodas46.jpg',
      'bodas/bodas47.jpg',
      'bodas/bodas48.jpg',
      'bodas/bodas49.jpg',
      'bodas/bodas50.jpg',
      'bodas/bodas51.jpg',
      'bodas/bodas52.png',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Cumpleaños',
    path: 'cumples',
    images: [
      'cumples/cumples.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Contenido Digital',
    path: 'digital',
    images: [
      'digital/digital.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Eventos Especiales',
    path: 'eventos',
    images: [
      'eventos/eventos.jpg',
      'eventos/eventos1.jpg',
      'eventos/eventos2.png',
      'eventos/eventos3.jpg',
      'eventos/eventos4.png',
      'eventos/eventos5.png',
      'eventos/eventos6.jpg',
      'eventos/eventos7.jpg',
      'eventos/eventos8.jpg',
      'eventos/eventos9.jpg',
      'eventos/eventos10.jpg',
      'eventos/eventos11.jpg',
      'eventos/eventos12.jpg',

      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Modelos',
    path: 'model',
    images: [
      'model/model.jpg',
      'model/model1.jpg',
      'model/model2.jpg',
      'model/model3.jpg',
      'model/model4.jpg',
      'model/model5.jpg',
      'model/model6.jpg',
      'model/model7.jpg',
      'model/model8.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Productos',
    path: 'producto',
    images: [
      'producto/producto.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Quince Años',
    path: 'quinces',
    images: [
      'quinces/quinces.jpg',
      'quinces/quinces1.jpg',
      'quinces/quinces2.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
  {
    title: 'Retratos',
    path: 'retratos',
    images: [
      'retratos/retratos.jpg',
      // Agrega más rutas de imágenes aquí
    ],
  },
];

export const getCategoryImages = (path) => {
  return categories.find(category => category.path === path).images.map(image => basePath + image);
};
