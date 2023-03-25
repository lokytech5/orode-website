import axios from 'axios'
import { useEffect, useState } from 'react';
import DashBoard from '../components/dashboard/DashBoard'
import { useToast } from '@chakra-ui/react';

export default function DashBoardPage() {

  const [dashBoardItems, setDashBoardItems] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchDashBoardDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services/');
        console.log('API response:', response);
        if (response.status === 200 || response.status === 201) {
          setDashBoardItems(response.data.serviceRequest);
          console.log('Fetched data:', response.data.serviceRequest); 
        }
      } catch (error) {
        console.error('Error fetching data from server', error);
        if (error.response && error.response.status === 400) {
          toast({
            title: 'Error!',
            description: 'Fetching Data from server.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
    };

    fetchDashBoardDetails().catch((error) => {
      console.error('Error in useEffect:', error);
    });
  }, []);


  return (
    <DashBoard 
      
    />
  )
}
