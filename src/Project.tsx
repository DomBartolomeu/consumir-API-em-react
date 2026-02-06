import { useState } from "react"
import type { Cep } from "./types/Cep"
import api from "./services/api"

export function Project() {
  const[cep,setCep] = useState<string>("")
  const[endereco,setEndereco] =useState<Cep | null>(null)
  const[erro,setErro] = useState<string>("")

  async function buscarCep() {
    try{
      setErro("")
      const response = await api.get(`/${cep}/json`)
      setEndereco(response.data)
      }
      catch{
        setErro("Cep inválido. Digite novamente")
        setEndereco(null)
      }
  }
  return(
    <div>
      <h1>Consultar Cep</h1>
      
      <input
      value={cep}
      onChange={e => setCep(e.target.value)}
      placeholder="Digite um cep válido"
      />

      <button onClick={buscarCep}>Consultar</button>

      {erro && <p style={{color:"red"}}>{erro}</p>}

      {endereco && (
        <div>
          <p>Rua:{endereco.logradouro}</p>
          <p>Bairro:{endereco.bairro}</p>
          <p>Cidade:{endereco.localidade}</p>
          <p>UF:{endereco.uf}</p>
        </div>)}

    </div>
  )
}
