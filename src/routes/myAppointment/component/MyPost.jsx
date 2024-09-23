import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '@/components/Post/Post';
import S from '@/routes/myAppointment/component/MyPost.module.css';
import pb from '@/api/pb.js';
import { useAuthStore } from '@/stores/authStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

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
