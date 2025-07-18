export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}