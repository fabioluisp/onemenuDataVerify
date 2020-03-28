import React from "react";
import { Container, Avatar, Cover, Header, Ambiente } from "./styles";

// import Product from "../Product";
import product from "../../data/Product.json";

import place from "../../data/Place.json";
import images from "../../data/Image.json";
import placeCategory from "../../data/PlaceCategory.json";
import placeCategortRelation from "../../data/PlaceCategoryRelation.json";
import placeAmbienteRel from "../../data/_Join꞉images꞉Place.json";
// var index = { value: 0 };

// function handleSubmit(event) {
//   alert("Um nome foi enviado: " + index.value);
//   event.preventDefault();
// }

// function handleChange(event) {
//   index = { value: event.target.value };
// }

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, index: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleAnterior = this.handleAnterior.bind(this);
    // this.handleProximo = this.handleProximo.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handleAnterior = () => {
  //   // this.setState({ index: this.state.index - 1 });
  //   this.setState(prevState => {
  //     return { index: prevState.index - 1 };
  //   });
  // };

  // handleProximo = () => {
  //   // this.setState({ index: this.state.index - 1 });
  //   this.setState(prevState => {
  //     return { index: prevState.index + 1 };
  //   });
  // };

  handleSubmit(event) {
    this.setState({ index: this.state.value });
    // alert("Um evento foi enviado: " + event.target.value);
    // console.log(event.target.value);
    event.preventDefault();
  }

  onclick(type) {
    console.log("type: ", type);
    this.setState(prevState => {
      return {
        index:
          type === "next"
            ? Number(prevState.index) + 1
            : Number(prevState.index) - 1
      };
    });
  }

  render() {
    console.log("this.state.index", this.state.index);
    // let teste = Product(place[this.state.index].objectId);
    // console.log("Products", teste);

    // console.log(
    //   "place[this.state.index].openingHours > ",
    //   place[this.state.index].openingHours
    // );
    // let openingHours = [];
    // openingHours = place[this.state.index].openingHours.map(horario => {
    //   // console.log("place[this.state.index] > ", place[this.state.index]);
    //   // console.log("horario > ", horario);
    //   // console.log("horario.weekDay > ", horario.weekDay);
    //   // console.log("horario.weekDay.timeStart > ", horario.weekDay.timeStart);
    //   switch (horario.weekDay) {
    //     case 0:
    //       openingHours.push(
    //         // "Segunda-feira"
    //         `
    //           Segunda-feira, de ${horario.timeStart} até
    //           ${horario.timeEnd}
    //         `
    //       );
    //       break;
    //     case 1:
    //       openingHours.push(
    //         // "Terça-feira"
    //         `
    //           Terça-feira, de ${horario.timeStart} até
    //           ${horario.timeEnd}
    //         `
    //       );
    //       break;
    //     case 2:
    //       openingHours.push(
    //         // "Quarta-feira"
    //         `
    //           Quarta-feira, de ${horario.weekDay.timeStart} até
    //           ${horario.weekDay.timeEnd}
    //         `
    //       );
    //       break;
    //     case 3:
    //       openingHours.push(
    //         // "Quinta-feira"
    //         `
    //           Quinta-feira, de ${horario.weekDay.timeStart} até
    //           ${horario.weekDay.timeEnd}
    //         `
    //       );
    //       break;
    //     case 4:
    //       openingHours.push(
    //         // "Sexta-feira"
    //         `
    //           Sexta-feira, de ${horario.weekDay.timeStart} até
    //           ${horario.weekDay.timeEnd}
    //         `
    //       );
    //       break;
    //     case 5:
    //       openingHours.push(
    //         // "Sábado"
    //         `
    //           Sábado, de ${horario.weekDay.timeStart} até
    //           ${horario.weekDay.timeEnd}
    //         `
    //       );
    //       break;
    //     default:
    //       openingHours.push(
    //         // "Domingo"
    //         `
    //           Domingo, de ${horario.weekDay.timeStart} até
    //           ${horario.weekDay.timeEnd}
    //         `
    //       );
    //       break;
    //   }
    //   return openingHours;
    // });
    // console.log("openingHours", openingHours);
    for (let i = 0; i < placeAmbienteRel.length; i++) {
      if (placeAmbienteRel[i].owningId === place[this.state.index].objectId) {
        place[this.state.index].placeAmbienteRel =
          placeAmbienteRel[i].relatedId;
      }
    }

    console.log("placeAmbienteRel", place[this.state.index].placeAmbienteRel);
    for (let i = 0; i < images.length; i++) {
      if (place[this.state.index].placeAmbienteRel === images[i].objectId) {
        place[this.state.index].imgAmbienteUrl = images[i].file.url;
      }
    }
    // console.log(
    //   "this.state.imgAmbienteURL => ",
    //   place[this.state.index].imgAmbienteUrl
    // );

    return (
      <>
        <Header>
          <form onSubmit={this.handleSubmit}>
            <label>
              Índice inicial:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Enviar" />
          </form>

          <input
            type="button"
            onClick={this.onclick.bind(this, "prev")}
            value="Anterior"
          />
          <input
            type="button"
            onClick={this.onclick.bind(this, "next")}
            value="Próximo"
          />
        </Header>
        <Container>
          <br />
          <br />
          <br />
          <div>
            <h1>Restaurante: {place[this.state.index].name}</h1>
            <h3>Endereço: {place[this.state.index].address}</h3>
            {/* <h3>
              GeoLocation: lat-> {place[this.state.index].location.latitude} e
              long -> {place[this.state.index].location.longitude}
            </h3>
            <h3>
              Horario de funcionamento:
              {openingHours}
              {openingHours.map(horario => {
              return horario;
            })}
            </h3> */}
            <h3>Avatar (Logo):</h3>
            <Avatar src={place[this.state.index].avatar.url} />
            <h3>Cover:</h3>
            <Cover src={place[this.state.index].cover.url} />
            <h3>Ambiente:</h3>
            <Ambiente src={place[this.state.index].imgAmbienteUrl} />
            {/* <Product({place[this.state.index].objectId}) /> */}
            <h2>Produtos</h2>
            <ul>
              {product.map(prod => {
                if (prod.place.objectId === place[this.state.index].objectId) {
                  // console.log("if prod", prod);

                  // products.push(<li key={prod.objectId}>{prod.name}</li>);
                  return (
                    <li key={prod.objectId}>
                      Nome: {prod.name}, Imagem:{" "}
                      <img src={prod.image.url} alt="produto" />
                    </li>
                  );
                }
              })}
            </ul>
            <h3>Horario de funcionamento: </h3>
          </div>
        </Container>
      </>
    );
  }
}
