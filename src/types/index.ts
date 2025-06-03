export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'client' | 'freelancer';
  joinDate: string;
  bio?: string;
  hourlyRate?: number;
  skills?: string[];
  location?: string;
  rating?: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  category: string;
  skills: string[];
  postedBy: string;
  postedDate: string;
  deadline?: string;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  applicants?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Review {
  id: string;
  userId: string;
  targetId: string;
  rating: number;
  comment: string;
  date: string;
}