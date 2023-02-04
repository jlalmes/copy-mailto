import { toast, Toaster } from 'react-hot-toast';

export const Notifier = <Toaster position="top-center" reverseOrder={true} />;

export const notify = {
  email: () => {
    toast.success(`Copied email address to clipboard!`);
  },
  phone: () => {
    toast.success(`Copied phone number to clipboard!`);
  },
};
