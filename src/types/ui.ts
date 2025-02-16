export type Notification = {
  id: number;
  type: "Reimbursement" | "Sickness" | "Overtime";
  title: string;
  description: string;
  date: string;
  status: "approved" | "rejected" | "processing";
  isRead: boolean;
};

export type User = {
  name: string;
  role: string;
  location: string;
  memberSince: string;
};
