Feature: Como Carlos quiero tener una aplicación Pokédex donde se puedan visualizar los pokémon junto con toda la información de cada personaje
  Scenario Outline: Identificar el número de directivos por sector organización y tipo de gobierno
    Given la API listar los pokémon de la api mencionada según los datos de paginación de <OFFSET> y <LIMIT>
     Then Listar pokemones
    Examples: 
      | NAME      | URL                                  | OFFSET | LIMIT | 
      | bulbasaur | https://pokeapi.co/api/v2/pokemon/1/ | 0      | 20    | 
      | ivysaur   | https://pokeapi.co/api/v2/pokemon/2/ | 0      | 20    | 