import React from "react";

import { useParams } from "react-router-dom";
import useBusinessData from "../../Hooks/useBusinessData";

import Card from "./Components/Card/Card";
import Image from "./Components/Image/Image";

import GlobalError from "../../Shared/GlobalError/GlobalError";

import Container from "./Components/Container/Container";
import FlexWrap from "./Components/Shared/FlexWrap/FlexWrap";
import InfoContainer from "./Components/Shared/InfoContainer/InfoContainer";
import SmallContainer from "./Components/Shared/SmallContainer/SmallContainer";

interface Type {
  id: string;
}

const ViewMain: React.FC = () => {
  const { id } = useParams<Type>();
  let { data, isLoading } = useBusinessData({ id });

  if (isLoading) return null;

  if (!data.length) {
    return <GlobalError errorMsg="No info found." subMsg="Go Back." href="/" />;
  }

  const { address, email, phone, image } = data[0];
  const { city, country, number, street, zip } = address;

  return (
    <>
      {!isLoading ? (
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
              <Card searchCity={city} title="Nearby Places" />
            </SmallContainer>
          </FlexWrap>
        </Container>
      ) : null}
    </>
  );
};

export default ViewMain;
