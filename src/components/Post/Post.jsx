import { Link } from 'react-router-dom';
import S from '@/components/Post/style.module.css';
import ProfileImage from '../ProfileImage/ProfileImage';
import Icon from '../Icon/Icon';
import { string } from 'prop-types';
import { number } from 'prop-types';
import getPbImageURL from '@/api/getPbImageURL';

Post.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  place: string.isRequired,
  member: number,
  category: string.isRequired,
  id: string.isRequired,
  writer: string.isRequired,
};

function Post({ title, date, place, member = 1, category, id, writer }) {
  const postWriterAvatar = getPbImageURL(writer, 'avatar');
  const postWriterAvatarURL =
    writer.avatar === '' ? '/profile.png' : postWriterAvatar;

  return (
    <article className={S.component}>
      <Link to={`/main/post/${id}`} className={S.link}>
        <h2>{title}</h2>
        <span>{date}</span>
        <div className={S.details}>
          <ProfileImage url={postWriterAvatarURL} width={24} height={24} />
          <div>
            <Icon id="mapFull" width={12} height={12} color="#979797" />
            {place}
          </div>
          <div className={S.divider}></div>
          <div>
            <Icon id="personFull" width={12} height={12} color="#979797" />
            {member}
          </div>
          <div className={S.divider}></div>
          <div>{category}</div>
        </div>
      </Link>
    </article>
  );
}

export default Post;
