
import React from 'react';
import moment from 'moment';


export const ImgReader = ({onRead, hidden = false, multiple = false}) => {
  return (
    <input 
      multiple={multiple}
      accept="image/png,image/jpeg,image/jpg,image/gif"
      style={{ "display": hidden ? "none" : undefined }}
      type="file" 
      onChange={ e => {

        const file = e.target.files[0];


        const reader = new FileReader();

        reader.onload = (e) => {
          const img = e.target.result;
          onRead(file, img);

        };

      reader.readAsDataURL(file);
      } } />
  )
}