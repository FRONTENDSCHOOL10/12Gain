import S from '@/components/ImageUpload/ImageUpload.module.css';
import { usePostData } from '@/stores/form';
import { node, string, func } from 'prop-types';

ImageUpload.propTypes = {
  children: node,
  value: string,
  onChange: func,
};

function ImageUpload({ children, onChange }) {
  const { imageData } = usePostData();

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
