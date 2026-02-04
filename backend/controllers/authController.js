const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/database');

const register = async (req, res) => {
  try {
    const { name, email, password, job, address } = req.body;

    if (!name || !email || !password || !job || !address) {
      return res.status(400).json({ message: 'All fields are required (name, email, password, job, address)' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // Check if user exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, job, address) VALUES (?, ?, ?, ?, ?)',
      [name, email, hashedPassword, job, address]
    );

    // Generate token
    const token = jwt.sign(
      { id: result.insertId, email, role: 'user' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: result.insertId,
        name,
        email,
        job,
        address,
        role: 'user'
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('[LOGIN] Request:', { email: email || '(kosong)', passwordAda: !!password });

    if (!email || !password) {
      console.log('[LOGIN] Gagal: email atau password kosong');
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      console.log('[LOGIN] Gagal: user tidak ditemukan untuk email:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = users[0];
    console.log('[LOGIN] User ditemukan:', { id: user.id, email: user.email, role: user.role });

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log('[LOGIN] Cek password:', isValidPassword ? 'COCOK' : 'TIDAK COCOK');

    if (!isValidPassword) {
      console.log('[LOGIN] Gagal: password salah');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log('[LOGIN] Sukses:', user.email);
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        job: user.job,
        address: user.address,
        role: user.role
      }
    });
  } catch (error) {
    console.error('[LOGIN] Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    const [users] = await pool.execute(
      'SELECT id, name, email, role, job, address, created_at FROM users WHERE id = ?',
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user: users[0] });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { register, login, getMe };
