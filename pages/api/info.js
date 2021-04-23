export default function handler(req, res) {
  res.status(200).json({ 
    age: '17',
    language: 'English',
    favorite: 'nodejs',
    framework: 'nextjs'
    })
}