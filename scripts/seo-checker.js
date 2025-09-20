#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificador de SEO - Psicología Chillán\n');

// Función para leer archivos
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

// Función para extraer metadata
function extractMetadata(content, filePath) {
  const issues = [];
  const suggestions = [];

  // Verificar título
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length < 30) {
      issues.push(`❌ Título muy corto (${title.length} caracteres): "${title}"`);
    } else if (title.length > 60) {
      issues.push(`❌ Título muy largo (${title.length} caracteres): "${title}"`);
    } else {
      console.log(`✅ Título optimizado (${title.length} caracteres): "${title}"`);
    }
  }

  // Verificar descripción
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) {
    const description = descMatch[1];
    if (description.length < 120) {
      issues.push(`❌ Descripción muy corta (${description.length} caracteres)`);
    } else if (description.length > 160) {
      issues.push(`❌ Descripción muy larga (${description.length} caracteres)`);
    } else {
      console.log(`✅ Descripción optimizada (${description.length} caracteres)`);
    }
  }

  // Verificar keywords
  const keywordsMatch = content.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
  if (keywordsMatch) {
    const keywords = keywordsMatch[1];
    const keywordCount = keywords.split(',').length;
    console.log(`✅ Keywords encontradas: ${keywordCount} términos`);
  } else {
    suggestions.push('💡 Considera agregar keywords específicas');
  }

  // Verificar OpenGraph
  if (content.includes('openGraph:')) {
    console.log('✅ OpenGraph configurado');
  } else {
    issues.push('❌ OpenGraph no configurado');
  }

  // Verificar Twitter Cards
  if (content.includes('twitter:')) {
    console.log('✅ Twitter Cards configurado');
  } else {
    suggestions.push('💡 Considera agregar Twitter Cards');
  }

  // Verificar canonical
  if (content.includes('canonical')) {
    console.log('✅ URL canónica configurada');
  } else {
    suggestions.push('💡 Considera agregar URL canónica');
  }

  return { issues, suggestions };
}

// Analizar archivos principales
console.log('📄 Analizando archivos de SEO...\n');

const filesToCheck = [
  { path: 'app/layout.tsx', name: 'Layout Principal' },
  { path: 'app/blog/page.tsx', name: 'Página del Blog' },
  { path: 'app/blog/[slug]/page.tsx', name: 'Posts del Blog' }
];

filesToCheck.forEach(({ path: filePath, name }) => {
  console.log(`\n🔍 ${name}:`);
  const content = readFile(filePath);
  
  if (!content) {
    console.log(`❌ Archivo no encontrado: ${filePath}`);
    return;
  }

  const { issues, suggestions } = extractMetadata(content, filePath);
  
  issues.forEach(issue => console.log(issue));
  suggestions.forEach(suggestion => console.log(suggestion));
});

// Verificar archivos de SEO técnico
console.log('\n\n🔧 Verificando SEO técnico...\n');

const seoFiles = [
  { path: 'app/sitemap.ts', name: 'Sitemap' },
  { path: 'app/robots.ts', name: 'Robots.txt' },
  { path: 'app/manifest.ts', name: 'Web App Manifest' }
];

seoFiles.forEach(({ path: filePath, name }) => {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${name} - Existe`);
    
    // Verificar contenido específico
    const content = readFile(filePath);
    
    if (name === 'Sitemap' && content.includes('psicologiachillan.cl')) {
      console.log('  ✅ Dominio correcto en sitemap');
    }
    
    if (name === 'Robots.txt' && content.includes('User-agent')) {
      console.log('  ✅ Robots.txt configurado');
    }
    
    if (name === 'Web App Manifest' && content.includes('Psicología')) {
      console.log('  ✅ Manifest configurado');
    }
  } else {
    console.log(`❌ ${name} - No encontrado`);
  }
});

// Verificar structured data
console.log('\n\n📊 Verificando Structured Data...\n');

const structuredDataFiles = [
  'components/structured-data.tsx',
  'components/blog-structured-data.tsx'
];

structuredDataFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Existe`);
    const content = readFile(file);
    if (content.includes('schema.org')) {
      console.log('  ✅ Schema.org implementado');
    }
  } else {
    console.log(`❌ ${file} - No encontrado`);
  }
});

// Verificar imágenes
console.log('\n\n🖼️  Verificando optimización de imágenes...\n');

const publicDir = 'public';
if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  const images = files.filter(file => 
    /\.(webp|jpg|jpeg|png)$/i.test(file)
  );
  
  const webpImages = images.filter(img => img.toLowerCase().endsWith('.webp'));
  const webpPercentage = Math.round((webpImages.length / images.length) * 100);
  
  console.log(`📊 Total de imágenes: ${images.length}`);
  console.log(`🎯 Imágenes WebP: ${webpImages.length}/${images.length} (${webpPercentage}%)`);
  
  if (webpPercentage < 80) {
    console.log('⚠️  Considera convertir más imágenes a WebP');
  } else {
    console.log('✅ Excelente optimización de imágenes');
  }
}

// Verificar next.config.mjs
console.log('\n\n⚙️  Verificando configuración de Next.js...\n');

const configContent = readFile('next.config.mjs');
if (configContent) {
  console.log('✅ next.config.mjs encontrado');
  
  if (configContent.includes('remotePatterns')) {
    console.log('  ✅ Configuración de imágenes externas');
  }
  
  if (configContent.includes('compress')) {
    console.log('  ✅ Compresión habilitada');
  }
  
  if (configContent.includes('headers')) {
    console.log('  ✅ Headers de seguridad configurados');
  }
} else {
  console.log('❌ next.config.mjs no encontrado');
}

console.log('\n\n🎉 Verificación de SEO completada!');
console.log('\n📋 Resumen:');
console.log('• Revisa los ❌ para errores críticos');
console.log('• Considera los 💡 para mejoras');
console.log('• Los ✅ indican configuraciones correctas');
