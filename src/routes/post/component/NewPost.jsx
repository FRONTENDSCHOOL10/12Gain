import S from '@/routes/post/component/NewPost.module.css';

import Header from '../../../components/Header/Header';
import PostInput from '@/components/PostInput/PostInput';
import PostTextarea from '@/components/PostTextarea/PostTextarea';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import ChoiceInput from '@/components/ChoiceInput/ChoiceInput';
import { useState } from 'react';

function NewPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    memberCount: 1,
    date: '',
    time: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력값을 처리하는 로직
    console.log(formData);
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className={S.component}>
      <Header iconList={['left']} />

      <form onSubmit={handleSubmit}>
        <label>
          <PostInput
            placeholder="제목을 입력해주세요"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <label>
          <PostTextarea
            placeholder="내용을 입력해주세요"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <div className={S.category}>
          카테고리를 선택해주세요
          <button
            type="button"
            onClick={() => navigate('category')}
            className={S.category__button}
          >
            <Icon id="right" width={16} height={16} />
          </button>
        </div>

        <div className={S.image__upload}>
          <button
            type="button"
            // onClick={() => handleClick('imageUpload')} // 이미지 업로드 기능 추가 필요
            className={S.image__upload__button}
          >
            <Icon id="camera"></Icon>
            사진 추가(선택)
          </button>
        </div>

        <label>
          <ChoiceInput
            memberCount={formData.memberCount}
            date={formData.date}
            time={formData.time}
            location={formData.location}
            onChange={handleChange}
          />
        </label>

        <div className={S.attend_button}>
          <Button
            text="완료"
            height="2.8rem"
            onClick={() => navigate('join')}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default NewPost;
