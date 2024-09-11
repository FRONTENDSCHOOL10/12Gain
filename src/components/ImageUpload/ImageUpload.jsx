import S from '@/components/ImageUpload/ImageUpload.module.css';
import {} from 'prop-types';
import { node, string, func, array } from 'prop-types';

ImageUpload.propTypes = {
  children: node,
  value: string,
  onChange: func,
  imageData: array,
};

function ImageUpload({ children, onChange, imageData }) {
  return (
    <div className={S.ImageUpload__container}>
      <label className={S.label}>
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

      {imageData && (
        <div className={S.ImageUpload__imageName}>
          {imageData.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
