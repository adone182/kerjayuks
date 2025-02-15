export type Notification = {
  id: number;
  type: "Reimbursement" | "Sickness" | "Overtime";
  message: string;
  date: string;
  status: "approved" | "rejected" | "processing";
};

export type User = {
  name: string;
  role: string;
  location: string;
  memberSince: string;
};
