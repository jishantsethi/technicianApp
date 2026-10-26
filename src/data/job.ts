import { useState } from "react";

export type Job = {
  id: string;
  equipment: string;
  customerName: string;
  status: Status;
  scheduleDate: string;
};

export type Status = "Pending" | "Completed" | "In Progress";

const DATA: Job[] = [
  {
    id: 'J-1042',
    equipment: 'CNC Lathe - Haas ST-20',
    customerName: 'Northwind Manufacturing',
    status: "Pending",
    scheduleDate: '2025-11-12',
  },
  {
    id: 'J-1043',
    equipment: 'Industrial Air Compressor - Atlas Copco GA18',
    customerName: 'Summit Foods',
    status: "Completed",
    scheduleDate: '2025-11-13',
  },
  {
    id: 'J-1044',
    equipment: 'Hydraulic Press - Enerpac H-Frame',
    customerName: 'Blue Ridge Auto Parts',
    status: 'Completed',
    scheduleDate: '2025-11-14',
  },
  {
    id: 'J-1045',
    equipment: 'Boiler Control Panel - Cleaver-Brooks',
    customerName: 'Harborview Medical Center',
    status: 'Pending',
    scheduleDate: '2025-11-15',
  },
  {
    id: 'J-1046',
    equipment: 'Conveyor System - Rexnord 1200',
    customerName: 'Pacific Distribution Center',
    status: 'In Progress',
    scheduleDate: '2025-11-16',
  },
  {
    id: 'J-1047',
    equipment: 'Packaging Line Sensor - Sick GmbH',
    customerName: 'Brighton Beverage Co.',
    status: 'Pending',
    scheduleDate: '2025-11-17',
  },
  {
    id: 'J-1048',
    equipment: 'Chiller Unit - Trane RTAA',
    customerName: 'Cedar Point Data Center',
    status: 'In Progress',
    scheduleDate: '2025-11-18',
  },
  {
    id: 'J-1049',
    equipment: 'Forklift Battery Charger - Hawker',
    customerName: 'Metro Logistics',
    status: 'Completed',
    scheduleDate: '2025-11-19',
  },
  {
    id: 'J-1050',
    equipment: 'Water Treatment Pump - Grundfos CR',
    customerName: 'Lakeside Utilities',
    status: 'Pending',
    scheduleDate: '2025-11-20',
  },
  {
    id: 'J-1051',
    equipment: 'Laser Cutter - Trumpf TruLaser',
    customerName: 'Apex Fabrication',
    status: 'In Progress',
    scheduleDate: '2025-11-21',
  },
  {
    id: 'J-1052',
    equipment: 'Dust Collector - Donaldson Torit',
    customerName: 'Maple Valley Woodworks',
    status: 'Completed',
    scheduleDate: '2025-11-22',
  },
  {
    id: 'J-1053',
    equipment: 'Injection Molding Machine - Arburg',
    customerName: 'Stonebridge Plastics',
    status: 'Pending',
    scheduleDate: '2025-11-23',
  },
  {
    id: 'J-1054',
    equipment: 'Cooling Tower Fan - Marley NC',
    customerName: 'Kingsley Hospital',
    status: 'In Progress',
    scheduleDate: '2025-11-24',
  },
  {
    id: 'J-1055',
    equipment: 'Robotic Arm - FANUC M-20iA',
    customerName: 'Valley Precision Components',
    status: 'Pending',
    scheduleDate: '2025-11-25',
  },
  {
    id: 'J-1056',
    equipment: 'Boiler Feed Pump - KSB Etanorm',
    customerName: 'Westfield Energy',
    status: 'Completed',
    scheduleDate: '2025-11-26',
  },
];

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(DATA);

  const modifyJobs = (newJob: Job) => {
    for (let i = 0; i < DATA.length; i++) {
      if (DATA[i].id == newJob.id && DATA[i].status == "Pending") {
        DATA[i].status = "In Progress";
      }
      setJobs(DATA);
    }
  };

  return { jobs, modifyJobs };
}
