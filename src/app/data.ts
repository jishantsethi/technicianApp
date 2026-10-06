export type Job = {
  id: string;
  equipment: string;
  customerName: string;
  status: string;
  scheduleDate: string;
};


const DATA: Job[] = [
  {
    id: '1',
    equipment: 'Equipment 1',
    customerName: 'Customer 1',
    status: 'Pending',
    scheduleDate: '2023-10-01',
  },
  {
    id: '2',
    equipment: 'Equipment 2',
    customerName: 'Customer 2',
    status: 'In Progress',
    scheduleDate: '2023-10-02',
  },
  {
    id: '3',
    equipment: 'Equipment 3',
    customerName: 'Customer 3',
    status: 'Completed',
    scheduleDate: '2023-10-03',
  },
  {
    id: '4',
    equipment: 'Equipment 4',
    customerName: 'Customer 4',
    status: 'Pending',
    scheduleDate: '2023-10-04',
  }
];

export default DATA;