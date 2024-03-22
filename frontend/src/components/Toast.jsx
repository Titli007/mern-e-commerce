import toast, { Toaster } from 'react-hot-toast';

export const notify = (msg,status) => 
  {
    let config = {
      // Custom Icon
      style: {
        backgroundColor: '#B88E2F',
        color: 'white',
        fontSize : "15px",
      },
      ariaProps: {
        role: 'status'
      }
    }
    if(status === 'success') {
      toast.success(`${msg}`, config)
    }
    if(status === 'error') {
      toast.error(`${msg}`, config)
    }
};


