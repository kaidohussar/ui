import React from 'react';

import {IconType} from './index';

export const svgs = (type: IconType) => {
   const svgOptions: {[key in IconType]: React.ReactElement} = {
      github: (
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
            <path
               fill="#000"
               d="M38.959 0H1.042C.466 0 0 .462 0 1.033v37.934C0 39.537.466 40 1.042 40h12.604v-.01c.57-.006 1.005-.321 1.025-.856.052-1.389.016-2.78.016-4.124-1.016.047-1.985.175-2.943.12-2.114-.121-3.738-1.015-4.58-3.067-.499-1.216-1.25-2.256-2.422-2.95-.218-.13-.41-.32-.577-.515-.218-.252-.178-.512.168-.582.348-.07.73-.12 1.073-.055 1.35.25 2.283 1.09 2.998 2.207 1.413 2.21 3.588 2.885 6.034 1.865.137-.057.31-.195.336-.32.197-.978.566-1.87 1.308-2.652-.825-.151-1.59-.263-2.34-.436-2.16-.495-4.1-1.387-5.52-3.158-1.158-1.444-1.687-3.135-1.93-4.935-.381-2.819-.04-5.458 1.912-7.71a.602.602 0 00.108-.489c-.489-1.584-.414-3.155.07-4.722.255-.822.326-.863 1.172-.749.052.007.102.02.154.029 1.697.278 3.158 1.093 4.597 1.968.193.118.488.191.7.14a21.711 21.711 0 0110.304.003c.2.048.466-.02.656-.12.783-.405 1.532-.877 2.324-1.261.921-.447 1.892-.783 2.938-.765.183.004.466.177.527.337.629 1.653.761 3.336.26 5.056-.053.184.026.445.126.626.494.9 1.185 1.73 1.498 2.685.954 2.91.606 5.79-.692 8.525-1.19 2.506-3.397 3.776-6.01 4.431-.882.222-1.786.356-2.738.541 1.248 1.292 1.443 2.87 1.421 4.52-.023 1.704-.017 3.408-.018 5.112 0 .825.363 1.282.997 1.308C26.598 40 40 40 40 40V1.033C40 .463 39.534 0 38.959 0z"
            />
         </svg>
      ),
      linkedin: (
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
            <path
               fill="#000"
               d="M0 0v40h40V0H0zm12.283 32.999c0 .51-.413.922-.923.922H7.435A.922.922 0 016.513 33V16.253c0-.509.413-.922.922-.922h3.925c.51 0 .923.413.923.922V33zM9.39 12.769c-1.782.037-3.349-1.452-3.348-3.35 0-1.843 1.517-3.345 3.37-3.344 1.833.002 3.344 1.515 3.34 3.356-.004 1.928-1.604 3.38-3.362 3.339zm24.566 20.773a.383.383 0 01-.383.383l-5.016-.001a.383.383 0 01-.383-.383V23.2c0-.894-.362-1.704-.948-2.29a3.226 3.226 0 00-2.326-.947c-1.78.02-3.2 1.498-3.2 3.278v10.297a.383.383 0 01-.383.383h-5.004a.383.383 0 01-.382-.384V15.714c0-.211.171-.383.382-.383h4.898c.211 0 .383.171.383.383v2.055l.052.007a5.642 5.642 0 014.947-2.92h1.007a6.356 6.356 0 016.356 6.357v12.329z"
            />
         </svg>
      ),
   };
   return svgOptions[type];
};
