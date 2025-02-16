import { Notification } from "../types/ui";

export const user = {
  name: "Tabay",
  role: "UX/UI Designer",
  location: "Kantor Sahid",
  memberSince: "01 Juni 2021",
};

export const notifications: Notification[] = [
  {
    id: 1,
    type: "Reimbursement",
    title: "Reimbursement",
    description: `Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been paid, please check your BRIMO application, Thank you`,
    status: "approved",
    isRead: false,
    date: "2024-02-16",
  },
  {
    id: 2,
    type: "Reimbursement",
    title: "Reimbursement",
    description: `Your submission "description" has been rejected, please click for details.`,
    status: "rejected",
    isRead: true,
    date: "2024-02-15",
  },
  {
    id: 3,
    type: "Reimbursement",
    title: "Reimbursement",
    description: `Your submission will be processed according to the reimbursement schedule. Please wait.`,
    status: "processing",
    isRead: false,
    date: "2022-10-06",
  },
  {
    id: 4,
    type: "Sickness",
    title: "Sickness",
    description: `Your submission has been approved by the Superior.`,
    status: "approved",
    isRead: false,
    date: "2022-10-05",
  },
  {
    id: 5,
    type: "Sickness",
    title: "Sickness",
    description: `Your submission has been rejected, please confirm with your Superior.`,
    status: "rejected",
    isRead: true,
    date: "2022-10-05",
  },
  {
    id: 6,
    type: "Sickness",
    title: "Sickness",
    description: `Your submission has been reviewed to the Superior for the approval process, please wait.`,
    status: "processing",
    isRead: true,
    date: "2022-10-05",
  },
  {
    id: 7,
    type: "Overtime",
    title: "Overtime",
    description: `Your submission has been approved by the Superior.`,
    status: "approved",
    isRead: false,
    date: "2022-10-05",
  },
  {
    id: 8,
    type: "Overtime",
    title: "Overtime",
    description: `Your submission has been rejected, please confirm with your Superior.`,
    status: "rejected",
    isRead: true,
    date: "2022-10-05",
  },
  {
    id: 9,
    type: "Overtime",
    title: "Overtime",
    description: `Your submission is being reviewed to the Superior for the approval process, please wait.`,
    status: "processing",
    isRead: true,
    date: "2022-10-05",
  },
];

export const news = [
  {
    id: 1,
    author: "Ana Riswati",
    date: "2022-05-30",
    content: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    author: "Budi Santoso",
    date: "2022-06-01",
    content: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    author: "Cindy Suharto",
    date: "2022-06-02",
    content: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export const onlineUsers = [
  {
    id: 1,
    name: "Jefril",
    location: "Sahid",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Zasami",
    location: "BSD",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sam",
    location: "Sahid",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Aldo",
    location: "Sahid",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Erwin",
    location: "Sahid",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Arye",
    location: "BSD",
    img: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Risya",
    location: "BSD",
    img: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Nesha",
    location: "WFH",
    img: "https://i.pravatar.cc/150?img=8",
  },
];
