import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '@/components/Post/Post';
import S from '@/routes/myAppointment/component/MyPost.module.css';
import pb from '@/api/pb.js'; // 포켓베이스 인스턴스 가져오기
import { useAuthStore } from '@/stores/authStore'; // Zustand의 authStore 가져오기

function MyPost() {
  const navigate = useNavigate();
  const [appointmentsData, setAppointmentsData] = useState([]);

  // Zustand에서 로그인한 사용자의 정보를 가져오기
  const { user } = useAuthStore();
  const userId = user?.id; // 로그인한 사용자의 ID 가져오기
  console.log(user);

  useEffect(() => {
    async function fetchData() {
      try {
        if (userId) {
          // "join" 컬렉션에서 로그인 사용자의 user_id와 일치하는 데이터 조회
          const joinRecords = await pb.collection('join').getFullList({
            filter: `user_id="${userId}"`,
          });

          // 각 join의 appointment_id에 맞는 appointments 데이터 가져오기
          const appointmentPromises = joinRecords.map(async (join) => {
            return await pb
              .collection('appointments')
              .getOne(join.appointment_id);
          });

          const fetchedAppointments = await Promise.all(appointmentPromises);
          setAppointmentsData(fetchedAppointments);
        }
      } catch (error) {
        console.error('Error fetching appointments data:', error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className={S.component}>
      {appointmentsData.length > 0 ? (
        appointmentsData.map((appointment) => (
          <Post
            key={appointment.id}
            title={appointment.title}
            date={appointment.date}
            place={appointment.location}
            member={appointment.memberCount}
            category={appointment.category}
            id={appointment.id}
            onClick={() => navigate(`/posts/${appointment.id}`)}
          />
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default MyPost;
