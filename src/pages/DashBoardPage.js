import axios from 'axios'
import { useEffect, useState } from 'react';
import DashBoard from '../components/dashboard/DashBoard'
import { useToast } from '@chakra-ui/react';

export default function DashBoardPage() {

  const [dashBoardItems, setDashBoardItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchDashBoardDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/services/');
        if (response.status === 200 || response.status === 201) {
          setDashBoardItems(response.data.serviceRequest);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashBoardDetails().catch((error) => {
      console.error('Error in useEffect:', error);
    });
  }, []);


  return (
    <DashBoard 
      dashBoardData= {dashBoardItems}
      isLoading={isLoading}
    />
  )
}
