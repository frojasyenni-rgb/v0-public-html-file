-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotation_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can read own data" ON users FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid()::text = id::text);

-- User profiles policies
CREATE POLICY "Users can read own profile" ON user_profiles FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Courses are readable by all authenticated users
CREATE POLICY "Authenticated users can read courses" ON courses FOR SELECT TO authenticated USING (is_active = true);

-- Course enrollments policies
CREATE POLICY "Users can read own enrollments" ON course_enrollments FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can insert own enrollments" ON course_enrollments FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);
CREATE POLICY "Users can update own enrollments" ON course_enrollments FOR UPDATE USING (auth.uid()::text = user_id::text);

-- Quotations policies
CREATE POLICY "Asesores can read own quotations" ON quotations FOR SELECT USING (auth.uid()::text = asesor_id::text);
CREATE POLICY "Asesores can insert quotations" ON quotations FOR INSERT WITH CHECK (auth.uid()::text = asesor_id::text);

-- Admin policies (will be refined based on admin role)
CREATE POLICY "Admins can read all data" ON users FOR ALL TO authenticated USING (
  EXISTS (SELECT 1 FROM users WHERE id::text = auth.uid()::text AND role = 'admin')
);
