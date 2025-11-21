import React from "react";

export default function GeoProtecWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-6 flex justify-between items-center shadow-xl">
        <h1 className="text-2xl font-bold tracking-wide">
          Geo<span className="text-green-600">Protec</span> Tabasco
        </h1>
        <nav className="space-x-6 text-lg">
          <a href="#servicios" className="hover:text-green-500">Servicios</a>
          <a href="#productos" className="hover:text-green-500">Productos</a>
          <a href="#contacto" className="hover:text-green-500">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 p-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Soluciones Profesionales en <span className="text-green-600">Geosintéticos</span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Impermeabilización, contención y protección para proyectos industriales, agrícolas y ambientales.
        </p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="p-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Nuestros Servicios</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl shadow border hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2 text-green-700">Instalación de Geomembranas</h4>
            <p>Soldadura, pruebas de calidad y habilitado de superficie.</p>
          </div>

          <div className="p-6 rounded-2xl shadow border hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2 text-green-700">Mantenimiento y Reparación</h4>
            <p>Rehabilitación, sellado y reparación por termofusión.</p>
          </div>

          <div className="p-6 rounded-2xl shadow border hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2 text-green-700">Lonas Industriales</h4>
            <p>Suministro, renta y fabricación de lonas especializadas.</p>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="p-16 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-10">Productos</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl shadow border">
            <h4 className="text-xl font-bold text-green-700">Geomembrana 1.0 mm</h4>
            <p className="mt-2 text-gray-600">Precio: $220 por m²</p>
          </div>

          <div className="p-6 rounded-2xl shadow border">
            <h4 className="text-xl font-bold text-green-700">Geomembrana 1.5 mm</h4>
            <p className="mt-2 text-gray-600">Precio: $305 por m²</p>
          </div>

          <div className="p-6 rounded-2xl shadow border">
            <h4 className="text-xl font-bold text-green-700">Geomembrana 2.0 mm</h4>
            <p className="mt-2 text-gray-600">Precio: $360 por m²</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="p-16 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-6">Contacto</h3>
        <p className="text-lg">GeoProtec Tabasco · Cunduacán, Tabasco</p>
        <p className="text-lg font-semibold mt-2">Correo: geoprotec.tab@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-center mt-10">
        © {new Date().getFullYear()} GeoProtec Tabasco · Soluciones en Geosintéticos
      </footer>
    </div>
  );
}
