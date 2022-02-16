import React from "react";

import { useParams } from "react-router-dom";
import useBusinessData from "../../Hooks/useBusinessData";

import Card from "./Components/Card/Card";
import Image from "./Components/Image/Image";
import Header from "../../Shared/Header/Header";

import Container from "./Components/Container/Container";
import FlexWrap from "./Components/Shared/FlexWrap/FlexWrap";
import InfoContainer from "./Components/Shared/InfoContainer/InfoContainer";
import SmallContainer from "./Components/Shared/SmallContainer/SmallContainer";
import GlobalError from "../../Shared/GlobalError/GlobalError";

interface Type {
  id: string;
}

const ViewMain: React.FC = () => {
  const { id } = useParams<Type>();
  let { data, isLoading } = useBusinessData(id);

  if (isLoading)
    return (
      <>
        <Header />
        <h1>Loading</h1>
      </>
    );
  if (!data.length) {
    return (
      <>
        <Header />
        <GlobalError
          errorMsg="The Page does not exist"
          subMsg="Go Back"
          href="/"
        />
      </>
    );
  }

  const { address, description, email, name, phone, image } = data[0];
  const { city, country, number, street, zip } = address;
  return (
    <>
      <Header />
      <Container>
        <Image image={image} />
        <FlexWrap>
          <SmallContainer>
            <InfoContainer
              title="Address"
              firstLine={`${number} ${street}`}
              secondLine={`${country}, ${city} ${zip}`}
            />
            <InfoContainer
              title="Contact"
              firstLine={phone}
              secondLine={email}
            />
          </SmallContainer>
          <SmallContainer>
            <Card title="Nearby Places" description={description} name={name} />
          </SmallContainer>
        </FlexWrap>
      </Container>
    </>
  );
};

export default ViewMain;
