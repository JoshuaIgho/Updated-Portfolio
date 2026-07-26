import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 54,
});

const outputPath = path.join(process.cwd(), 'public', 'joshua_igho_resume_2026.pdf');
const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Styles & Fonts (Using standard Times font matching the exact source document)
const black = '#000000';
const darkGray = '#111111';
const linkBlue = '#2563eb';

// Header Name
doc
  .font('Times-Bold')
  .fontSize(22)
  .fillColor(black)
  .text('JOSHUA IGHO', { align: 'center' });

doc.moveDown(0.4);

// Contact Info Line 1
doc
  .font('Times-Roman')
  .fontSize(10.5)
  .fillColor(black)
  .text('Mail: ', { continued: true, align: 'center' })
  .fillColor('#2563eb')
  .text('Joshuaalex822@gmail.com', { link: 'mailto:Joshuaalex822@gmail.com', continued: true })
  .fillColor(black)
  .text(' | GitHub: ', { continued: true })
  .fillColor('#2563eb')
  .text('https://github.com/JoshuaIgho', { link: 'https://github.com/JoshuaIgho', continued: false });

doc.moveDown(0.25);

// Contact Info Line 2
doc
  .font('Times-Roman')
  .fontSize(10.5)
  .fillColor(black)
  .text('| Portfolio: ', { continued: true, align: 'center' })
  .fillColor('#2563eb')
  .text('https://joshuaigho.netlify.app', { link: 'https://joshuaigho.netlify.app', continued: true })
  .fillColor(black)
  .text(' | LinkedIn: ', { continued: true })
  .fillColor('#2563eb')
  .text('https://www.linkedin.com/in/joshtechbuild', { link: 'https://www.linkedin.com/in/joshtechbuild', continued: true })
  .fillColor(black)
  .text(' |', { continued: false });

doc.moveDown(1.2);

// Section: SUMMARY
doc
  .font('Times-Bold')
  .fontSize(13)
  .fillColor(black)
  .text('SUMMARY');

doc
  .moveTo(54, doc.y + 2)
  .lineTo(541, doc.y + 2)
  .strokeColor('#000000')
  .lineWidth(0.8)
  .stroke();

doc.moveDown(0.6);

doc
  .font('Times-Roman')
  .fontSize(11)
  .fillColor(black)
  .lineGap(3)
  .text(
    'A Full-Stack Software Engineer with experience designing and building modern web applications, scalable backend systems, and secure authentication platforms. Skilled in React, Node.js, Express.js, TypeScript, and PostgreSQL, with a passion for creating developer-focused tools and delivering responsive, high-performance digital experiences.',
    { align: 'left' }
  );

doc.moveDown(1.2);

// Section: EXPERIENCE
doc
  .font('Times-Bold')
  .fontSize(13)
  .fillColor(black)
  .text('EXPERIENCE');

doc
  .moveTo(54, doc.y + 2)
  .lineTo(541, doc.y + 2)
  .strokeColor('#000000')
  .lineWidth(0.8)
  .stroke();

doc.moveDown(0.6);

// Job 1: FortifyAuth
doc
  .font('Times-Roman')
  .fontSize(11)
  .fillColor(black)
  .text('Full-Stack Software Engineer');

doc.moveDown(0.2);

doc
  .font('Times-Bold')
  .fontSize(11)
  .fillColor(black)
  .text('FortifyAuth');

doc
  .font('Times-Italic')
  .fontSize(11)
  .fillColor(black)
  .text('Jan 2026 – Present');

doc.moveDown(0.3);

const fortifyBullets = [
  'Designed and developed a developer-first authentication platform using Node.js, Express.js, TypeScript, and PostgreSQL.',
  'Built secure REST APIs for authentication, authorization, user management, and JWT-based authentication.',
  'Developed interactive API documentation and an API playground to improve the developer integration experience.',
  'Applied backend security best practices including password hashing, request validation, and role-based access control.'
];

fortifyBullets.forEach((bullet) => {
  doc
    .font('Times-Roman')
    .fontSize(11)
    .fillColor(black)
    .text(`•  ${bullet}`, { indent: 12, lineGap: 3 });
});

doc.moveDown(1);

// Job 2: Ijituyi Signature
doc
  .font('Times-Roman')
  .fontSize(11)
  .fillColor(black)
  .text('Frontend Developer');

doc.moveDown(0.2);

doc
  .font('Times-Bold')
  .fontSize(11)
  .fillColor(black)
  .text('Ijituyi Signature');

doc
  .font('Times-Italic')
  .fontSize(11)
  .fillColor(black)
  .text('Jan 2026 – Feb 2026');

doc.moveDown(0.3);

const ijituyiBullets = [
  'Developed responsive React interfaces for a premium business website.',
  'Built reusable UI components and implemented responsive layouts.',
  'Optimized frontend performance and improved user experience across devices.'
];

ijituyiBullets.forEach((bullet) => {
  doc
    .font('Times-Roman')
    .fontSize(11)
    .fillColor(black)
    .text(`•  ${bullet}`, { indent: 12, lineGap: 3 });
});

doc.moveDown(1);

// Job 3: Africa Caribbean Connect
doc
  .font('Times-Roman')
  .fontSize(11)
  .fillColor(black)
  .text('Frontend Developer');

doc.moveDown(0.2);

doc
  .font('Times-Bold')
  .fontSize(11)
  .fillColor(black)
  .text('Africa Caribbean Connect');

doc
  .font('Times-Italic')
  .fontSize(11)
  .fillColor(black)
  .text('Feb 2025 – Mar 2025');

doc.moveDown(0.3);

const africaBullets = [
  'Built responsive frontend interfaces using React and Tailwind CSS.',
  'Implemented reusable components and interactive content sections.',
  'Collaborated on delivering a production-ready organizational website.'
];

africaBullets.forEach((bullet) => {
  doc
    .font('Times-Roman')
    .fontSize(11)
    .fillColor(black)
    .text(`•  ${bullet}`, { indent: 12, lineGap: 3 });
});

doc.moveDown(1);

// Job 4: Charmé
doc
  .font('Times-Roman')
  .fontSize(11)
  .fillColor(black)
  .text('Full-Stack Engineer');

doc.moveDown(0.2);

doc
  .font('Times-Bold')
  .fontSize(11)
  .fillColor(black)
  .text('Charmé');

doc
  .font('Times-Italic')
  .fontSize(11)
  .fillColor(black)
  .text('2023 – 2024');

doc.moveDown(0.3);

const charmeBullets = [
  'Designed and developed a full-stack e-commerce platform.',
  'Built secure authentication, product management, shopping cart, and checkout functionality.',
  'Developed RESTful APIs using Node.js and Express.js with PostgreSQL.',
  'Optimized application architecture and database performance.'
];

charmeBullets.forEach((bullet) => {
  doc
    .font('Times-Roman')
    .fontSize(11)
    .fillColor(black)
    .text(`•  ${bullet}`, { indent: 12, lineGap: 3 });
});

doc.moveDown(1.2);

// Section: EDUCATION
doc
  .font('Times-Bold')
  .fontSize(13)
  .fillColor(black)
  .text('EDUCATION');

doc
  .moveTo(54, doc.y + 2)
  .lineTo(541, doc.y + 2)
  .strokeColor('#000000')
  .lineWidth(0.8)
  .stroke();

doc.moveDown(0.6);

doc
  .font('Times-Bold')
  .fontSize(11)
  .fillColor(black)
  .text('B.Sc. Computer Science');

doc.moveDown(0.2);

doc
  .font('Times-Roman')
  .fontSize(11)
  .fillColor(black)
  .text('Oduduwa University, Ipetumodu (OUI)');

doc.end();

writeStream.on('finish', () => {
  console.log('PDF generated successfully at:', outputPath);
});
