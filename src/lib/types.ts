
export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
  imageHint?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Tools' | 'Styling' | 'Web3' | 'Database';
  proficiency: number;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  content: string;
  imageUrl: string;
  imageHint?: string;
  publishedAt: Date;
  author: string;
  tags: string[];
};

export type Message = {
    id: string;
    name: string;
    email: string;
    message: string;
    walletAddress?: string;
    signature?: string;
    receivedAt: Date;
}
