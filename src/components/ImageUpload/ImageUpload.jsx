import S from '@/components/ImageUpload/ImageUpload.module.css';
import clsx from 'clsx';
import { oneOf } from 'prop-types';
import {} from 'prop-types';
import { node, string, func, array } from 'prop-types';

ImageUpload.propTypes = {
  children: node,
  value: string,
  onChange: func,
  imageData: array,
  type: oneOf(['post', 'icon']),
  className: string,
};

function ImageUpload({ children, onChange, imageData, className }) {
  return (
    <div className={S.ImageUpload__container}>
      <label className={clsx(S.label, className)}>
        <input
          className={S.input}
          type="file"
          name="image"
          accept="image/jpg image/jpeg image/png"
          onChange={onChange}
          multiple
        />
        {children}
      </label>

      {imageData.length > 0 && (
        <div className={S.ImageUpload__imageName}>
          {imageData.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
