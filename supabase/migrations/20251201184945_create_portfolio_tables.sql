/*
  # Create Portfolio Database Tables

  1. New Tables
    - `work_experience` - Stores designer's work history
    - `portfolio_projects` - Stores portfolio projects and case studies
    - `contact_submissions` - Stores contact form submissions
  
  2. Security
    - Enable RLS on all tables
    - Policies for public read access to projects and experience
    - Policies for submissions to contact table
*/

-- Create work_experience table
CREATE TABLE IF NOT EXISTS work_experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  position text NOT NULL,
  description text,
  start_date text NOT NULL,
  end_date text,
  is_current boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio_projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text,
  case_study text,
  tools_used text[],
  outcomes text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE work_experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for work_experience
CREATE POLICY "Anyone can view work experience"
  ON work_experience FOR SELECT
  TO public
  USING (true);

-- Policies for portfolio_projects
CREATE POLICY "Anyone can view portfolio projects"
  ON portfolio_projects FOR SELECT
  TO public
  USING (true);

-- Policies for contact_submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample data
INSERT INTO work_experience (company_name, position, description, start_date, end_date, is_current, display_order) VALUES
  ('Tech Innovators Inc', 'Senior Product Designer', 'Led design team of 5 designers. Redesigned core product interface resulting in 40% increase in user engagement.', '2022-03', '2024-12', false, 1),
  ('Creative Digital Studios', 'Product Designer Lead', 'Managed product design across multiple platforms. Implemented design systems reducing design time by 35%.', '2020-06', '2022-02', false, 2),
  ('Design Masters Co', 'UI/UX Designer', 'Designed user interfaces for mobile and web applications. Conducted user research and usability testing.', '2018-01', '2020-05', false, 3),
  ('StartUp Hub', 'Junior Product Designer', 'Created design mockups and prototypes. Collaborated with development team on UI implementation.', '2016-09', '2017-12', false, 4);

INSERT INTO portfolio_projects (title, description, category, image_url, case_study, tools_used, outcomes, display_order) VALUES
  ('E-Commerce Platform Redesign', 'Complete redesign of mobile shopping experience focusing on conversion optimization', 'Mobile Design', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600', 'Conducted extensive user research through 50+ interviews. Redesigned checkout flow reducing cart abandonment by 28% and increasing conversion rate by 18%.', ARRAY['Figma', 'Protopie', 'Adobe XD'], 'Increased conversion rate by 18%, Reduced cart abandonment by 28%, 40% faster checkout process', 1),
  ('SaaS Dashboard Redesign', 'Enterprise dashboard redesign for data analytics platform', 'Web Design', 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600', 'Implemented new design system with improved data visualization. Reduced user onboarding time and increased feature adoption.', ARRAY['Figma', 'Sketch', 'Adobe XD'], 'Reduced onboarding time by 35%, Increased feature adoption by 42%, Improved user satisfaction score to 4.8/5', 2),
  ('Mobile Banking App', 'Secure mobile banking application interface design', 'Mobile Design', 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600', 'Focused on security UX without compromising usability. Implemented biometric authentication and simple transaction flows.', ARRAY['Figma', 'Protopie', 'Principle'], 'Successful app launch with 100K+ downloads, 4.7 rating on app stores, 95% user retention', 3),
  ('Design System Documentation', 'Comprehensive design system and component library', 'Design Systems', 'https://images.pexels.com/photos/3184654/pexels-photo-3184654.jpeg?auto=compress&cs=tinysrgb&w=600', 'Created detailed design system documentation with 150+ components. Improved design-to-development handoff efficiency.', ARRAY['Figma', 'Storybook', 'Zeplin'], 'Reduced design-dev time by 40%, Improved consistency across products, 200+ component library', 4);