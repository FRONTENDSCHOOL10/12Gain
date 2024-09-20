import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '@/components/Post/Post';
import S from '@/routes/myAppointment/component/MyPost.module.css';
import pb from '@/api/pb.js';
import { useAuthStore } from '@/stores/authStore';

function MyPost() {
  const navigate = useNavigate();
  const [appointmentsData, setAppointmentsData] = useState([]);
  const { user } = useAuthStore();
  const userId = user?.id;
  console.log(user);

  useEffect(() => {
    async function fetchData() {
      try {
        if (userId) {
          const joinRecords = await pb.collection('join').getFullList({
            filter: `user_id="${userId}"`,
          });
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
