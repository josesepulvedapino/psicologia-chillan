#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando análisis de rendimiento...\n');

// 1. Verificar que la app esté construida
console.log('📦 Verificando build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build exitoso\n');
} catch (error) {
  console.error('❌ Error en el build:', error.message);
  process.exit(1);
}

// 2. Iniciar servidor en background
console.log('🌐 Iniciando servidor...');
let serverProcess;
try {
  serverProcess = execSync('npm start', { 
    stdio: 'pipe',
    detached: true 
  });
  
  // Esperar a que el servidor inicie
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log('✅ Servidor iniciado\n');
} catch (error) {
  console.error('❌ Error iniciando servidor:', error.message);
  process.exit(1);
}

// 3. Ejecutar Lighthouse
console.log('🔍 Ejecutando análisis de Lighthouse...');
try {
  execSync('lighthouse http://localhost:3000 --output html --output-path ./reports/lighthouse-report.html --chrome-flags="--headless"', { 
    stdio: 'inherit' 
  });
  console.log('✅ Reporte de Lighthouse generado\n');
} catch (error) {
  console.log('⚠️  Lighthouse no instalado. Instalando...');
  try {
    execSync('npm install -g lighthouse', { stdio: 'inherit' });
    execSync('lighthouse http://localhost:3000 --output html --output-path ./reports/lighthouse-report.html --chrome-flags="--headless"', { 
      stdio: 'inherit' 
    });
    console.log('✅ Reporte de Lighthouse generado\n');
  } catch (lighthouseError) {
    console.error('❌ Error con Lighthouse:', lighthouseError.message);
  }
}

// 4. Verificar archivos de SEO
console.log('🔍 Verificando archivos de SEO...');
const seoFiles = [
  'app/sitemap.ts',
  'app/robots.ts',
  'app/manifest.ts',
  'app/layout.tsx'
];

seoFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Existe`);
  } else {
    console.log(`❌ ${file} - No encontrado`);
  }
});

// 5. Verificar imágenes optimizadas
console.log('\n🖼️  Verificando optimización de imágenes...');
const publicDir = 'public';
const imageExtensions = ['.webp', '.jpg', '.jpeg', '.png'];

if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  const images = files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );
  
  console.log(`📊 Total de imágenes: ${images.length}`);
  
  // Verificar WebP
  const webpImages = images.filter(img => img.toLowerCase().endsWith('.webp'));
  const webpPercentage = Math.round((webpImages.length / images.length) * 100);
  console.log(`🎯 Imágenes WebP: ${webpImages.length}/${images.length} (${webpPercentage}%)`);
  
  if (webpPercentage < 80) {
    console.log('⚠️  Considera convertir más imágenes a WebP para mejor rendimiento');
  }
}

// 6. Verificar bundle size
console.log('\n📦 Analizando tamaño del bundle...');
try {
  execSync('npx @next/bundle-analyzer', { stdio: 'inherit' });
} catch (error) {
  console.log('💡 Para analizar el bundle: npm install --save-dev @next/bundle-analyzer');
}

console.log('\n🎉 Análisis completado!');
console.log('📄 Revisa el reporte en: ./reports/lighthouse-report.html');

// Cleanup
if (serverProcess) {
  serverProcess.kill();
}
