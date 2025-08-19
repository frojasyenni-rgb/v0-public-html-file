-- Insert sample courses
INSERT INTO courses (title, description, content, duration_minutes, passing_score, order_index) VALUES
('Introducción a los Seguros', 'Conceptos básicos del mundo asegurador', 'Contenido del curso sobre introducción a seguros...', 90, 80, 1),
('Tipos de Seguros', 'Conoce los diferentes tipos de seguros disponibles', 'Contenido sobre tipos de seguros...', 120, 80, 2),
('Atención al Cliente', 'Técnicas para brindar excelente servicio', 'Contenido sobre atención al cliente...', 60, 80, 3),
('Proceso de Cotización', 'Cómo realizar cotizaciones efectivas', 'Contenido sobre cotizaciones...', 75, 80, 4);

-- Insert sample admin user (password will be set through auth)
INSERT INTO users (email, role, status) VALUES
('admin@redferro.com', 'admin', 'active');
