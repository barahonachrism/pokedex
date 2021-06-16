import axios from "axios";

export default class PokemonServices {
  

  async getInformacionSesion(propiedad) {

    let valorPropiedad = sessionStorage.getItem(propiedad);
    if(valorPropiedad){
        return valorPropiedad;
    }
    const options = {
        headers: this.infoSesion,
    };
    valorPropiedad = await axios.get(
        `/directivas/sesion/info/${this.infoSesion.token}/${propiedad}`,
        options
    );
    sessionStorage.setItem(propiedad,valorPropiedad.data);
    return valorPropiedad;
}

}
