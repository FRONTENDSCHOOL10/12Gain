import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '@/components/Post/Post';
import S from '@/routes/myAppointment/component/MyPost.module.css';
import pb from '@/api/pb.js';
import { useAuthStore } from '@/stores/authStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { addHours, format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

function MyPost() {
  const navigate = useNavigate();
  const [appointmentsData, setAppointmentsData] = useState([]);
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;

  useEffect(() => {
    async function fetchData() {
      try {
        if (userId) {
          setIsLoading(true);

          const joinRecords = await pb.collection('join').getFullList({
            filter: `user_id="${userId}"`,
            expand: 'appointment_id',
          });

          const fetchedAppointments = joinRecords.map(
            (join) => join.expand.appointment_id
          );

          setAppointmentsData(fetchedAppointments);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching appointments data:', error);
      }
    }

    fetchData();
  }, [userId]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className={S.component}>
      {appointmentsData.length > 0 ? (
        appointmentsData.map((appointment) => {
          let formattedDate = '날짜 없음';
          try {
            if (appointment.date) {
              const utcDate =
                typeof appointment.date === 'string'
                  ? parseISO(appointment.date)
                  : new Date(appointment.date);
              const kstDate = addHours(utcDate, 9); // UTC to KST
              let dateString = format(kstDate, 'yyyy.MM.dd.');

              if (appointment.time) {
                const [hours, minutes] = appointment.time.split(':');
                kstDate.setHours(parseInt(hours, 10), parseInt(minutes, 10));
                dateString += ' ' + format(kstDate, 'a HH:mm', { locale: ko });
              }

              formattedDate = dateString;
            }
          } catch (error) {
            console.error('날짜 포맷팅 오류:', error);
          }

          const currentMemberCount = appointment.currentMemberCount || '1';
          const totalMemberCount = appointment.memberCount || '0';
          return (
            <Post
              key={appointment.id}
              title={appointment.title}
              date={formattedDate}
              place={appointment.location}
              member={`${currentMemberCount} / ${totalMemberCount}`}
              category={appointment.category}
              id={appointment.id}
              writer={user}
              onClick={() => navigate(`/posts/${appointment.id}`)}
            />
          );
        })
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default MyPost;
