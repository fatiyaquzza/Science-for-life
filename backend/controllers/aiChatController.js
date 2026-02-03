const { GoogleGenerativeAI } = require('@google/generative-ai');
const pool = require('../config/database');

const chat = async (req, res) => {
  try {
    const { message, sub_module_id } = req.body;

    if (!message || !sub_module_id) {
      return res.status(400).json({ message: 'Message and sub_module_id are required' });
    }

    // Get sub module info for context
    const [subModules] = await pool.execute(
      `SELECT sm.*, m.name as module_name
       FROM sub_modules sm
       JOIN modules m ON sm.module_id = m.id
       WHERE sm.id = ?`,
      [sub_module_id]
    );

    if (subModules.length === 0) {
      return res.status(404).json({ message: 'Sub module not found' });
    }

    const subModule = subModules[0];

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create context prompt
    const contextPrompt = `Kamu adalah asisten AI yang membantu siswa belajar tentang materi "${subModule.name}" dari modul "${subModule.module_name}". 

Deskripsi materi: ${subModule.description || 'Tidak ada deskripsi tersedia'}

Jawab pertanyaan siswa dengan jelas, ramah, dan membantu. Jika pertanyaan tidak terkait dengan materi ini, arahkan siswa kembali ke topik materi. Gunakan bahasa Indonesia yang mudah dipahami.`;

    const prompt = `${contextPrompt}\n\nPertanyaan siswa: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      message: text,
      sub_module_name: subModule.name
    });
  } catch (error) {
    console.error('AI Chat error:', error);
    res.status(500).json({ 
      message: 'Error communicating with AI', 
      error: error.message 
    });
  }
};

module.exports = { chat };
