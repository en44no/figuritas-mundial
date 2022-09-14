import { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center p-4 border-2 border-gray-900 rounded-tl-md rounded-bl-md">
        <h1 className="text-center text-4xl">Ajustes</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-left font-semibold">Nombre</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Fecha de nacimiento</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Fecha de nacimiento" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Pais</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Pais" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Debut en la seleccion</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Debut en la seleccion" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Altura</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Altura" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left font-semibold">Peso</label>
            <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Peso" />
          </div>
        </div>
      </div>
      <div className="text-center p-4 border-2 border-gray-900 border-l-0 rounded-tr-md rounded-br-md">
        <h1 className="text-center text-4xl">Previsualización</h1>
        <div className="border-2 border-gray-900 bg-[#d53618] w-96 p-5">
          <div className="flex justify-between">
            <div>
              <h6>Foto Copa</h6>
              <h6>Lugar en la cancha</h6>
            </div>
            <div>
              <div className="bg-white">
                <h6 className="font-bold text-[#67392e]">ARG</h6>
                <h6>Nacionalidad</h6>
              </div>
              <h6 className="font-bold text-white">2005</h6>
              <div className="flex gap-2">
                <h6 className="font-bold text-white">1,70</h6>
                <h6 className="font-bold text-white">72</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white">
              <h6 className="font-bold text-[#67392e]">LIONEL MESSI</h6>
            </div>
            <div className="bg-[#67392e]">
              <h6 className="font-bold text-white">{dateOfBirth}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
