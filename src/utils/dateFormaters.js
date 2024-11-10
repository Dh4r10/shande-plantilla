import { format } from '@formkit/tempo';

export const formatDate = ({ date, formatDT }) => {
  const formatedDate = format(date, formatDT);

  return formatedDate;
};
